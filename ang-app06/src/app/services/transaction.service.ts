import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction } from '../models/transaction';
import { TxnSummary } from '../models/txn-summary';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  endPoint:String;

  constructor(private hc:HttpClient) {
    this.endPoint=environment.txnsUrl;
  }

  getAll():Observable<Transaction[]>{
    return this.hc.get<Transaction[]>(this.endPoint);
  }

  getById(id:number):Transaction|undefined{
    return this.txns.find(t => t.id===id);
  }

  add(txn:Transaction):Transaction{
    this.txns.push(txn);
    return txn;
  }

  update(txn:Transaction):Transaction{
    let index = this.txns.findIndex(t => t.id===txn.id);
    if(index>-1){
      this.txns[index]=txn;
    }else{
      throw new Error("No such txn found");
    }
    return txn;
  }

  delete(id:number):void{
    let index = this.txns.findIndex(t => t.id===id);
    if(index>-1){
      this.txns.splice(index,1);
    }else{
      throw new Error("No such txn found");
    }
  }

  getSummary():TxnSummary {

    let totalCredit=this.sumOfAll("CREDIT");
    let totalDebit=this.sumOfAll("DEBIT");
    let balance=totalCredit-totalDebit;

    return {totalCredit,totalDebit,balance};
  }

  sumOfAll(type:string):number{
    let sum=0;
    let filteredTxns = this.txns.filter(t => t.type===type);
    if(filteredTxns && filteredTxns.length>0){
      sum = filteredTxns.map(t => t.amount).reduce((a1,a2)=>a1+a2);
    }
    return sum;
  }
}
