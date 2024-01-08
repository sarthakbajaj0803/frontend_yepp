import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent {

    constructor(){
    }

    amount = new FormControl('')
    description = new FormControl('')
    reference = new FormControl('')
    IBAN = new FormControl('')
    message = new FormControl('')
    name = new FormControl('')

}
