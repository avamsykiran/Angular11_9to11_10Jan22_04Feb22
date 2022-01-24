import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionRowComponent } from './transaction-row/transaction-row.component';
import { TxnSummarySectionComponent } from './txn-summary-section/txn-summary-section.component';
import { TxnFormRowComponent } from './txn-form-row/txn-form-row.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsListComponent,
    TransactionRowComponent,
    TxnSummarySectionComponent,
    TxnFormRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
