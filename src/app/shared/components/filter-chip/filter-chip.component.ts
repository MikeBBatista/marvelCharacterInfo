import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-chip',
  templateUrl: './filter-chip.component.html',
  styleUrls: ['./filter-chip.component.scss']
})
export class FilterChipComponent {

  @Input() filteredItens: string[] = [];
  @Output() clear: EventEmitter<any> = new EventEmitter();
  @Output() changeFilterValue: EventEmitter<number> = new EventEmitter();

  clearFilters() {
    this.clear.emit();
  }

  removeFilter(filterValue: string) {
    const index = this.filteredItens.indexOf(filterValue);
    this.changeFilterValue.emit(index);
  }

}