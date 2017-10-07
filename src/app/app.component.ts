import { Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material';

import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';

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
