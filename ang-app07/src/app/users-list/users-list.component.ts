import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users!:User[];
  errMsg!:string;

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      users => this.users=users,
      err => {console.log(err);this.errMsg="Unable to fetech data";}
    );
  }

}