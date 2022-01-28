import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../models/transaction';
import { TxnSummary } from '../models/txn-summary';
import { User } from '../models/user';
import { TransactionService } from '../services/transaction.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  txns!:Transaction[];
  txnSmry!:TxnSummary;
  errMsg!:string;
  currentUser!:User;

  constructor(private txnService:TransactionService,
      private usrService:UsersService,
      private activatedRoute:ActivatedRoute) {
    
  }

  ngOnInit(): void {
    let uid = this.activatedRoute.snapshot.params.userId;
    if(uid){
      this.usrService.getById(uid).subscribe(
        usr => {this.currentUser=usr;this.loadData();},
        err =>{console.log(err);this.errMsg="User not found to relate the transactions";}
      );
    }
  }

  loadData(){
    this.txnService.getAllByUserId(this.currentUser.id).subscribe(
      txns => {this.txns=txns;this.txnSmry=this.txnService.getSummary(txns);},
      err => {console.log(err);this.errMsg="Unable to fetech data! Please try a little later!"}
    );    
  }

  deleteTxn(id:number){
    this.txnService.delete(id).subscribe(
      () =>this.loadData(),
      err => {console.log(err);this.errMsg="Unable to delete! Please try a little later!"}
    );
  }

  addTxn(txn:Transaction){
    txn.userId=this.currentUser.id;
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
    this.txnService.update(t).subscribe(
      txn => this.loadData(),
      err => {console.log(err);this.errMsg="Unable to update! Please try a little later!"}
    );
  }

}
