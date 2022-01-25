import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction';
import { TxnSummary } from '../models/txn-summary';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  txns?:Transaction[];
  txnSmry?:TxnSummary;
  errMsg?:string;

  constructor(private txnService:TransactionService) {
    
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.errMsg=undefined;
    this.txnService.getAll().subscribe(
      txns => {this.txns=txns;this.txnSmry=this.txnService.getSummary(txns);},
      err => {console.log(err);this.errMsg="Unable to fetech data! Please try a little later!"}
    );    
  }

  deleteTxn(id:number){
    this.errMsg=undefined;
    this.txnService.delete(id).subscribe(
      () =>this.loadData(),
      err => {console.log(err);this.errMsg="Unable to delete! Please try a little later!"}
    );
  }

  addTxn(txn:Transaction){
    this.errMsg=undefined;
    this.txnService.add(txn).subscribe(
      txn =>this.loadData(),
      err => {console.log(err);this.errMsg="Unable to add! Please try a little later!"}
    );
  }

  editTxn(id:number){
    this.txns = this.txns?.map(t => t.id!==id?t:{...t,isEditable:true});
  }

  cancelEditTxn(id:number){
    this.txns = this.txns?.map(t => t.id!==id?t:{...t,isEditable:undefined});
  }

  updateTxn(txn:Transaction){
    let t = {...txn,isEditable:undefined};
    this.errMsg=undefined;
    this.txnService.update(t).subscribe(
      txn => this.loadData(),
      err => {console.log(err);this.errMsg="Unable to update! Please try a little later!"}
    );
  }

}
