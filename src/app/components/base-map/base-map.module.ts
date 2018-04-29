// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { BaseMapComponent } from './base-map.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { AgmDirectionModule } from 'agm-direction';
@NgModule({
    imports: [
        AgmCoreModule.forRoot({
            apiKey:environment.googleMapsKey
        }),
        AgmDirectionModule,
        CommonModule
    ],
    declarations: [
        BaseMapComponent,
    ],
    exports: [
        BaseMapComponent,
    ]
})
export class BaseMapModule {

}
