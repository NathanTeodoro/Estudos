import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  slides: any[] = new Array(7).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: '../../../../../assets/Apple-MacBook-Pro-M2.jpg',
    };
    this.slides[1] = {
      id: 1,
      src: '../../../../../assets/g15.jpg',
    }
    this.slides[2] = {
      id: 2,
      src: '../../../../../assets/tv.jpg',
    }
    this.slides[3] = {
      id: 3,
      src: '../../../../assets/notebook_gamer_acer_nitro_5_intel_core_i5_8gb_gtx_1650_ssd_512gb_tela_15_6_fhd_windows_11_an515_57_5_9679_1_ada2776f2b0be7d7c4b7cd5194f0f360.jpg',
    }
    this.slides[4] = {
      id: 4,
      src: '../../../../../assets/Xiaomi-13-featured-image-packshot-review-Recovered.jpg',
    }
    this.slides[5] = {
      id: 5,
      src: '../../../../../assets/XSX_XSS_Design_HERO.jpg',
    }
    this.slides[6] = {
      id: 6,
      src: '../../../../../assets/iphone.jpg',
    }

  }

}
