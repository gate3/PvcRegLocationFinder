// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { LocationInfoComponent } from './location-info.component';
import {LocationInfoRoutingModule} from './location-info-routing.module'
import { BaseMapModule } from '../components';
@NgModule({
    imports: [
        LocationInfoRoutingModule,
        BaseMapModule
    ],
    declarations: [
        LocationInfoComponent,
    ],
    exports: [
        LocationInfoComponent,
    ]
})
export class LocationInfoModule {

}
