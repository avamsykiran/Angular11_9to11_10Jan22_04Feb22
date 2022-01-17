import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives-demo',
  templateUrl: './structural-directives-demo.component.html',
  styleUrls: ['./structural-directives-demo.component.css']
})
export class StructuralDirectivesDemoComponent  {

  userName:string;
  title:string;
  titles:string[];

  constructor() { 
    this.userName="";
    this.title="";
    this.titles=[
      "Mr","Mrs","Dr","Prof"
    ];
  }


}
