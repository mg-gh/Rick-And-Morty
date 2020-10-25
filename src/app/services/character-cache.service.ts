import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../models/request';

@Injectable({
  providedIn: 'root'
})
export class CharacterCacheService {

  private _charactersMap: Map<string, Observable<Request>> = new Map();

  constructor() { }

  public get charactersMap(): Map<string, Observable<Request>> {
    return this._charactersMap;
  }
}
