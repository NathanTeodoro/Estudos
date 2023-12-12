import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: './assets/images/headseat.jpeg',
    };
    this.slides[1] = {
      id: 1,
      src: './assets/images/macbook.jpeg',
    }
    this.slides[2] = {
      id: 2,
      src: './assets/images/xboxseriex.jpeg',
    }
  }

}
