import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as GeoFire from "geofire";
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class GeoService {
    private dbRef: AngularFireList<any>;
    private geoFire: any;
    private userList:AngularFireList<any>;

    public hits = new BehaviorSubject([])

    constructor(private db: AngularFireDatabase) {
        /// Reference database location for GeoFire
        this.dbRef = this.db.list('/locations');
        this.userList = this.db.list('/users')
        this.geoFire = new GeoFire(this.dbRef.query.ref);
    }

    /// Adds GeoFire data to database
    setLocation(name:string, address:string, coords: Array<number>) {
        const userKey = this.userList.push({name, address}).key
        this.geoFire.set(userKey, coords)
            .then(_ => console.log('location updated'))
            .catch(err => console.log(err))
    }


    /// Queries database for nearby locations
    /// Maps results to the hits BehaviorSubject
    getLocations(radius: number, coords: Array<number>) {
        this.geoFire.query({
            center: coords,
            radius: radius
        })
        .on('key_entered', (userKey, location, distance) => {
            const u = this.userList.query.ref
                          .child(`/${userKey}`)
                          .once('value', s=>{
                            const {name, address} = s.val()

                            let hit = {
                                location,
                                distance,
                                name,
                                address
                            }
                
                            let currentHits = this.hits.value
                            currentHits.push(hit)
                            this.hits.next(currentHits)
                          })
        })
    }
}