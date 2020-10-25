import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Constants } from 'src/app/enums/constants';
import { Location } from 'src/app/models/location';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent implements OnInit {

  @Input() character: Character;
  @Input() origin: Location;
  @Input() location: Location;
  private _LAST_KNOWN_LOCATION_LABEL = Constants.LAST_KNOWN_LOCATION_LABEL;
  private _NUMBER_OF_RESIDENTS_LABEL = Constants.NUMBER_OF_RESIDENTS_LABEL;
  private _ORIGIN_LABEL = Constants.ORIGIN_LABEL;

  constructor() { }

  ngOnInit(): void {
  }

  public get LAST_KNOWN_LOCATION_LABEL(): Constants {
    return this._LAST_KNOWN_LOCATION_LABEL;
  }
  public get NUMBER_OF_RESIDENTS_LABEL(): Constants {
    return this._NUMBER_OF_RESIDENTS_LABEL;
  }
  public get ORIGIN_LABEL(): Constants {
    return this._ORIGIN_LABEL;
  }
}
