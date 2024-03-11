import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import * as CryptoJS from 'crypto-js';

import { environment } from 'src/environments/environment';
import { MarvelResponse } from '../models/characters-models';

@Injectable({
  providedIn: 'root'
})
export class MarvelCharacterService {

  private apiUrl: string = `${environment.apiUrl}/v1/public/characters`;
  private publicKey: string = environment?.marvelPublicKey;
  private privateKey: string | undefined = environment.marvelPrivateKey;
  private timestamp = new Date().getTime().toString();

  constructor(
    private httpClient: HttpClient,
  ) {}

  getCharacters(page: number, searchValue: string, limit = 20): Observable<MarvelResponse> {
    let params;
    
    if(searchValue.trim()) {
      params = this.autenticateApi([{nameStartsWith: searchValue}, {offset: page * limit}, {limit: limit}]);
    } else {
      params = this.autenticateApi([{offset: page * limit}, {limit: limit}]);
    }
    return this.httpClient.get<MarvelResponse>(this.apiUrl, {params}).pipe(
      catchError ((error: HttpErrorResponse) => {
        this.manageError(error);
        return throwError(() => new Error(this.manageError(error)))
      })
    );
  }

  getCharacterById(characterId: string): Observable<MarvelResponse>{
    let params = this.autenticateApi();
    return this.httpClient.get<MarvelResponse>(`${this.apiUrl}/${characterId}`, {params}).pipe(
      catchError ((error: HttpErrorResponse) => {
        this.manageError(error);
        return throwError(() => new Error(this.manageError(error)))
      })
    );
  }

  filterCharacterByName(characterName: string):  Observable<MarvelResponse>{
    let params = this.autenticateApi([{name: characterName}]);
    return this.httpClient.get<MarvelResponse>(`${this.apiUrl}`, {params}).pipe(
      catchError ((error: HttpErrorResponse) => {
        this.manageError(error);
        return throwError(() => new Error(this.manageError(error)))
      })
    );
  }

  autenticateApi(otherParams?: Object[]) {
    const hash = CryptoJS.MD5(this.timestamp + this.privateKey + this.publicKey).toString();
    let params = new HttpParams()
    .set('ts', this.timestamp)
    .set('apikey', this.publicKey)
    .set('hash', hash)
    if (otherParams) {
      for (const param of otherParams) {
        params = params.set(Object.keys(param).toString(), Object.values(param).toString());
      }
    }
    return params; 
  }

  manageError(error: HttpErrorResponse) {
    let errorMessage = 'Erro desconhecido';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      errorMessage = `Erro do servidor: ${error.status}, ${error.message}`;
    }
    return errorMessage;
  }
}
