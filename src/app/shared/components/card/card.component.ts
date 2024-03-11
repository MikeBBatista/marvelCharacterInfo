import { Component, Input, OnInit } from '@angular/core';
import { CharacterThumbnail } from '../../../core/models/characters-models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() characterThumbnail!: CharacterThumbnail;
  @Input() characterName: string = '';
  public imgSrc: string = '../../../../assets/imgs/img-not-found.jpg';

  ngOnInit(): void {
    if(this.characterThumbnail) {
      this.imgSrc = `${this.characterThumbnail.path}.${this.characterThumbnail.extension}`
    }
  }
}
