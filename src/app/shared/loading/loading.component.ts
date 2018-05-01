import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'loading',
    templateUrl: 'loading.component.html',
    styleUrls: ['loading.component.scss']
})
export class LoadingComponent {
    @Input()message:string = ' while we find registration centers'
}
