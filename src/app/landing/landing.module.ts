// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { LandingComponent } from './landing.component';

import {LandingRoutingModule} from './landing-routing.module'
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import {BaseMapModule} from '../components'

import {ListItemComponent} from './components'

import { LandingMapModule } from './landing-map/landing-map.module';
import { HomeModule } from './home/home.module';
import { RedSectionModule } from '../shared';
import { LoadingModule } from '../shared/loading/loading.module';

@NgModule({
    imports: [
        LandingRoutingModule,
        CommonModule,
        LandingMapModule,
        HomeModule,
        RedSectionModule,
        LoadingModule
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
