import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!:string;
  password!:string;
  errMsg!:string;

  constructor(private userService:UsersService,private router:Router) { }

  ngOnInit(): void {
  }

  formSubmitted(){
    this.userService.login(this.email,this.password).subscribe(
      usr => {
        if(usr.role=='ADMIN'){
          this.router.navigateByUrl("/users");
        }else if(usr.role=='USER'){
          this.router.navigateByUrl("/txns");
        }
      },
      err => this.errMsg=err.message
    );
  }

}
