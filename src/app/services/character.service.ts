import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Endpoints } from 'src/app/enums/endpoints';
import { Observable, throwError } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { Request } from 'src/app/models/request';
import { Episode } from 'src/app/models/episode';
import { Location } from 'src/app/models/location';
import { EpisodeCacheService } from './episode-cache.service';
import { LocationCacheService } from './location-cache.service';
import { CharacterCacheService } from './character-cache.service';

const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient,
    private episodeCache: EpisodeCacheService,
    private locationCache: LocationCacheService,
    private characterCache: CharacterCacheService) { }

  public getAllCharacters(page?: number): Observable<Request> {
    let url = '' + Endpoints.CHARACTERS;
    if (page) {
      url += '?page=' + page;
    }
    return this.http.get<Request>(url).pipe(
      tap(),
      catchError(err =>  this.errorHandler(err))
    );
  }

  public getCharacter(name: string): Observable<Request> {
    let character = this.characterCache.charactersMap.get(name);
    if (!character) {
      character = this.characterCache.charactersMap.set(name, this.http.get<Request>(Endpoints.CHARACTERS + '/?name=' + name).pipe(
        shareReplay(CACHE_SIZE),
        catchError(err =>  this.errorHandler(err))
        )).get(name);
    }
    return character;
  }

  public getEpisode(url: string): Observable<Episode> {
    let episode = this.episodeCache.episodesMap.get(url);
    if (!episode) {
      episode = this.episodeCache.episodesMap.set(url, this.http.get<Episode>(url).pipe(
        shareReplay(CACHE_SIZE),
        catchError(err =>  this.errorHandler(err))
        )).get(url);
    }
    return episode;
  }

  public getLocation(url: string): Observable<Location> {
    let location = this.locationCache.locationsMap.get(url);
    if (!location) {
      location = this.locationCache.locationsMap.set(url, this.http.get<Location>(url).pipe(
        shareReplay(CACHE_SIZE),
        catchError(err =>  this.errorHandler(err))
        )).get(url);
    }
    return location;
  }

  private errorHandler(error: HttpErrorResponse): Observable<never> {
    return throwError(error.message || 'server error');
  }
}
