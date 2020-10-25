import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Pagination } from 'src/app/models/pagination';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-card-wrapper',
  templateUrl: './character-card-wrapper.component.html',
  styleUrls: ['./character-card-wrapper.component.scss']
})
export class CharacterCardWrapperComponent implements OnInit {

  private _pagination: Pagination;
  private _characters: Character[];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe((request) => {
      this._pagination = request.info;
      this._characters = request.results;
    });
  }

  public get characters(): Character[] {
    return this._characters;
  }
  public get pagination(): Pagination {
    return this._pagination;
  }

}
