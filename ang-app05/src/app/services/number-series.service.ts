import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberSeriesService {

  constructor() { }

  generateSeries(lb:number,ub:number):Observable<number>{
    const bgJob = (observer:Observer<number>) => {
        if(lb>ub){
          observer.error("Invalid Boundaries, Can not proceed with the series");
        }

        let currentVal = lb;
        let handle = setInterval(()=>{
          observer.next(currentVal);
          currentVal++;
          if(currentVal>ub){
            clearInterval(handle);
            observer.complete();
          }
        },500);
    };
    
    return new Observable<number>(bgJob);
  }
}
