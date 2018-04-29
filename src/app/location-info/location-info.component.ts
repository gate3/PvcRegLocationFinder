import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../services';

@Component({
    moduleId: module.id,
    selector: 'location-info',
    templateUrl: 'location-info.component.html',
    styleUrls: ['location-info.component.scss'],
})
export class LocationInfoComponent {

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
