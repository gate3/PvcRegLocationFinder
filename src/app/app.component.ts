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
    //this.seedDatabase()

    this.router.events.subscribe(evt=>{

      if(evt instanceof NavigationStart){
        this.slimLoadingBarService.start()
      }

      if(evt instanceof NavigationEnd){
        this.slimLoadingBarService.complete()
      }
      
    })
  }

  private seedDatabase() {
    const dummyPoints = [
      {name:'Location a', address:'2 Breakthrough Church Avenue Off Cmd Road,Ikosi Ketu', location:[6.6403558, 3.3176431]},
      {name:'Location b', address:'52, Olasanoye Street', location:[6.651611, 3.325750]},
      {name:'Location c', address:'49, Baale Street', location:[6.658900,3.3176431]},
      {name:'Location d', address:'69,Adetokunbo Ademola Crescent', location:[6.658175, 3.292362]},
      {name:'Location e', address:'Corporation Drive, Dolphin Estate, Ikoyi', location:[6.658175,3.292362]}
    ]
  
    dummyPoints.forEach(({name,location, address}, idx) => {
      this.geoService.setLocation(name, address, location)
    })
  }       
}
