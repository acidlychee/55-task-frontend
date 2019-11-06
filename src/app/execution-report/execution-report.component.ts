import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ExchangeService } from "../service/exchange.service";
import { ExecutionReport } from "./execution-report";

@Component({
  selector: "app-execution-report",
  templateUrl: '../exchange-template/symbol_search_template.html',
  styleUrls: ["./execution-report.component.css"]
})
export class ExecutionReportComponent implements OnInit {

  symbol = new FormControl("");

  data: ExecutionReport[];

  columns: string[] = ["id", "cancelledQty", "childOrder", "childOrderId", "createdAt","exchangeAccountId","exchangeOrderId", "executedPrice", "executedQty", "filled", "kafkaOffset", "lastFilledPrice", "lastFilledQty", "leavesQty", "orderId", "orderStatus", "partitionId", "price", 
  "pricePrecision", "qtyPrecision", "rejectCode", "rejectReason", "remainingQty", "reportType", "side", "symbol", "timestamp","transactTime","type", "venue"];

  constructor(private exchangeService: ExchangeService) {}

  ngOnInit() {}

  getDataBySymbol() {
    this.exchangeService
      .getExecutionReportBySymbol(this.symbol.value)
      .subscribe(data => {
        this.data = data;
      });
  }
}
