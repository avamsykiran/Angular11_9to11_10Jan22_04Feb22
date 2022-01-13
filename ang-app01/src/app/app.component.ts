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

  imgWidth:number;
  applyCenter:boolean;
  applyBorder:boolean;
  applyRoundCorner:boolean;

  constructor(){
    this.title="My First Angular Project";
    this.imgs=[
      "assets/images/w1.jpg",
      "assets/images/w2.jpg",
      "assets/images/w3.png"
    ];
    this.imgIndex=0;

    this.imgWidth=500;
    this.applyBorder=true;
    this.applyCenter=true;
    this.applyRoundCorner=false;
  }

  toggleLogo(){
    this.imgIndex=(this.imgIndex+1)%3;
  }
}
