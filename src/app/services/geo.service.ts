import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as GeoFire from "geofire";
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { EventService } from './event.service';
import {Constants} from './constants'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class GeoService {
    private dbRef: AngularFireList<any>;
    private geoFire: any;
    private userList:AngularFireList<any>;

    public hits = new BehaviorSubject([])

    constructor(private db: AngularFireDatabase, private eventService:EventService) {
        /// Reference database location for GeoFire
        this.dbRef = this.db.list('/locations');
        this.userList = this.db.list('/users')
        this.geoFire = new GeoFire(this.dbRef.query.ref);
    }

    /// Adds GeoFire data to database
    setLocation(name:string, address:string, coords: Array<number>):Observable<any> {
        return Observable.create(observer=>{
            const userKey = this.userList.push({name, address}).key
            this.geoFire.set(userKey, coords)
            .then(s => {
                observer.next('saved')
                observer.complete()
            })
            .catch(err => observer.error(err))
        })        
    }

    /// Queries database for nearby locations
    /// Maps results to the hits BehaviorSubject
    getLocations(radius: number, coords: Array<number>) {
        this.geoFire.query({
            center: coords,
            radius: radius
        })
        .on('key_entered', (userKey, location, distance) => {
            //we need to check this because this.hits the behavioursubject already cached previous result and geofire fetches again each time we go back to homepage
            const existAlready = this.hits.value.filter(h=>h.userKey === userKey)
            if(existAlready.length > 0){
                return
            }
            const u = this.userList.query.ref
                          .child(`/${userKey}`)
                          .once('value')
                          .then(s=>{
                            const {name, address} = s.val()

                            let hit = {
                                location,
                                distance,
                                name,
                                address,
                                userKey
                            }
                            
                            let currentHits = this.hits.value
                            currentHits.push(hit)
                            this.hits.next(currentHits)
                            
                            this.eventService.sendMessage(Constants.EVENT_MESSAGES.LOADING, true)
                          })
        })
    }
}