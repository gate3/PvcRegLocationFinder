// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { MapInfoComponent } from './map-info.component';
import { BaseMapModule } from '../../components';

@NgModule({
    imports: [
        BaseMapModule
    ],
    declarations: [
        MapInfoComponent,
    ],
    exports: [
        MapInfoComponent,
    ]
})
export class MapInfoModule {

}
