import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardWrapperComponent } from './character-card-wrapper.component';

describe('CharacterCardWrapperComponent', () => {
  let component: CharacterCardWrapperComponent;
  let fixture: ComponentFixture<CharacterCardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCardWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
