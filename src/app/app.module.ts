import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.service';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { CharacterInfoComponent } from './pages/character-info/character-info.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BackPageComponent } from './shared/components/back-page/back-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PageLoadingComponent } from './shared/components/page-loading/page-loading.component';
import { CharactersSelectComponent } from './pages/character-list/characters-select/characters-select.component';
import { SelectInfiniteScrollComponent } from './shared/components/select-infinite-scroll/select-infinite-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterInfoComponent,
    PageNotFoundComponent,
    CharactersSelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
