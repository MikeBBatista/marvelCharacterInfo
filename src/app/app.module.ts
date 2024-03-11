import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CharacterInfoComponent } from './pages/character-info/character-info.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { CharactersSelectComponent } from './pages/character-list/characters-select/characters-select.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterInfoComponent,
    PageNotFoundComponent,
    CharacterListComponent,
    CharactersSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
