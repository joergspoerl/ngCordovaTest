import { Component } from '@angular/core';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickButton() {
    alert('Button clicked');
  }
}
