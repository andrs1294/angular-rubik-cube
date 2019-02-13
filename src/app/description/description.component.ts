import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../models';
import { CellService } from '../models/cell.service';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';



@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  public cell: Cell;
  constructor(private cellService: CellService, private http: HttpClient) { }

  ngOnInit() {
    this.cellService.currentMessage.subscribe(message => {
      this.cell = message;
      if(message && message.json) {
        const fields = message.json.carousel;
        for(let i = 0; i < fields.length; i++) {
          this.setOtherProperties(fields[i]);
        }
      }
    })
  }

  setOtherProperties(type: string) {
    const json = this.cell.json;
    const category = json.category;
    const item = json.base;
    delete this.cell.json[type];
    this.getJSON(category, item, type).subscribe( data => {this.cell.json[type] = data;}); 

  }

  getBaseToCarousel(type: string) {
    const json = this.cell.json;
    const item = json.base;
    return '../../../assets/images/' + json.category + '/' + item + '/' + type + '/';
  }

  public getJSON(category: string, item: string, type: string): Observable<any> {
    return this.http.get('../../assets/data/' + category + '/' + item + '/' + type + '.json');
  }
}
