import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Episode } from 'src/app/models/episode';
import { CharacterService } from 'src/app/services/character.service';
import { Constants } from 'src/app/enums/constants';
import { Location } from 'src/app/models/location';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit, OnChanges {

  @Input() character: Character;
  private _ACCORDION_TITLE_LABEL = Constants.ACCORDION_TITLE_LABEL;
  private _LAST_KNOWN_LOCATION_LABEL = Constants.LAST_KNOWN_LOCATION_LABEL;
  private _NUMBER_OF_RESIDENTS_LABEL = Constants.NUMBER_OF_RESIDENTS_LABEL;
  private _ORIGIN_LABEL = Constants.ORIGIN_LABEL;
  private _episodes = [];
  private _location: Location;
  private _origin: Location;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if (this.character) {
      for (const episode of this.character.episode) {
        this.characterService.getEpisode(episode).subscribe((epi: Episode) => {
          this._episodes.push(epi);
        });
      }
      if (this.character.origin.url) {
        this.characterService.getLocation(this.character.origin.url).subscribe((loc: Location) => {
          this._origin = loc;
        });
      }
      if (this.character.location.url) {
        this.characterService.getLocation(this.character.location.url).subscribe((loc: Location) => {
          this._location = loc;
        });
      }
    }
  }

  public get episodes(): Episode[] {
    return this._episodes;
  }
  public get location(): Location {
    return this._location;
  }
  public get origin(): Location {
    return this._origin;
  }
  public get ACCORDION_TITLE_LABEL(): Constants {
    return this._ACCORDION_TITLE_LABEL;
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
