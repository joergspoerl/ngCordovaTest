import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
   MatButtonModule,
   MatToolbarModule,
   MatCheckboxModule,
   MatTabsModule,
   FlexLayoutModule,
   BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
