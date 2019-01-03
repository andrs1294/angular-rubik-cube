import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cell } from './cell';

@Injectable()
export class CellService {

  private cellSource = new BehaviorSubject(null);
  currentMessage = this.cellSource.asObservable();

  constructor() { }

  changeMessage(message: Cell) {
    this.cellSource.next(message)
  }
}