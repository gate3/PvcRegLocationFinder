import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'map-info',
    templateUrl: 'map-info.component.html',
    styleUrls: ['map-info.component.scss']
})
export class MapInfoComponent {
    @Input()locationData;
}
