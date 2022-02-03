import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from '../shared/registration/registration.component';
import { TxnFormComponent } from './txn-form/txn-form.component';
import { TxnsListComponent } from './txns-list/txns-list.component';

import { TxnsComponent } from './txns.component';

const routes: Routes = [
  { path: '', component: TxnsComponent,
    children:[
      {path:'',pathMatch:'full',redirectTo:'list'},
      {path:'list',component:TxnsListComponent},
      {path:'new',component:TxnFormComponent},
      {path:'profile/:userId',component:RegistrationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TxnsRoutingModule { }
