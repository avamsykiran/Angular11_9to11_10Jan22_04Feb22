import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionRowComponent } from './transaction-row/transaction-row.component';
import { TxnSummarySectionComponent } from './txn-summary-section/txn-summary-section.component';
import { TxnFormRowComponent } from './txn-form-row/txn-form-row.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersFormComponent } from './users-form/users-form.component';

/*
  http://localhost:9999/users     UsersComponent
  http://localhost:9999/txns/1    TransactionListComponent with txns of user#userId=1
*/

const routes:Routes = [
  {path:'users',component:UsersComponent},
  {path:'txns/{userId}',component:TransactionsListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TransactionsListComponent,
    TransactionRowComponent,
    TxnSummarySectionComponent,
    TxnFormRowComponent,
    UsersComponent,
    UsersListComponent,
    UsersFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
