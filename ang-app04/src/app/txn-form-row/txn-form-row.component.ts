import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-txn-form-row',
  templateUrl: './txn-form-row.component.html',
  styleUrls: ['./txn-form-row.component.css']
})
export class TxnFormRowComponent  {

  @Input()
  txn:Transaction;
  
  @Input()
  isNew:boolean;

  @Output()
  formSubmited:EventEmitter<Transaction>;

  @Output()
  cancelEdit:EventEmitter<number>;

  constructor() {
    this.txn={id:0,header:'',type:'',amount:0};
    this.isNew=true;
    this.formSubmited=new EventEmitter<Transaction>();
    this.cancelEdit=new EventEmitter<number>();
  }

  changeType(type:string){
    this.txn.type=type;
  }

  raiseFormSubmited(){
    this.formSubmited.emit(this.txn);
    this.txn={id:0,header:'',type:'',amount:0};
  }

  raiseCancelEvent(){
    this.cancelEdit.emit(this.txn.id);
  }
}
