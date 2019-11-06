import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SymbolConfig } from "../symbol-config/symbol-config";
import { Account } from '../account/account';
import { ExecutionReport } from "../execution-report/execution-report";
import { ParentOrder } from "../parent-order/parent-order";
import { RoutedOrder } from "../routed-order/routed-order";

@Injectable()
export class ExchangeService {
  constructor(private http: HttpClient) {}

  getSymbolConfig() {
    return this.http.get<SymbolConfig[]>("api/exchange/availableSymbols");
  }

  getRoutedOrderBySymbol(symbol: string) {
    return this.http.get<RoutedOrder[]>("api/exchange/routedOrder/" + symbol);
  }

  getParentOrderBySymbol(symbol: string) {
    return this.http.get<ParentOrder[]>("api/exchange/parent" + symbol);
  }

  getExecutionReportBySymbol(symbol: string) {
    return this.http.get<ExecutionReport[]>("api/exchange/executionReport/" + symbol);
  }

  getAccount() {
    return this.http.get<Account[]>("api/exchange/account");
  }
}
