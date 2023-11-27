import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";


@Component({
  selector: 'app-custom-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
