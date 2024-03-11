export interface CharacterUrl {
  type: string;
  url: string;
}

export interface CharacterThumbnail {
  path: string;
  extension: string;
}

export interface Item {
  resourceURI: string;
  name: string;
}

export interface Comic {
  available: number;
  returned: number;
  collectionURI: string;
  items: Item[];
}

export interface Story {
  available: number;
  resourceURI: string;
  name: string;
  type: string;
  items: Item[];
}

export interface storyEvent {
  available: number;
  resourceURI: string;
  name: string;
  items: Item[];
}

export interface Series {
  available: number;
  resourceURI: string;
  name: string;
  items: Item[];
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: CharacterUrl[];
  thumbnail: CharacterThumbnail;
  comics: Comic;
  stories: Story;
  events: storyEvent;
  series: Series;
}

export interface ResponseData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
}

export interface MarvelResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: ResponseData;
  etag: string;
}