import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @Output() search: EventEmitter<String> = new EventEmitter();
  public searchInput: string = '';


  doSearch() {
    this.search.emit(this.searchInput);
  }

}
