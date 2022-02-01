import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  brand:string;
  links:string[][];

  constructor() {
    this.brand=environment.appTitle;
    this.links=[
      ["/login","Sign In"],
      ["/register","Sign Up"]
    ];
  }

  ngOnInit(): void {
  }

}
