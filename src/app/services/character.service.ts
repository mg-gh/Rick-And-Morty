import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from 'src/app/enums/endpoints';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Request } from 'src/app/models/request';
import { Episode } from 'src/app/models/episode';
import { Location } from 'src/app/models/location';
import { EpisodeCacheService } from './episode-cache.service';
import { LocationCacheService } from './location-cache.service';

const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient, private episodeCache: EpisodeCacheService, private locationCache: LocationCacheService) { }

  public getAllCharacters(): Observable<Request> {
    return this.http.get<Request>(Endpoints.CHARACTERS);
  }

  public getEpisode(url: string): Observable<Episode> {
    let episode = this.episodeCache.episodesMap.get(url);
    if (!episode) {
      episode = this.episodeCache.episodesMap.set(url, this.http.get<Episode>(url).pipe(
        shareReplay(CACHE_SIZE))).get(url);
    }
    return episode;
  }

  public getLocation(url: string): Observable<Location> {
    let location = this.locationCache.locationsMap.get(url);
    if (!location) {
      location = this.locationCache.locationsMap.set(url, this.http.get<Location>(url).pipe(
        shareReplay(CACHE_SIZE))).get(url);
    }
    return location;
  }
}
