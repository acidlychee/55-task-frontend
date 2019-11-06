import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../service/exchange.service';
import { SymbolConfig } from './symbol-config';

@Component({
  selector: 'app-symbol-config',
  templateUrl: './symbol-config.component.html',
  styleUrls: ['./symbol-config.component.css']
})
export class SymbolConfigComponent implements OnInit {

  data: SymbolConfig[]

  columns: string[] = ["id", "venueName", "symbolName", "status", "timestamp"]

  constructor(private exchangeService: ExchangeService) { }

  ngOnInit() {
    this.exchangeService.getSymbolConfig().subscribe(data => {
      this.data = data
    })
  }
}