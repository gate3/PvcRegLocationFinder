// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { LandingMapComponent } from './landing-map.component';
import { LandingMapRoutingModule } from './landing-map-routing.module';
import { MapInfoModule } from '../../shared/map-info/map-info.module';

@NgModule({
    imports: [
        LandingMapRoutingModule,
        MapInfoModule
    ],
    declarations: [
        LandingMapComponent,
    ],
    exports: [
        LandingMapComponent,
    ]
})
export class LandingMapModule {

}
