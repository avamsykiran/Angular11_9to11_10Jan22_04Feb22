import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionsService } from 'src/app/service/transactions.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-txn-form',
  templateUrl: './txn-form.component.html',
  styleUrls: ['./txn-form.component.css']
})
export class TxnFormComponent implements OnInit {

  txnForm:FormGroup;

  userId:number|undefined;

  errMsg!:string;

  idFC:FormControl;
  headerFC:FormControl;
  amountFC:FormControl;
  typeFC:FormControl;
  userIdFC:FormControl;
  
  constructor(private userService:UsersService,private txnService:TransactionsService,private router:Router) {
    this.userId = this.userService.currentUser()?.id;

    this.idFC=new FormControl(0);
    this.headerFC=new FormControl("",[Validators.required]);
    this.amountFC=new FormControl(0,[Validators.required]);
    this.typeFC=new FormControl("",[Validators.required]);
    this.userIdFC=new FormControl(this.userId);

    this.txnForm=new FormGroup({
      id:this.idFC,
      header:this.headerFC,
      amount:this.amountFC,
      type:this.typeFC,
      userId:this.userIdFC
    });
   }

  ngOnInit(): void {
  }

}
