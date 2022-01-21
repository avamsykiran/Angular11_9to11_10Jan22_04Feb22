import { Component } from '@angular/core';
import { NumberSeriesService } from '../services/number-series.service';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent {

  lb:number;
  ub:number;
  err:string|null;
  results:number[]|null;
  isJobInProgress:boolean;

  constructor(private nsService:NumberSeriesService) {
    this.lb=0;
    this.ub=0;
    this.err=null;
    this.results=null;
    this.isJobInProgress=false;
  }

  startSeries(){
    this.results=[];
    this.err=null;
    this.isJobInProgress=true;

    let ob = this.nsService.generateSeries(this.lb,this.ub);

    ob.subscribe(
      val => this.results?.push(val),
      err => {this.err=err; this.isJobInProgress=false;},
      () => this.isJobInProgress=false
    );
  }
}
