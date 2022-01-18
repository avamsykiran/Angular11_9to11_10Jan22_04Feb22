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

  txns:Transaction[];
  txnSmry:TxnSummary;

  constructor(private txnService:TransactionService) {
    this.txns=txnService.getAll();
    this.txnSmry=txnService.getSummary();
  }

}
