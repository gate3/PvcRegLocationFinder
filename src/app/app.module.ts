import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {AppRoutingModule} from './app-routing.module'

import {PvFooterModule, PvHeaderModule} from './shared';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { ToastyModule, ToastyService, ToastyConfig } from 'ng2-toasty';
import {SlimLoadingBarModule, SlimLoadingBarService} from 'ng2-slim-loading-bar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PvHeaderModule,
    PvFooterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    DeviceDetectorModule.forRoot(),
    ToastyModule.forRoot(),
    SlimLoadingBarModule.forRoot()
  ],
  providers: [ToastyService, ToastyConfig, SlimLoadingBarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
