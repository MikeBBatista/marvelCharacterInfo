import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterInfoComponent } from './pages/character-info/character-info.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CharacterListComponent } from './pages/character-list/character-list.component';

const routes: Routes = [
  //Since it's a small application, I didn't apply the modularity with which I could apply lazy loading.
  {
    path: '',
    component: CharacterListComponent
  },
  {
    path: 'characters/:id',
    component: CharacterInfoComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
