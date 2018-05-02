import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable';
import {Strings} from './strings'

@Injectable()
export class NavigationService {

    private navObject:any;

    getCurrentLocation ():Observable<any> {
            return Observable.create(observer=>{
                if (window.navigator && window.navigator.geolocation) {
                    //we don't want to wait forever so we put navigation on a one minute timer
                    const timer = setTimeout(()=>{
                        const res = confirm(Strings.NAVIGATION.ERROR.TIMEOUT)
                        if(res){
                            window.location.reload(true)
                        }
                    },60000)
                    
                    this.navObject = window.navigator.geolocation
                        .watchPosition(position=>{
                            //if navigation comes through clear the timer
                            clearTimeout(timer)

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
            alert(Strings.NAVIGATION.ERROR.PERMISSION)            
        }else if(e.code === e.POSITION_UNAVAILABLE){
            alert(Strings.NAVIGATION.ERROR.UNAVAILABLE)
        }
    }

    clearWatch () {
        this.clearWatch
    }

}