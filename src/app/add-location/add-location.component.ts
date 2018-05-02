import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadLocationJson, NavigationService, Strings, GeoService } from '../services';

@Component({
    moduleId: module.id,
    selector: 'add-location',
    templateUrl: 'add-location.component.html',
    styleUrls: ['add-location.component.scss']
})
export class AddLocationComponent implements OnInit{

    addLocationForm:FormGroup
    states:Array<string> = []
    local_govts:Array<string> = []
    loading:boolean = true
    lat:any; 
    lng:any;
    selectedPosition:any;
    showMap:boolean = false

    constructor (private fbuilder: FormBuilder, 
                private loadLocationJson:LoadLocationJson, 
                private navigatorService:NavigationService,
                private geoService:GeoService){
                    
        this.getLocation()
        this.loadLocationJson.getStates()
            .subscribe(states=>{
                this.states = states
                this.fetchLgas(states[0])
            })
    }

    ngOnInit(): void {
        const requiredValidator:Array<Validators> = [Validators.required]
        this.addLocationForm = this.fbuilder.group({
            locationName:[null, requiredValidator],
            locationAddress:[null, requiredValidator],
            lga:[null, requiredValidator],
            state:[null, requiredValidator]
        })

        this.addLocationForm
            .statusChanges
            .subscribe(s=>{
                if(s === 'VALID'){
                    this.showMap = true
                }
            })
    }    

    clearForm () {
        this.addLocationForm.reset()
        //this.navigatorService.clearWatch()
    }

    showLgas (e){
        this.fetchLgas(e.target.value)   
    }

    fetchLgas (state:string){
        const res = this.loadLocationJson.getLgas(state)
        this.local_govts =  res != null && res.length > 0 ? res[0]:[]
    } 

    getLocation () {
        this.navigatorService
            .getCurrentLocation()
            .subscribe(position=>{
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                
                this.loading = false
            }, e=>this.navigatorService.handlePermissionError(e))
    }

    onCoordinates ({coords}) {
        this.selectedPosition = coords
    }

    onSubmit ({value}) {
        if(this.addLocationForm.valid){
            this.loading = true
            if(this.selectedPosition == null){
                alert(Strings.VALIDATION.POSITION)
            }else{
                const {state, lga, locationAddress, locationName} = value
                const {lat, lng} = this.selectedPosition
                const address = `${locationAddress}, ${lga}, ${state}`

                this.geoService
                    .setLocation(locationName, address, [lat, lng])
                    .subscribe(s=>{
                        alert(Strings.ADD_LOCATION.SUCCESS)
                        window.location.reload()
                    }, e=>alert(e), ()=>this.loading = false)
            }
        }else{
            Object.keys(this.addLocationForm.controls).forEach(field => { 
                const control = this.addLocationForm.get(field);            
                control.markAsTouched({ onlySelf: true });       
            });
        }

    }
}
