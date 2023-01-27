import { Component } from '@angular/core';

const ROW_HEIGHT: { [ id : number ] : number } = {1: 400, 3:335, 4:350}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cols = 3
  rowHeight = ROW_HEIGHT[this.cols]
  category: string | undefined

  oncolumnsCountChange(colsNum: number) : void{
    this.cols = colsNum
    this.rowHeight = ROW_HEIGHT[this.cols]
  }

  onShowCategory(newCategory: string) : void{
    this.category = newCategory
  }

}
