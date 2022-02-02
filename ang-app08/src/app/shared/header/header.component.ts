import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/service/users.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  brand:string;
  links!:string[][];
  adminLinks:string[][];
  userLinks:string[][];
  commonLinks:string[][];
  currentUser:User|null;
  userNotifierSubscription!:Subscription;
  
  constructor(private userService:UsersService,private router:Router) {
    this.brand=environment.appTitle;
    this.commonLinks=[
      ["/login","Sign In"],
      ["/register","Sign Up"]
    ];
    this.adminLinks=[
      ["/users","Home"]
    ];
    this.userLinks=[
      ["/txns/list","Transactions"],
      ["/txns/new","New Transaction"],
      ["/txns/profile","Profile"]
    ];
    this.currentUser=this.userService.currentUser();
    this.loadLinks();
  }

  loadLinks(){
    if(this.currentUser) {
      if(this.currentUser?.role==='ADMIN'){
        this.links = this.adminLinks;
      }else{
        this.links = this.userLinks;
      }
    }else{
      this.links = this.commonLinks;
    }
  }

  ngOnInit(): void {
    this.userNotifierSubscription = 
    this.userService.userNotifier.subscribe(
      isLoggedIn => {
        this.currentUser=this.userService.currentUser();
        this.loadLinks();
      }
    );
  }

  logout(){
    this.userService.logout();
    this.router.navigateByUrl("/login");
  }
  ngOnDestroy(): void{
    this.userNotifierSubscription.unsubscribe();
  }
  
}
