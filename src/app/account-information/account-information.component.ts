import { Component } from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.css']
})
export class AccountInformationComponent {

constructor() {
  console.log(interval(1000));
}



}
