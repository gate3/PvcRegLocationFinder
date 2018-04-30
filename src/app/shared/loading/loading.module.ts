// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { LoadingComponent } from './loading.component';
import { NgSpinKitModule } from 'ng-spin-kit'

@NgModule({
    imports: [
        NgSpinKitModule
    ],
    declarations: [
        LoadingComponent,
    ],
    exports: [
        LoadingComponent,
    ]
})
export class LoadingModule {

}
