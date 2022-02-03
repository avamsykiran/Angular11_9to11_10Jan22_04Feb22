import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountsRoutingModule } from './user-accounts-routing.module';
import { UserAccountsComponent } from './user-accounts.component';
import { WidgetModule } from '../widget/widget.module';


@NgModule({
  declarations: [UserAccountsComponent],
  imports: [
    CommonModule,
    UserAccountsRoutingModule,
    WidgetModule
  ]
})
export class UserAccountsModule { }
