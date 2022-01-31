import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TxnsComponent } from './txns.component';

const routes: Routes = [{ path: '', component: TxnsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TxnsRoutingModule { }
