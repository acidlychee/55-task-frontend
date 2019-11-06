import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { SymbolConfigComponent } from "./symbol-config/symbol-config.component";
import { HttpClientModule } from "@angular/common/http";
import { ExchangeService } from "./service/exchange.service";
import { RoutedOrderComponent } from "./routed-order/routed-order.component";
import { ExecutionReportComponent } from "./execution-report/execution-report.component";
import { ParentOrderComponent } from "./parent-order/parent-order.component";
import { AccountComponent } from "./account/account.component";
import { ExchangeTableComponent } from "./exchange-table/exchange-table.component";


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    RouterModule.forRoot([
      { path: "exchange/availableSymbols", component: SymbolConfigComponent },
      { path: "exchange/routedOrder", component: RoutedOrderComponent },
      { path: "exchange/executionReport", component: ExecutionReportComponent },
      { path: "exchange/parent", component: ParentOrderComponent },
      { path: "exchange/account", component: AccountComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    SymbolConfigComponent,
    RoutedOrderComponent,
    ExecutionReportComponent,
    ParentOrderComponent,
    AccountComponent,
    ExchangeTableComponent
  ],
  bootstrap: [AppComponent],
  providers: [ExchangeService]
})
export class AppModule {}
