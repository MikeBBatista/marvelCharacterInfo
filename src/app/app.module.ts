import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { CharacterInfoComponent } from './pages/character-info/character-info.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CharactersSelectComponent } from './pages/character-list/characters-select/characters-select.component';
import { CardComponent } from './shared/components/card/card.component';
import { MarvelCharacterService } from './core/service/marvel-character.service';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterInfoComponent,
    PageNotFoundComponent,
    CharactersSelectComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [MarvelCharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
