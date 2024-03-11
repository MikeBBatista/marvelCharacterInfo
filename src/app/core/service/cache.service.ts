import { Injectable } from '@angular/core';
import { CacheCharactersList } from '../models/cache-models';
import { CacheKeys } from '../enums/cache-keys.enum'
import { Character } from '../models/characters-models';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private cache: { [key: string]: any } = {};

  set(key: string, value: any) {
    this.cache[key] = value;
  }

  get(key: string): any {
    return this.cache[key];
  }

  clear() {
    this.cache = {};
  }

  setCachedCharacterList(data: Character[], page: number, totalItems: number) {
    this.set(CacheKeys.Characters, data);
    this.set(CacheKeys.PageNumber, page);
    this.set(CacheKeys.TotalItems, totalItems);
  }

  setCachedSelectOptions(data: Character[], page: number, totalItems: number) {
    this.set(CacheKeys.selectFilterOptions, data);
    this.set(CacheKeys.selectFilterPage, page);
    this.set(CacheKeys.selectFilterTotalItems, totalItems);
  }

  getCachedSelectOptions() {
    const cachedOptionsData: CacheCharactersList = {
      characters: this.get(CacheKeys.selectFilterOptions),
      pageNumber: this.get(CacheKeys.selectFilterPage),
      totalItems: this.get(CacheKeys.selectFilterTotalItems)
    }
    return cachedOptionsData;
  }

  getCachedCharacterList() {
    const cachedData: CacheCharactersList = {
      characters: this.get(CacheKeys.Characters),
      pageNumber: this.get(CacheKeys.PageNumber),
      totalItems: this.get(CacheKeys.TotalItems)
    };
    return cachedData;
  }
}
