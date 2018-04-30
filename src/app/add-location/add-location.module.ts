// Angular Imports
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }   from '@angular/forms';

// This Module's Components
import { AddLocationComponent } from './add-location.component';
import { AddLocationRoutingModule } from './add-location-routing.module';
import { RedSectionModule } from '../shared';
import { CommonModule } from '@angular/common';
import { LoadLocationJson } from '../services/loadLocationJson.service';
import { BaseMapModule } from '../components';
import { NavigationService } from '../services';
import { LoadingModule } from '../shared/loading/loading.module';

@NgModule({
    imports: [
        AddLocationRoutingModule,
        RedSectionModule,
        CommonModule,
        ReactiveFormsModule,
        BaseMapModule,
        LoadingModule
    ],
    declarations: [
        AddLocationComponent,
    ],
    exports: [
        AddLocationComponent,
    ],
    providers:[LoadLocationJson, NavigationService]
})
export class AddLocationModule {

}
