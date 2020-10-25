import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Episode } from 'src/app/models/episode';
import { CharacterService } from 'src/app/services/character.service';
import { Constants } from 'src/app/enums/constants';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit, OnChanges {

  @Input() character: Character;
  private _ACCORDION_TITLE = Constants.ACCORDION_TITLE;
  private _episodes = [];

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
    }
  }

  public get episodes(): Episode[] {
    return this._episodes;
  }
  public get ACCORDION_TITLE(): Constants.ACCORDION_TITLE {
    return this._ACCORDION_TITLE;
  }
}
