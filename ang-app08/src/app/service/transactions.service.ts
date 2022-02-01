import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction } from '../models/transaction';
import { TxnSummary } from '../models/txn-summary';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  endPoint:string;

  constructor(private hc:HttpClient) {
    this.endPoint=environment.txnsUrl;
  }

  getAll():Observable<Transaction[]>{
    return this.hc.get<Transaction[]>(this.endPoint);
  }

  getAllByUserId(userId:number):Observable<Transaction[]>{
    return this.hc.get<Transaction[]>(`${this.endPoint}?userId=${userId}`);
  }

  getById(id:number):Observable<Transaction>{
    return this.hc.get<Transaction>(`${this.endPoint}/${id}`);
  }

  add(txn:Transaction):Observable<Transaction>{
    return this.hc.post<Transaction>(this.endPoint,txn);
  }

  update(txn:Transaction):Observable<Transaction>{
    return this.hc.put<Transaction>(`${this.endPoint}/${txn.id}`,txn);
  }

  delete(id:number):Observable<void>{
    return this.hc.delete<void>(`${this.endPoint}/${id}`);
  }

  getSummary(txns:Transaction[]):TxnSummary {
    let totalCredit=this.sumOfAll(txns,"CREDIT");
    let totalDebit=this.sumOfAll(txns,"DEBIT");
    let balance=totalCredit-totalDebit;

    return {totalCredit,totalDebit,balance};
  }

  sumOfAll(txns:Transaction[],type:string):number{
    let sum=0;
    let filteredTxns = txns.filter(t => t.type===type);
    if(filteredTxns && filteredTxns.length>0){
      sum = filteredTxns.map(t => t.amount).reduce((a1,a2)=>a1+a2);
    }
    return sum;
  }
}
