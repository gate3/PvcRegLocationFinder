import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable';
import {Strings} from './strings'
import { ToastyService, ToastyConfig } from 'ng2-toasty';

@Injectable()
export class NavigationService {

    constructor (private toastyService:ToastyService, private toastyConfig:ToastyConfig){
        this.toastyConfig.theme = 'material'
    }

    getCurrentLocation ():Observable<any> {
            return Observable.create(observer=>{
                if (window.navigator && window.navigator.geolocation) {
                    //we don't want to wait forever so we put navigation on a one minute timer
                    /*const timer = setTimeout(()=>{
                        const res = confirm(Strings.NAVIGATION.ERROR.TIMEOUT)
                        if(res){
                            window.location.reload(true)
                        }
                    },60000)*/

                    window.navigator.geolocation
                        .getCurrentPosition(position=>{
                            //if navigation comes through clear the timer
                            //clearTimeout(timer)

                            observer.next(position)
                            observer.complete()
                        }, error=>observer.error(error))
                }else{
                    observer.error('Unsupported Browser');
                }
            })
    }

    handlePermissionError (e) {
        if(e.code === e.PERMISSION_DENIED){
            this.toastyService.default(Strings.NAVIGATION.ERROR.PERMISSION)            
        }else if(e.code === e.POSITION_UNAVAILABLE){
            this.toastyService.default(Strings.NAVIGATION.ERROR.UNAVAILABLE)
        }
    }

}