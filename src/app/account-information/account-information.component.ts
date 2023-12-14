import {Component, OnInit } from '@angular/core';
import {interval} from "rxjs";
import {BreakpointObserver} from "@angular/cdk/layout";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.css']
})
export class AccountInformationComponent implements OnInit{
  isMobileLayout = false;
  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 599px)']).subscribe(result => {
      this.isMobileLayout = result.matches;
      console.log(this.isMobileLayout)
    });
  }


}
