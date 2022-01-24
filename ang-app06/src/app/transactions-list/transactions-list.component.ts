import { Component } from '@angular/core';
import { Transaction } from '../models/transaction';
import { TxnSummary } from '../models/txn-summary';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent  {

  txns?:Transaction[];
  txnSmry?:TxnSummary;

  constructor(private txnService:TransactionService) {
    this.loadData();
  }

  loadData(){
    this.txns=this.txnService.getAll();
    this.txnSmry=this.txnService.getSummary();
  }

  deleteTxn(id:number){
    this.txnService.delete(id);
    this.loadData();
  }

  addTxn(txn:Transaction){
    this.txnService.add(txn);
    this.loadData();
  }

  editTxn(id:number){
    this.txns = this.txns?.map(t => t.id!==id?t:{...t,isEditable:true});
  }

  cancelEditTxn(id:number){
    this.txns = this.txns?.map(t => t.id!==id?t:{...t,isEditable:undefined});
  }

  updateTxn(txn:Transaction){
    let t = {...txn,isEditable:undefined};
    this.txnService.update(t);
    this.loadData();
  }

}
