import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  userForm:FormGroup;

  idFC:FormControl;
  nameFC:FormControl;
  emailFC:FormControl;
  mobileFC:FormControl;

  editMode:boolean;

  errMsg!:string;

  constructor(private userService:UsersService,private activatedRoute:ActivatedRoute,private router:Router) {

    this.editMode=false;

    this.idFC=new FormControl(0);
    this.nameFC=new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(40)]);
    this.emailFC=new FormControl("",[Validators.required,Validators.email]);
    this.mobileFC=new FormControl("",[Validators.required,Validators.pattern("[1-9][0-9]{9}")]);

    this.userForm = new FormGroup({
      id:this.idFC,
      name:this.nameFC,
      email:this.emailFC,
      mobile:this.mobileFC
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
      let user = this.userForm.value;
      ob = this.userService.updateUser(user);
    }else{
      let user = {...this.userForm.value,id:undefined};
      ob = this.userService.addUser(user);
    }

    ob.subscribe(
      usr => this.router.navigateByUrl("/"),
      err => {console.log(err);this.errMsg="Unable to save the user details!";}
    );
  }
}
