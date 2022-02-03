import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-user-accounts',
  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.css']
})
export class UserAccountsComponent implements OnInit {

  users!:User[];
  errMsg!:string;

  constructor(private userSerive:UsersService) { }

  ngOnInit(): void {
    this.userSerive.getAll().subscribe(
      users => this.users=users,
      err => { console.log(err);this.errMsg="Unable to fetech data!"}
    );
  }

}
