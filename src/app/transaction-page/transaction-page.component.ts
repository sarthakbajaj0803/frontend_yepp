import { Component } from '@angular/core';
import {Transaction} from "../../transaction";

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.css']
})
export class TransactionPageComponent {
  transactions: Transaction[] = [
    {"name": "Transaction 1", "amount": 100, reference: "reference",debit: true,"date": "2020-01-01", IBAN: "IBAN", currency: "EUR"},
    {"name": "Transaction 2", "amount": 200, reference: "reference",debit: false, "date": "2020-01-02", IBAN: "IBAN", currency: "EUR"},
    {"name": "Transaction 3", "amount": 300, reference: "reference",debit: false, "date": "2020-01-03", IBAN: "IBAN", currency: "EUR"},
    ]

}
