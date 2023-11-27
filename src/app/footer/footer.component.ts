import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
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
