import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingMapComponent } from './landing-map.component';

const routes: Routes = [
  {path: '', component: LandingMapComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingMapRoutingModule { }
