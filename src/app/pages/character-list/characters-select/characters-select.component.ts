import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable, Subscription, catchError, forkJoin, throwError } from 'rxjs';

import { CacheCharactersList } from 'src/app/core/models/cache-models';
import { Character, MarvelResponse } from 'src/app/core/models/characters-models';
import { CacheService } from 'src/app/core/service/cache.service';
import { MarvelCharacterService } from 'src/app/core/service/marvel-character.service';

@Component({
  selector: 'app-characters-select',
  templateUrl: './characters-select.component.html',
  styleUrls: ['./characters-select.component.scss']
})
export class CharactersSelectComponent implements OnInit {

  @Input() public filteredItens: string[] = [];
  @Output() filterResult: EventEmitter<Character[]> = new EventEmitter();
  @Output() filterOption: EventEmitter<any> = new EventEmitter();
  public selectOnLoad = false;
  public page: number = 0;
  public totalItems: number = 0;
  private subscriptions: Subscription[] = [];
  public dataSelect: Character[] = [];
  public selectPlaceholder = 'Select a character...';
  private filterSubscriptions: Subscription[] = [];

  constructor(private marvelCharService: MarvelCharacterService, private cacheService: CacheService) { }

  ngOnInit(): void {
    this.getCachedOptions()
    this.getSelectOptions();
  }

  getCachedOptions() {
    const cachedOptions: CacheCharactersList = this.cacheService.getCachedSelectOptions()
    if (cachedOptions.characters) {
      this.dataSelect = cachedOptions.characters;
      this.page = cachedOptions.pageNumber;
      this.totalItems = cachedOptions.totalItems;
    } else {
      this.getSelectOptions();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filteredItens'] && this.filteredItens.length > 0) {
      this.filter();
    }
  }

  getOptionsData() {
    this.page += 1;
    this.getSelectOptions();
  }

  getSelectOptions() {
    this.selectOnLoad = true;
    this.subscriptions
    .push(
      this.marvelCharService.getCharacters(this.page, '', 100).subscribe({
        next: (res) => {
          this.dataSelect = [...this.dataSelect, ...res.data.results];
          this.selectOnLoad = false;
          this.totalItems = res.data.total
          this.cacheService.setCachedSelectOptions(this.dataSelect, this.page, this.totalItems);
        },        
        error: () => {
          const errorMessage = 'Ocorreu um erro ao carregar os personagens. Por favor, tente novamente mais tarde.';
          this.selectOnLoad = false;
          return throwError(() => new Error(errorMessage))
        }
      })
    );
  }

  getCharacterByName(event: string) {
    if (!this.filteredItens.includes(event)) {
      this.filterOption.emit(event);
    }
  }

  filter() {
    let observables: Observable<MarvelResponse>[] = [];
    for (const item of this.filteredItens) {
      observables.push(this.marvelCharService.filterCharacterByName(item).pipe(
        catchError(error => {
          return throwError(() => new Error(this.marvelCharService.manageError(error)));
        })
      ));
    }
    this.filterSubscriptions.push(forkJoin(observables).subscribe((responses: MarvelResponse[]) => {
      let filterResult: Character[] = [];
      responses.forEach((res: MarvelResponse) => {
        filterResult = [...filterResult, ...res.data.results];
      });
      this.filterResult.emit(filterResult);
    }));
  }

  ngOnDestroy() {
    this.filterSubscriptions.forEach(sub => sub.unsubscribe());
  }
}
