import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

constructor() { }

links = [
  { name: 'Dashboard', url: ''},
  { name: 'Information', url: ''},
  { name: 'Help', url: ''},
  { name: 'More', url: ''},
  { name: 'Settings', url: ''},
];

  ngOnInit() {
    console.log('NavigationComponent: ngOnInit()', NavigationComponent);
  }

}
