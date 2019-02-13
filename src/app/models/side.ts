import { Cell } from './cell';
import { Location } from './location';
import { CurrentSelection } from './current-selection';
import { SidePosition, Color } from '../enums';
import * as data from '../../assets/resources.json';

export class Side {
  cells: Cell[][];

  constructor(public color: Color, public position: SidePosition, public text: string = '') {
    this.cells = [
      [new Cell(color, this.getValueJson(text,0)), new Cell(color, this.getValueJson(text,1)), new Cell(color, this.getValueJson(text,2))],
      [new Cell(color, this.getValueJson(text,4)), new Cell(color, this.getValueJson(text,5)), new Cell(color, this.getValueJson(text,6))],
      [new Cell(color, this.getValueJson(text,8)), new Cell(color, this.getValueJson(text,9)), new Cell(color, this.getValueJson(text,10))],
    ];
  }

  selectCell(x: number, y: number) {
    CurrentSelection.side = this;
    CurrentSelection.location = new Location(x, y);
  }

  getValueJson(category: string, index:number) {
    if(data[category] && data[category][index]) {
      let json = data[category][index];
      json.category = category;
      return json;
    } else {
      return null;
    }
  }
}
