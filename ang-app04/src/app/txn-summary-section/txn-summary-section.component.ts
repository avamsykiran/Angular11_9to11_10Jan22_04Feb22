import { Component,Input } from '@angular/core';
import { TxnSummary } from '../models/txn-summary';

@Component({
  selector: 'app-txn-summary-section',
  templateUrl: './txn-summary-section.component.html',
  styleUrls: ['./txn-summary-section.component.css']
})
export class TxnSummarySectionComponent {

  @Input()
  txnSmry?:TxnSummary;
  constructor() { }

}
