import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>()
  sort = 'desc'
  itemShowCount = 12

  onSortUpdated(newSort: string) : void {
    this.sort = newSort
  }

  onItemsUpdated(count: number) : void {
    this.itemShowCount = count
  }

  onColumnsUpdate(columnNum: number) : void {
    this.columnsCountChange.emit(columnNum)
  }

}
