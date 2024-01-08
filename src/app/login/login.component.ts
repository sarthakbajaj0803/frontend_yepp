import { Component } from '@angular/core';
import { AuthenticationService } from './authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthenticationService){
  }

  username = ""
  password=""
  hide = true;

  login() {
    this.auth.login(this.username, this.password).subscribe()

  }

}
