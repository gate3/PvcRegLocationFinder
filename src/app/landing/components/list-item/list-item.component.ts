import { Component,Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'list-item',
    templateUrl: 'list-item.component.html',
    styleUrls: ['list-item.component.scss']
})
export class ListItemComponent {

    @Input()location

    constructor (private router:Router) {}

    openLocation () {
        this.router.navigate([`/info/${this.location.name}/${this.location.address}/${this.location.location}`],)
    }
}
