import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadLocationJson, NavigationService } from '../services';

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

    constructor (private fbuilder: FormBuilder, private loadLocationJson:LoadLocationJson, private navigatorService:NavigationService){
        this.getLocation()
        this.loadLocationJson.getStates()
            .subscribe(states=>this.states = states)
    }

    ngOnInit(): void {
        const requiredValidator:Array<Validators> = [Validators.required]
        this.addLocationForm = this.fbuilder.group({
            locationName:[null, requiredValidator],
            address:[null, requiredValidator],
            lga:[null, requiredValidator],
            state:[null, requiredValidator]
        })
    }    

    clearForm () {
        this.addLocationForm.reset()
    }

    showLgas (e){
        const res = this.loadLocationJson.getLgas(e.target.value)
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

    onCoordinates (e) {
        console.log(e)
    }

    onSubmit ({value}) {
        if(this.addLocationForm.valid){
            console.log(value)
        }else{
            Object.keys(this.addLocationForm.controls).forEach(field => { 
                const control = this.addLocationForm.get(field);            
                control.markAsTouched({ onlySelf: true });       
            });
        }

    }
}
