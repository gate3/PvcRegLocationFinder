import { Component } from '@angular/core';
import { GeoService } from '../services/geo.service';
import { NavigationService } from '../services/navigation.service';

@Component({
    moduleId: module.id,
    selector: 'landing',
    templateUrl: 'landing.component.html',
    styleUrls: ['landing.component.scss'],
    providers:[NavigationService]
})
export class LandingComponent {

    private lat: number;
    private lng: number;
    private subscription: any;

    locations:any;

    constructor (private geo: GeoService, private navigationService:NavigationService){}

    ngOnInit() {
        this.getUserLocation()
        this.subscription = this.geo.hits
            .subscribe(hits => {
                this.locations = hits
            })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

    private getUserLocation() {
        /// locate the user
        this.navigationService.getCurrentLocation().subscribe(position=>{
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;

            this.geo.getLocations(100, [this.lat, this.lng])
        },e=>this.navigationService.handlePermissionError(e))
    }
}
