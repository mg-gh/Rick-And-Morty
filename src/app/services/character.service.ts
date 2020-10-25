import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../enums/endpoints';
import { Observable } from 'rxjs';
import { Request } from '../models/request';
import { Episode } from '../models/episode';

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

  // getlocationinformation
}
