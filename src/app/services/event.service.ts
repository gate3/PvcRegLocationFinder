import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
 
@Injectable()
export class EventService {

    private subject:Subject<any>

    constructor () {
       this.subject = new Subject<any>();
    }
 
    sendMessage(type:string, message: any):void {
        this.subject.next({type, message });
    }
 
    clearMessage() {
        this.subject.next();
    }
 
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}