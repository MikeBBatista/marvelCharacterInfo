import { Character } from "./characters-models";

export interface CacheCharactersList {
  characters: Character[];
  pageNumber: number;
  totalItems: number;
}