import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toVerbal'
})
export class ToVerbalPipe implements PipeTransform {

  digits:string[];

  constructor(){
    this.digits=[
      "ZERO","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE"
    ];
  }

  transform(value: number): string {
    let result:string="";

    let valueAsString = `${value}`;

    for(let i=0;i<valueAsString.length;i++){
      let ch = valueAsString.charAt(i);
      if(ch=='.'){
        result = `${result} dot `;
      }else{
        let index = parseInt(ch);
        result = `${result} ${this.digits[index]} `;
      }
    }

    return result;
  }

}
