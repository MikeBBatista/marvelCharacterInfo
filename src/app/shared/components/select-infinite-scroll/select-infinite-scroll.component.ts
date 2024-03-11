import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Character } from 'src/app/core/models/characters-models';

@Component({
  selector: 'app-select-infinite-scroll',
  templateUrl: './select-infinite-scroll.component.html',
  styleUrls: ['./select-infinite-scroll.component.scss']
})
export class SelectInfiniteScrollComponent {

  @Input() data!: Character[];
  @Input() placeholder: string = 'Select an option...'
  @Input() isLoadingMore = false;
  @Input() totalItems: number = 0;
  @Output() valueChanged: EventEmitter<string> = new EventEmitter();
  @Output() getMoreOption: EventEmitter<any> = new EventEmitter();
  @ViewChild('textInput') textInput!: ElementRef;
  @ViewChild('mySelect') mySelect!: ElementRef;
  public isOpen = false;

  focusInput() {
    this.textInput.nativeElement.click();
    this.textInput.nativeElement.focus();
  }

  selectClicked() {
    this.isOpen = !this.isOpen;
  }

  closeOptions() {
    setTimeout(() => {
      this.isOpen = false;
    }, 100);
  }

  onScrollSelect() {
    const selectElement: HTMLSelectElement = this.mySelect.nativeElement;
    if (selectElement.scrollTop + selectElement.clientHeight >= selectElement.scrollHeight) {
      if(!this.isLoadingMore && this.data.length !== this.totalItems) {
        this.getMoreOption.emit();
      }
    }
  }

  returnOption(event: string) {
    this.closeOptions();
    this.valueChanged.emit(event);
  }
}
