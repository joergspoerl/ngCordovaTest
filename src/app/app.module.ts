import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

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
   RouterModule.forRoot([
     {
       path: 'start',
       component: StartComponent
     },
     {
       path: 'about',
       component: AboutComponent
     },
     {
       path: 'settings',
       component: SettingsComponent
     }
   ]),
   MdButtonModule,
   MdCheckboxModule,
   MdTabsModule,
   BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
