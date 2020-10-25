import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from 'src/app/enums/endpoints';
import { Observable } from 'rxjs';
import { Request } from 'src/app/models/request';
import { Episode } from 'src/app/models/episode';
import { Location } from 'src/app/models/location';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  public getAllCharacters(): Observable<Request> {
    return this.http.get<Request>(Endpoints.CHARACTERS);
  }

  public getEpisode(url: string): Observable<Episode> {
    return this.http.get<Episode>(url);
  }

  public getLocation(url: string): Observable<Location> {
    return this.http.get<Location>(url);
  }
}
