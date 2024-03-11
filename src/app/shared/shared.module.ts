import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { PageLoadingComponent } from './components/page-loading/page-loading.component';
import { SelectInfiniteScrollComponent } from './components/select-infinite-scroll/select-infinite-scroll.component';
import { BackPageComponent } from './components/back-page/back-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FilterChipComponent } from './components/filter-chip/filter-chip.component';
import { CardComponent } from './components/card/card.component';
import { NoResultsComponent } from './components/no-results/no-results.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PageLoadingComponent,
    SelectInfiniteScrollComponent,
    BackPageComponent,
    SearchBarComponent,
    FilterChipComponent,
    CardComponent,
    NoResultsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    PageLoadingComponent,
    SelectInfiniteScrollComponent,
    BackPageComponent,
    SearchBarComponent,
    FilterChipComponent,
    CardComponent,
    NoResultsComponent
  ]
})
export class SharedModule { }
