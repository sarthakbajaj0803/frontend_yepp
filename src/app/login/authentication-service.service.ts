import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }


login(username:string, password:string) {
    return this.httpClient.post<any>('http://localhost:8080/login', {username, password}).pipe( map(user => {
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
    }), shareReplay());
  }



}
