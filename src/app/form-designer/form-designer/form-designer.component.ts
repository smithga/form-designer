import { Component, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular2-resizable';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'app-form-designer',
    templateUrl: 'form-designer.component.html',
    styleUrls: ['./form-designer.component.css']
})
export class FormDesignerComponent implements OnInit {
    constructor() { }

    onResizeEnd(event: ResizeEvent): void {
        console.log('Element was resized', event);
    }

    ngOnInit() {

    }

}