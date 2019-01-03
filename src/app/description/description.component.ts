import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../models';
import { CellService } from '../models/cell.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  public cell: Cell;
  constructor(private cellService: CellService) { }

  ngOnInit() {
    this.cellService.currentMessage.subscribe(message => {
      this.cell = message;
    })
  }

}
