import { Component, EventEmitter, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @Output() search: EventEmitter<String> = new EventEmitter();
  public searchInput: string = '';
  private searchSubject: Subject<string> = new Subject<string>();

  constructor() {
    this.searchSubject.pipe(
      debounceTime(500)
    ).subscribe(() => {
      this.doSearch();
    });
  }

  onSearchInput(event: any) {
    this.searchSubject.next(event.target.value);
  }


  doSearch() {
    this.search.emit(this.searchInput);
  }

}
