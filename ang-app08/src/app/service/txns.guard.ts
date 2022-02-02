import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class TxnsGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private userService:UsersService,private router:Router){}

  checkIFAllowed(): boolean | UrlTree {
    
      let isAllowed = this.userService.isUserLoggedIn() && this.userService.currentUser()?.role==='USER'; 
    
      if(!isAllowed){
        if(this.userService.isUserLoggedIn())
          return this.router.parseUrl("/users");
        else
          return this.router.parseUrl("/login");
      }

     return isAllowed;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkIFAllowed();
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkIFAllowed();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkIFAllowed();
  }
}
