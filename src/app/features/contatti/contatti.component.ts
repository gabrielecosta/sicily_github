import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {

  imgCollection: string[] = [
    "https://prod.pictures.autoscout24.net/listing-images/045f3f23-8a16-4375-93d8-3c49d1db765a_33a0f911-5e8f-4251-afd4-87eefa1abd87.jpg/420x315.jpg",
    "https://www.ansa.it/webimages/img_900x700/2020/9/11/9eed705559c0b3a413f9b1a1261846b4.jpg",
    "https://i.ebayimg.com/00/z/2hUAAOSwDilgd3WR/$_58.JPG"
  ];
  index: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment(): void {
    if (this.index < this.imgCollection.length - 1) {
    this.index++;
    } else {
      //console.log("max index");
      this.index = 0;
    }
  }

  decrement(): void {
    if (this.index > 0) {
      this.index--;
      } else {
        //console.log("min index");
        this.index = this.imgCollection.length - 1;
      }
  }

}
