import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-txns',
  templateUrl: './txns.component.html',
  styleUrls: ['./txns.component.css']
})
export class TxnsComponent implements OnInit {

  user:User|null;

  constructor(private userService:UsersService) {
    this.user=this.userService.currentUser();
  }

  ngOnInit(): void {
  }

}
