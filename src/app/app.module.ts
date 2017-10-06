import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MdButtonModule, MdCheckboxModule, MdTabsModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StartComponent } from './pages/start/start.component';
import { AboutComponent } from './pages/about/about.component';
import { SettingsComponent } from './pages/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AboutComponent,
    SettingsComponent
  ],
  imports: [
   BrowserModule,
   MdButtonModule,
   MdCheckboxModule,
   MdTabsModule,
   BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
