import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userForm:FormGroup;

  idFC:FormControl;
  nameFC:FormControl;
  emailFC:FormControl;
  mobileFC:FormControl;
  passwordFC:FormControl;

  editMode:boolean;

  errMsg!:string;

  constructor(private userService:UsersService,private activatedRoute:ActivatedRoute,private router:Router) {

    this.editMode=false;

    this.idFC=new FormControl(0);
    this.nameFC=new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(40)]);
    this.emailFC=new FormControl("",[Validators.required,Validators.email]);
    this.mobileFC=new FormControl("",[Validators.required,Validators.pattern("[1-9][0-9]{9}")]);
    this.passwordFC=new FormControl("",[Validators.required]);

    this.userForm = new FormGroup({
      id:this.idFC,
      name:this.nameFC,
      email:this.emailFC,
      mobile:this.mobileFC,
      password:this.passwordFC
    });
  }

  ngOnInit(): void {
    let uid = this.activatedRoute.snapshot.params.userId;
    if(uid){
      this.editMode=true;
      this.userService.getById(uid).subscribe(
        usr=> this.userForm.setValue(usr),
        err=> {console.log(err); this.errMsg="User details can not be loaded!";}
      );
    }
  }

  formSubmitted(){
    let ob:Observable<User>;

    if(this.editMode){
      let user = {...this.userForm.value,role:"USER"};
      ob = this.userService.updateUser(user);
    }else{
      let user = {...this.userForm.value,role:"USER",id:undefined};
      ob = this.userService.addUser(user);
    }

    ob.subscribe(
      usr => this.router.navigateByUrl("/"),
      err => {console.log(err);this.errMsg="Unable to save the user details!";}
    );
  }
}
