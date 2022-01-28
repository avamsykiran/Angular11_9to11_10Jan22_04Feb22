import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-transaction-row',
  templateUrl: './transaction-row.component.html',
  styleUrls: ['./transaction-row.component.css']
})
export class TransactionRowComponent  {

  @Input()
  txn:Transaction;

  @Output()
  deleteBtnClick:EventEmitter<number>;

  @Output()
  editBtnClick:EventEmitter<number>;

  constructor() {
    this.txn={id:0,header:'',type:'',amount:0,userId:0};
    this.deleteBtnClick=new EventEmitter<number>();
    this.editBtnClick=new EventEmitter<number>();
  }

  raiseDeleteEvent(){
    this.deleteBtnClick.emit(this.txn.id);
  }

  raiseEditEvent(){
    this.editBtnClick.emit(this.txn.id);
  }
}
