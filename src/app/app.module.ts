import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CharacterCardWrapperComponent } from './components/character-card-wrapper/character-card-wrapper.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { CharacterInfoComponent } from './components/character-info/character-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    CharacterCardWrapperComponent,
    AccordionComponent,
    CharacterInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
