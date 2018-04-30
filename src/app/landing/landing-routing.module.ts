import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent,children:[
    {path:'', loadChildren:'./home/home.module#HomeModule'},
    {path:'sidebar-info/:name/:address/:coords', loadChildren: './landing-map/landing-map.module#LandingMapModule'}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
