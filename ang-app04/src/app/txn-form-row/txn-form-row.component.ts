import { Component, EventEmitter, Output } from '@angular/core';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-txn-form-row',
  templateUrl: './txn-form-row.component.html',
  styleUrls: ['./txn-form-row.component.css']
})
export class TxnFormRowComponent  {

  txn:Transaction;
  
  @Output()
  formSubmited:EventEmitter<Transaction>;

  constructor() {
    this.txn={id:0,header:'',type:'',amount:0};
    this.formSubmited=new EventEmitter<Transaction>();
  }

  changeType(type:string){
    this.txn.type=type;
  }

  raiseFormSubmited(){
    this.formSubmited.emit(this.txn);
    this.txn={id:0,header:'',type:'',amount:0};
  }
}
