import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NavigationService } from '../../services/navigation.service';

@Component({
    moduleId: module.id,
    selector: 'base-map',
    templateUrl: 'base-map.component.html',
    styleUrls: ['base-map.component.scss'],
    providers:[DeviceDetectorService, NavigationService]
})
export class BaseMapComponent implements OnInit{
    
    @Input() lat: number;
    @Input() lng: number;
    zoomLevel:number = 13
    @Input() isPlaceFinder:boolean = false

    @Output()onCoordinates:EventEmitter<any> = new EventEmitter();

    dir:any;

    constructor (private navigationService:NavigationService){}

    ngOnInit(): void {
        if(!this.dir){
            return
        }
        this.navigationService.getCurrentLocation().subscribe(position=>{
            this.dir = {
                origin:{lat:position.coords.latitude, lng:position.coords.longitude},
                destination:{lat:this.lat, lng:this.lng}
            }
        }, console.error)
    }

    placeMarker (e) {
        if(this.isPlaceFinder){
            this.handleMarkerChange(e)
            this.onCoordinates.emit(e)
        }
    }

    handleMarkerChange (e) {
        const {coords} = e
        const {lat, lng} = coords
        this.lat = lat
        this.lng = lng
    } 
}
