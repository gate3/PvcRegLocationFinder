// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { LandingComponent } from './landing.component';

import {LandingRoutingModule} from './landing-routing.module'
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import {BaseMapModule} from '../components'

import {ListItemComponent} from './components'

import {ToastyModule} from 'ng2-toasty'
import { NgSpinKitModule } from 'ng-spin-kit'

@NgModule({
    imports: [
        LandingRoutingModule,
        CommonModule,
        BaseMapModule,
        ToastyModule.forRoot(),
        NgSpinKitModule
    ],                                                  
    declarations: [
        LandingComponent, 
        ListItemComponent  
    ],
    exports: [
        LandingComponent,
    ]
})
export class LandingModule {}
