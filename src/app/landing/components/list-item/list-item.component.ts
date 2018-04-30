import { Component,Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LINKS } from '../../../services';

@Component({
    moduleId: module.id,
    selector: 'list-item',
    templateUrl: 'list-item.component.html',
    styleUrls: ['list-item.component.scss']
})
export class ListItemComponent {

    @Input()location
    @Input()isMobile:boolean = true

    constructor (private router:Router) {}

    openLocation () {
        const link = this.isMobile ? LINKS.MOBILE_INFO : LINKS.WEB_INFO
        this.router.navigate([`${link}${this.location.name}/${this.location.address}/${this.location.location}`],)
    }
}
