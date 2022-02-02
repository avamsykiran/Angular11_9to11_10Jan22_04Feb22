import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonGuard } from './service/common.guard';
import { TxnsGuard } from './service/txns.guard';
import { UsersGuard } from './service/users.guard';
import { LoginComponent } from './shared/login/login.component';
import { RegistrationComponent } from './shared/registration/registration.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent, canActivate: [CommonGuard] },
  { path: 'register', component: RegistrationComponent, canActivate: [CommonGuard] },
  {
    path: 'users',
    canActivate: [UsersGuard], canLoad: [UsersGuard], canActivateChild: [UsersGuard],
    loadChildren: () => import('./user-accounts/user-accounts.module').then(m => m.UserAccountsModule)
  },
  {
    path: 'txns',
    canActivate: [TxnsGuard], canLoad: [TxnsGuard], canActivateChild: [TxnsGuard],
    loadChildren: () => import('./txns/txns.module').then(m => m.TxnsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
