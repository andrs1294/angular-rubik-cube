import { Color } from '../enums';
import { CurrentSelection } from './current-selection';
import { Side } from './side';
import { Constants } from '../enums';

export class Cell {
  constructor(public color: Color, public text: string = null) {
  }

  isSelected(x, y, side: Side) {
    return CurrentSelection.location.x === x &&
           CurrentSelection.location.y === y &&
           CurrentSelection.side === side;
  }

  getImage(side:Side) {
    return Constants.BaseImage + side.text + '/' + this.text;
  }
}
