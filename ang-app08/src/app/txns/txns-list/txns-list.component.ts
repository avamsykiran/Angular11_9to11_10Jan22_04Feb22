import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TxnSummary } from 'src/app/models/txn-summary';
import { User } from 'src/app/models/user';
import { TransactionsService } from 'src/app/service/transactions.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-txns-list',
  templateUrl: './txns-list.component.html',
  styleUrls: ['./txns-list.component.css']
})
export class TxnsListComponent implements OnInit {

  userId:number|undefined;
  errMsg!:string;
  txns!:Transaction[];
  txnSmry!:TxnSummary;

  constructor(private userService:UsersService,private txnService:TransactionsService) {
    this.userId=this.userService.currentUser()?.id;
  }

  ngOnInit(): void {
    if(this.userId){
      this.txnService.getAllByUserId(this.userId).subscribe(
        txns => {
          this.txns=txns;
          this.txnSmry=this.txnService.getSummary(txns);
        },
        err => {
          console.log(err);
          this.errMsg="Unable to fetech data!";
        }
      );
    }
  }

}
