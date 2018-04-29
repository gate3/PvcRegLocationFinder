import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './landing/landing.module#LandingModule' },
  { path: 'info/:name/:address/:coords', loadChildren: './location-info/location-info.module#LocationInfoModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
