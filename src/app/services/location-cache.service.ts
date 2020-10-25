import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationCacheService {

  private _locationsMap: Map<string, Observable<Location>> = new Map();

  constructor() { }

  public get locationsMap(): Map<string, Observable<Location>> {
    return this._locationsMap;
  }
}
