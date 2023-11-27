import {TransactionPageComponent} from "./transaction-page/transaction-page.component";
import {Routes} from "@angular/router";
import {AccountInformationComponent} from "./account-information/account-information.component";
import {LoginComponent} from "./login/login.component";

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
  }
];

export default routeConfig;
