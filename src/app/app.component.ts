import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Super S L';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCbAa9v4rH7hxFThtKYoEAiCbr4RcEDPSw',
      authDomain: 'ng-recipe-book-54399.firebaseapp.com'
    });
  }
}
