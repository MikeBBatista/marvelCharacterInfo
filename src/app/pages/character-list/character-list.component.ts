import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, throwError } from 'rxjs';

import { Character } from 'src/app/core/models/characters-models';
import { CacheCharactersList } from 'src/app/core/models/cache-models';
import { MarvelCharacterService } from 'src/app/core/service/marvel-character.service';
import { CacheService } from 'src/app/core/service/cache.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  public data: Character[] = [];
  public filteredItens: string[] = [];
  public page: number = 0;
  public onLoad: boolean = true;
  public totalItems: number = 0;
  public selectPlaceholder = 'Select a character...'
  public searchInput: string = '';
  private subscriptions: Subscription[] = [];

  constructor(
    private marvelCharService: MarvelCharacterService, 
    private router: Router, 
    private cacheService: CacheService
  ) { }

  ngOnInit() {
    this.getCachedData();
  }

  getCharacters() {
    this.onLoad = true;
    this.subscriptions
    .push(
      this.marvelCharService.getCharacters(this.page, this.searchInput).subscribe( {
        next: (res) => {
          if(this.page === 0) {
          this.data = res.data.results;
          } else {
            this.data = [...this.data, ...res.data.results];
          }
          this.totalItems = res.data.total;
          if (this.searchInput.length === 0) {
            this.cacheService.setCachedCharacterList(this.data, this.page, this.totalItems);
          }
          this.onLoad = false;
        },
        error: () => {
          const errorMessage = 'Ocorreu um erro ao carregar os personagens. Por favor, tente novamente mais tarde.';
          this.onLoad = false;
          return throwError(() => new Error(errorMessage))
        }
      })
    );
  }

  redirectToCharacterInfo(characterId?: number) {
    if(characterId) {
      this.router.navigate(['/characters', characterId])
    }
  }

  searchCharacter(searchValue: any) {
    this.searchInput = searchValue;
    this.onLoad = true;
    this.page = 0;
    this.filteredItens = [];
    if(this.searchInput.length > 0) {
      this.getCharacters();
    } else {
      this.getCachedData();
    }
  }

  getCharacterByName(event: string) {
    this.onLoad = true;
    const newFilteredItens = [...this.filteredItens, event];
    this.filteredItens = newFilteredItens;
    this.totalItems = this.filteredItens.length;
  }

  filter(event: Character[]) {
    this.data = event;
    this.onLoad = false;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage = (scrollPosition + windowHeight) / documentHeight;
    if (scrollPercentage >= 0.99 && this.filteredItens.length === 0) {
      if (!this.onLoad && this.data.length !== this.totalItems) {
        this.page += 1;
        this.getCharacters();
      }
    }
  }

  getCachedData() {
    const cachedData: CacheCharactersList = this.cacheService.getCachedCharacterList();
    if (cachedData.characters) {
      this.data = cachedData.characters;
      this.page = cachedData.pageNumber;
      this.totalItems = cachedData.totalItems;
      this.onLoad = false;
    } else {
      this.getCharacters();
    }
  }

  clearFilters() {
    this.filteredItens = [];
    this.getCachedData();
  }

  removeFilter(filterOptionIndex: number) {
    this.onLoad = true;
    if (this.filteredItens.length > 0) {
      if (filterOptionIndex !== -1) {
      const newFilteredItens = [...this.filteredItens];
      newFilteredItens.splice(filterOptionIndex, 1);
      this.filteredItens = newFilteredItens;
      this.totalItems = this.filteredItens.length;
        if (this.filteredItens.length === 0) {
          this.getCachedData();
        }
      }
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
