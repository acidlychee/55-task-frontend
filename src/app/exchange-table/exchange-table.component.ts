import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-exchange-table',
  templateUrl: './exchange-table.component.html',
  styleUrls: ['./exchange-table.component.css']
})
export class ExchangeTableComponent implements OnInit {
  @Input() columns
  @Input() data

  page: number = 1
  pageSize: number = 10
  constructor() { }

  ngOnInit() {
  }

}