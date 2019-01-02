import { Cell } from './cell';
import { Location } from './location';
import { CurrentSelection } from './current-selection';
import { SidePosition, Color } from '../enums';

export class Side {
  cells: Cell[][];

  constructor(color: Color, public position: SidePosition, public text: string = '') {
    this.cells = [
      [new Cell(color), new Cell(color), new Cell(color)],
      [new Cell(color), new Cell(color), new Cell(color)],
      [new Cell(color), new Cell(color), new Cell(color)],
    ];
  }

  selectCell(x: number, y: number) {
    CurrentSelection.side = this;
    CurrentSelection.location = new Location(x, y);
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

  getColor() {
    const cell = this.cells[0][0];
    return cell.color;
  }
}
