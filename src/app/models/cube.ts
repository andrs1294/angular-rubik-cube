import { Side } from './side';
import { Move } from './move';
import { MoveIntructions } from '../move-instructions';
import { MoveIntruction } from '../move-intruction';
import { SidePosition, Color } from '../enums';
import { CubeHelper } from '../cube-helper';

export class Cube {
  top: Side;
  bottom: Side;
  left: Side;
  right: Side;
  front: Side;
  back: Side;
  history: Move[];
  rotateX = -18;
  rotateY = 36;

  constructor() {
    this.reset();
  }

  reset() {
    this.top = new Side(Color.Red, SidePosition.Top, 'Front-end');
    this.bottom = new Side(Color.Orange, SidePosition.Bottom, 'Back-end');
    this.left = new Side(Color.Green, SidePosition.Left, 'Mobile');
    this.right = new Side(Color.Blue, SidePosition.Right, 'DB');
    this.front = new Side(Color.Yellow, SidePosition.Front, 'Cloud');
    this.back = new Side(Color.White, SidePosition.Back, 'Empty');
    // select cell 0,0 from the front side by default
    this.front.selectCell(0, 0);
    this.rotateX = -18;
    this.rotateY = 36;
    this.history = [];
  }

  move(move: Move, record_move = true) {
    this[move.action](move.value, record_move);
  }

  undo() {
    if (this.history.length === 0) { return; }
    this.move(this.history.pop().undo(), false);
  }

  allSides() {
    return [this.front, this.top, this.bottom, this.left, this.right, this.back];
  }

  private moveHorizontal(instructions: MoveIntruction, row, record_move = true) {
    const first = this[instructions.start_with].cells[row];
    const opposite_row = CubeHelper.oppositeIndex(row);
    instructions.moves.forEach(move => {
      this[move.to].cells[row] = move.from === SidePosition.Back ? this[move.from].cells[opposite_row].reverse()
                                                                 : this[move.from].cells[row];
    });
    this[instructions.end_with].cells[opposite_row] = first.reverse();
    this.handleHistory(new Move(row, instructions.direction), record_move);
  }

  private moveVertical(instructions: MoveIntruction, column, record_move = true) {
    CubeHelper.indexIterator(cell => {
      const first = this[instructions.start_with].cells[cell][column];
      instructions.moves.forEach(move => {
        this[move.to].cells[cell][column] = this[move.from].cells[cell][column];
      });
      this[instructions.end_with].cells[cell][column] = first;
    });
    this.handleHistory(new Move(column, instructions.direction), record_move);
  }

  private handleHistory(move: Move, record_move = true) {
    if (record_move) { this.history.push(move); }
  }
}
