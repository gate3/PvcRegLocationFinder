import { Component } from '@angular/core';
import { GeoService,NavigationService,EventService,Constants } from '../services';

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
    private eventSub:any;
    loading:boolean = true
    locations:any;

    constructor (private geo: GeoService, private navigationService:NavigationService, private eventService:EventService){}

    ngOnInit() {
        this.getUserLocation()

        this.eventSub = this.eventService.getMessage()
                            .subscribe(({type, message})=>{
                                if(type === Constants.EVENT_MESSAGES.LOADING){
                                    this.loading = false
                                }
                            })

        this.subscription = this.geo.hits
            .subscribe(hits => {
                this.locations = hits
            },console.error)
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
        this.eventSub.unsubscribe()
    }

    private getUserLocation() {
        
        /// locate the user
        this.navigationService.getCurrentLocation().subscribe(position=>{
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            
            this.geo.getLocations(100, [this.lat, this.lng])
        },e=>this.navigationService.handlePermissionError(e))
    }

    trackByFn (index, item) {
        return item.userKey
    }
}
