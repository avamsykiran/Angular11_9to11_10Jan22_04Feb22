import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { RegistrationComponent } from './shared/registration/registration.component';

const routes: Routes = [
  { path: '',pathMatch:'full',redirectTo:'/login'},
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegistrationComponent},
  { path: 'users', loadChildren: () => import('./user-accounts/user-accounts.module').then(m => m.UserAccountsModule) },
  { path: 'txns', loadChildren: () => import('./txns/txns.module').then(m => m.TxnsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
