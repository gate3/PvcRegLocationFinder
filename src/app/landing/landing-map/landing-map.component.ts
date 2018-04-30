import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'landing-map',
    templateUrl: 'landing-map.component.html',
    styleUrls: ['landing-map.component.scss']
})
export class LandingMapComponent {
    locationData:{name:string, address:string, location:Array<any>} = {name:'', address:'', location:[]}

    constructor (private activeRoute:ActivatedRoute) {
        this.activeRoute.params.subscribe(({name, address, coords})=>{
            this.locationData.name = name
            this.locationData.address = address
            this.locationData.location = coords.split(',').map(c=>parseFloat(c))
        })

        //this.navigationService.getCurrentLocation().subscribe(console.log, console.error)
    }
}
