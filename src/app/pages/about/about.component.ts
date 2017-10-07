import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  host: {class: 'router-page'}
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
