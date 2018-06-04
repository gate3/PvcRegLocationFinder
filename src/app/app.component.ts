import { Component } from '@angular/core';
import { GeoService } from './services';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[GeoService]
})
export class AppComponent {
  title = 'app';

  constructor (private geoService:GeoService, public router: Router,
    private slimLoadingBarService: SlimLoadingBarService,){
    
    this.router.events.subscribe(evt=>{

      if(evt instanceof NavigationStart){
        this.slimLoadingBarService.start()
      }

      if(evt instanceof NavigationEnd){
        this.slimLoadingBarService.complete()
      }
      
    })
  }    
}
