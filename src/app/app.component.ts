import { Component } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {AccountInformationComponent} from "./account-information/account-information.component";
import {CommonModule} from "@angular/common";
import { RouterModule } from '@angular/router';
import {DarkModeService} from "angular-dark-mode";

@Component({

  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterModule],
})
export class AppComponent {
  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;
  title: string = "home";

}
