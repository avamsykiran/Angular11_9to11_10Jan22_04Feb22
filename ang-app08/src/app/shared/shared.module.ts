import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { WidgetModule } from '../widget/widget.module';


@NgModule({
  declarations: [LoginComponent, RegistrationComponent, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    WidgetModule
  ],
  exports:[LoginComponent, RegistrationComponent, HeaderComponent]
})
export class SharedModule { }
