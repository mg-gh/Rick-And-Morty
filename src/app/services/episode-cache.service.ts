import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../models/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeCacheService {

  private _episodesMap: Map<string, Observable<Episode>> = new Map();

  constructor() { }

  public get episodesMap(): Map<string, Observable<Episode>> {
    return this._episodesMap;
  }
}
