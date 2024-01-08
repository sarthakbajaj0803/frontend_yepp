import {TransactionPageComponent} from "./transaction-page/transaction-page.component";
import {Routes} from "@angular/router";
import {AccountInformationComponent} from "./account-information/account-information.component";
import {LoginComponent} from "./login/login.component";
import {InsightPageComponent} from "./insight-page/insight-page.component";
import {TransactionComponent} from "./transaction/transaction.component";

const routeConfig: Routes = [
  {
    path: 'home',
    component: AccountInformationComponent,
    title: 'Home page'
  },
  {
    path: 'transactions',
    component: TransactionPageComponent,
    title: 'transaction details'
  },
  {
    path:'',
    component: LoginComponent,
    title: 'login'
  },
  {
    path:'insights',
    component: InsightPageComponent,
    title: 'insights'
  },
  {
    path:'transfer',
    component:TransactionComponent,
    title: 'transfer'
  }


];

export default routeConfig;
