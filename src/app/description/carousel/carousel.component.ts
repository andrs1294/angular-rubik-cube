import { Component, OnInit, Input } from '@angular/core';
import { Cell } from 'src/app/models';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() private data: any;
  @Input() private base: string;
  slideConfig = {"slidesToShow": 3, "slidesToScroll": 3};
  slides = [];


  constructor() { }

  ngOnInit() {
    if ( this.data ) {
      this.setSlides();
    }
  }

  setSlides() {
    for( let x = 0; x < this.data.length; x++ ) {
      this.slides.push({
        img: this.base + this.data[x].img,
        title: this.data[x].name
      });
    }
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e) {
    //logs
  }
}
