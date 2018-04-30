// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { PvHeaderComponent } from './pv-header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        PvHeaderComponent,
    ],
    exports: [
        PvHeaderComponent,
    ]
})
export class PvHeaderModule {

}
