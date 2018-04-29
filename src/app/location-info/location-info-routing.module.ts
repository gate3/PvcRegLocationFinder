import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationInfoComponent } from './location-info.component';

const routes: Routes = [
  {path: '', component: LocationInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationInfoRoutingModule { }
