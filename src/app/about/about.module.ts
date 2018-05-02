// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
    imports: [
        AboutRoutingModule
    ],
    declarations: [
        AboutComponent,
    ],
    exports: [
        AboutComponent,
    ]
})
export class AboutModule {

}
