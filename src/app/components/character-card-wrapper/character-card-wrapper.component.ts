import { Component, OnChanges, OnInit } from '@angular/core';
import { Constants } from 'src/app/enums/constants';
import { Character } from 'src/app/models/character';
import { Pagination } from 'src/app/models/pagination';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-card-wrapper',
  templateUrl: './character-card-wrapper.component.html',
  styleUrls: ['./character-card-wrapper.component.scss']
})
export class CharacterCardWrapperComponent implements OnInit, OnChanges {

  private _APP_TITLE = Constants.APP_TITLE;
  private _pagination: Pagination;
  private _characters: Character[];
  private _searchCharacter: string;
  private _showNoResultsFound = false;

  public pageNumber = 1;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getAllCharacters(this.pageNumber).subscribe((request) => {
      this._pagination = request.info;
      this._characters = request.results;
    }, (error) => {
      this._pagination = null;
      this._characters = null;
      this._showNoResultsFound = true;
    });
  }

  ngOnChanges(): void {
      if (this._searchCharacter) {
        this.characterService.getCharacter(this._searchCharacter).subscribe((request) => {
          this._pagination = request.info;
          this._characters = request.results;
          this._showNoResultsFound = false;
        }, (error) => {
          this._pagination = null;
          this._characters = null;
          this._showNoResultsFound = true;
        });
      } else {
        this.characterService.getAllCharacters(this.pageNumber).subscribe((request) => {
          this._pagination = request.info;
          this._characters = request.results;
          this._showNoResultsFound = false;
        }, (error) => {
          this._pagination = null;
          this._characters = null;
          this._showNoResultsFound = true;
        });
      }
  }

  public get characters(): Character[] {
    return this._characters;
  }
  public get pagination(): Pagination {
    return this._pagination;
  }
  public get showResultsNotFound(): boolean {
    return this._showNoResultsFound;
  }
  public get APP_TITLE(): string {
    return '' + this._APP_TITLE;
  }

  public searchCharacter(event: string): void {
    this._searchCharacter = event;
    this.ngOnChanges();
  }
  public pageChange(event: number): void {
    this.pageNumber = event;
    this.ngOnChanges();
  }

}
