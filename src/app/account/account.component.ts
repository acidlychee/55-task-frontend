import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ExchangeService } from '../service/exchange.service';
import { Account } from './account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  symbol = new FormControl('');

  data: Account[]

  columns: string[] = ["id", "accountId", "market", "currency", "total", "available", "frozen", "borrowed", "loaned", "withdrawing", "depositing", "timestamp"]

  constructor(private exchangeService: ExchangeService) { }

  ngOnInit() {
    this.exchangeService.getAccount().subscribe(data => {
      this.data = data
    })
  }

}