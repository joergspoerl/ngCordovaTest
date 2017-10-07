import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatListModule } from '@angular/material';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

constructor() { }

links = [
  { name: 'Dashboard', url: '/start'},
  { name: 'Information', url: '/about'},
  { name: 'Help', url: '/about'},
  { name: 'Home', url: ''},
  { name: 'Settings', url: '/settings'},
];

  ngOnInit() {
    console.log('NavigationComponent: ngOnInit()', NavigationComponent);
  }

}
