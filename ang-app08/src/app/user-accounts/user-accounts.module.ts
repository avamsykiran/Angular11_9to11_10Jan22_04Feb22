import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountsRoutingModule } from './user-accounts-routing.module';
import { UserAccountsComponent } from './user-accounts.component';


@NgModule({
  declarations: [UserAccountsComponent],
  imports: [
    CommonModule,
    UserAccountsRoutingModule
  ]
})
export class UserAccountsModule { }
