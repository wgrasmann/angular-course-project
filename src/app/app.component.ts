import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCbAa9v4rH7hxFThtKYoEAiCbr4RcEDPSw',
      authDomain: 'ng-recipe-book-54399.firebaseapp.com'
    });

    const tokenKey = Object.keys(window.localStorage)
      .filter(it => it.startsWith('firebase:authUser'))[0];
    const authToken = JSON.parse(localStorage.getItem(tokenKey)).stsTokenManager.accessToken;
    this.authService.token = authToken;
    console.log(this.authService.isAuthenticated());
  }
}
