import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';

import { MarvelCharacterService } from 'src/app/core/service/marvel-character.service';
import { Character } from 'src/app/core/models/characters-models';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent implements OnInit {

  public character!: Character;
  public onLoad: boolean = true;
  public imgSrc: string = '';
  public moreInfo: string = '';

  constructor(
    private route: ActivatedRoute, 
    private marvelCharService: MarvelCharacterService,
    ) 
  { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const characterName = params['id'];
      this.marvelCharService.getCharacterById(characterName).subscribe({
        next: data => {
          this.character = data?.data?.results[0];
          this.onLoad = false;
          this.imgSrc = `${this.character.thumbnail.path}.${this.character.thumbnail.extension}`
          this.character.urls.forEach(item => {
            if (item.type === "comiclink") {
                this.moreInfo = item.url;
            }
          });
        },
        error: () => {
          const errorMessage = 'Ocorreu um erro ao carregar os personagens. Por favor, tente novamente mais tarde.';
          this.onLoad = false;
          return throwError(() => new Error(errorMessage))
        }
      })
    })
  }
}
