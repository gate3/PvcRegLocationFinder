import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module'

import {PvFooterModule, PvHeaderModule} from './shared';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DeviceDetectorModule } from 'ngx-device-detector';
import {SlimLoadingBarModule, SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { EventService } from './services';
import { HttpModule } from '@angular/http';

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
    SlimLoadingBarModule.forRoot(),
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [SlimLoadingBarService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule {}
