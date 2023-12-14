import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import { AccountInformationComponent } from './account-information/account-information.component';
import {MatCardModule} from "@angular/material/card";
import { TransactionPageComponent } from './transaction-page/transaction-page.component';
import {MatListModule} from "@angular/material/list";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import {CommonModule} from "@angular/common";
import { LoginComponent } from './login/login.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { FeatureInsightCardComponent } from './feature-insight-card/feature-insight-card.component';
import { FeatureDebitCardComponent } from './feature-debit-card/feature-debit-card.component';
import { FeatureRecentTransactionsComponent } from './feature-recent-transactions/feature-recent-transactions.component';
import { FeatureTransferComponent } from './feature-transfer/feature-transfer.component';


@NgModule({
    declarations: [
        AccountInformationComponent,
        TransactionPageComponent,
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        FeatureInsightCardComponent,
        FeatureDebitCardComponent,
        FeatureRecentTransactionsComponent,
        FeatureTransferComponent,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    RouterLink,
    RouterOutlet,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
