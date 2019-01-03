import { Component, Input } from '@angular/core';
import { Cube, Side, Cell } from '../models';
import { CellService } from '../models/cell.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent {
  @Input() showText;
  @Input() cube: Cube;
  @Input() side: Side;

  constructor(private cellService: CellService) {

  }

  select(x, y) {
    this.side.selectCell(x, y);
  }

  mouseenter(cell: Cell) {
    this.cellService.changeMessage(cell);
  }
}
