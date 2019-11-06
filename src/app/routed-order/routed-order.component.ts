import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ExchangeService } from '../service/exchange.service';
import { RoutedOrder } from './routed-order';

@Component({
  selector: 'app-routed-order',
  templateUrl: '../exchange-template/symbol_search_template.html',
  styleUrls: ['./routed-order.component.css']
})
export class RoutedOrderComponent implements OnInit {

  symbol = new FormControl('');

  data: RoutedOrder[]

  columns: string[] = ["id", "cancelledQty", "childOrder", "childOrderId", "exchangeAccountId","exchangeOrderId","executedPrice","executedQty", "filled", "kafkaOffset",
   "leavesQty", "orderId", "orderStatus", "partitionId", "price", "pricePrecision", "qtyPrecision", "quantity",
   "rejectCode", "rejectReason", "remainingQty", "reportType", "side", "symbol", "timestamp", "transactTime", "type", "venue"]

  constructor(private exchangeService: ExchangeService) { }

  ngOnInit() {
  }

  getDataBySymbol(){
    this.exchangeService.getRoutedOrderBySymbol(this.symbol.value).subscribe(data => {
      this.data = data
    })
  }
}