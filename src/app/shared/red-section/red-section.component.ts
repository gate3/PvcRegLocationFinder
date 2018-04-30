import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'red-section',
    templateUrl: 'red-section.component.html',
    styleUrls: ['red-section.component.scss']
})
export class RedSectionComponent {
    @Input()title:string;
}
