import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TxnsRoutingModule } from './txns-routing.module';
import { TxnsComponent } from './txns.component';
import { TxnsListComponent } from './txns-list/txns-list.component';
import { TxnFormComponent } from './txn-form/txn-form.component';


@NgModule({
  declarations: [TxnsComponent, TxnsListComponent, TxnFormComponent],
  imports: [
    CommonModule,
    TxnsRoutingModule
  ]
})
export class TxnsModule { }
