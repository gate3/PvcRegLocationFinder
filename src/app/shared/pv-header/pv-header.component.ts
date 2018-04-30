import { Component } from '@angular/core';
import { LINKS } from '../../services';

@Component({
    moduleId: module.id,
    selector: 'pv-header',
    templateUrl: 'pv-header.component.html',
    styleUrls: ['pv-header.component.scss']
})
export class PvHeaderComponent {

    links:Array<any> = LINKS.MAIN_NAV
}
