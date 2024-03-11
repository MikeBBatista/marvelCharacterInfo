import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { PageLoadingComponent } from './components/page-loading/page-loading.component';
import { SelectInfiniteScrollComponent } from './components/select-infinite-scroll/select-infinite-scroll.component';
import { BackPageComponent } from './components/back-page/back-page.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PageLoadingComponent,
    SelectInfiniteScrollComponent,
    BackPageComponent,
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
  ]
})
export class SharedModule { }
