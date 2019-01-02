import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../models';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() cell: Cell;

  constructor() { }

  ngOnInit() {
  }

}
