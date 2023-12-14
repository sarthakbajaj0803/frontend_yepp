import { Component } from '@angular/core';
import {Transaction} from "../../transaction";

@Component({
  selector: 'app-feature-recent-transactions',
  templateUrl: './feature-recent-transactions.component.html',
  styleUrls: ['./feature-recent-transactions.component.css']
})
export class FeatureRecentTransactionsComponent {
  transactions: Transaction[] = [
    {"name": "Transaction 1", "amount": 100, reference: "reference",debit: true,"date": "2020-01-01", IBAN: "IBAN", currency: "EUR"},
    {"name": "Transaction 2", "amount": 200, reference: "reference",debit: false, "date": "2020-01-02", IBAN: "IBAN", currency: "EUR"},
    {"name": "Transaction 3", "amount": 300, reference: "reference",debit: false, "date": "2020-01-03", IBAN: "IBAN", currency: "EUR"},
  ]

}
