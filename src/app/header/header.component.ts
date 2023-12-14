import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {DarkModeService} from "angular-dark-mode";


@Component({
  selector: 'app-custom-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobileLayout = false;
  constructor(private breakpointObserver: BreakpointObserver, private darkModeService: DarkModeService) {
  }
  ngOnInit() {
  this.breakpointObserver.observe(['(max-width: 599px)']).subscribe(result => {
    this.isMobileLayout = result.matches;
    console.log(this.isMobileLayout)
  });
  }
  darkmode$ = this.darkModeService.darkMode$;

  toggleDarkMode() {
    this.darkModeService.toggle();
  }





}
