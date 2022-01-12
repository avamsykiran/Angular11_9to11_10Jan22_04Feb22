import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title:string;
  imgs:string[];
  imgIndex:number;

  constructor(){
    this.title="My First Angular Project";
    this.imgs=[
      "assets/images/w1.jpg",
      "assets/images/w2.jpg",
      "assets/images/w3.png"
    ];
    this.imgIndex=0;
  }

  toggleLogo(){
    this.imgIndex=(this.imgIndex+1)%3;
  }
}
