import { Cell } from './cell';
import { Location } from './location';
import { CurrentSelection } from './current-selection';
import { SidePosition, Color } from '../enums';
import * as data from '../../assets/resources.json';

export class Side {
  cells: Cell[][];

  constructor(public color: Color, public position: SidePosition, public text: string = '') {
    this.cells = [
      [new Cell(color, this.getValueJson(text,0)), new Cell(color, this.getValueJson(text,1)), new Cell(color, this.getValueJson(text,2)), new Cell(color, this.getValueJson(text,3))],
      [new Cell(color, this.getValueJson(text,4)), new Cell(color, this.getValueJson(text,5)), new Cell(color, this.getValueJson(text,6)), new Cell(color, this.getValueJson(text,7))],
      [new Cell(color, this.getValueJson(text,8)), new Cell(color, this.getValueJson(text,9)), new Cell(color, this.getValueJson(text,10)), new Cell(color, this.getValueJson(text,11))],
      [new Cell(color, this.getValueJson(text,12)), new Cell(color, this.getValueJson(text,13)), new Cell(color, this.getValueJson(text,14)), new Cell(color, this.getValueJson(text,15))],
    ];
  }

  selectCell(x: number, y: number) {
    CurrentSelection.side = this;
    CurrentSelection.location = new Location(x, y);
  }

  getValueJson(category: string, index:number) {
    if(data[category] && data[category][index]) {
      return data[category][index];
    } else {
      return {
        img: '',
        text: '',
        desc: ''
      }
    }
  }

  rotateLeft() {
    this.cells = [
      [this.cells[2][0], this.cells[1][0], this.cells[0][0]],
      [this.cells[2][1], this.cells[1][1], this.cells[0][1]],
      [this.cells[2][2], this.cells[1][2], this.cells[0][2]]
    ];
  }

  rotateRight() {
    this.cells = [
      [this.cells[0][2], this.cells[1][2], this.cells[2][2]],
      [this.cells[0][1], this.cells[1][1], this.cells[2][1]],
      [this.cells[0][0], this.cells[1][0], this.cells[2][0]]
    ];
  }
}
