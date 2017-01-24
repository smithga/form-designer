import { NgModule } from '@angular/core';
import { ResizableModule } from 'angular2-resizable';

// Main
import { FormDesignerComponent } from './form-designer/form-designer.component';

// Canvas
import { CanvasContainer } from './canvas/containers/canvas.container/canvas.container';

// Toolbox
import { ToolboxContainer } from './toolbox/containers/toolbox.container/toolbox.container';

// Properties
import { PropertiesContainer } from './properties/containers/properties.container/properties.container';

@NgModule({
    imports: [
        ResizableModule
    ],
    exports: [
        FormDesignerComponent
    ],
    declarations: [
        FormDesignerComponent,
        CanvasContainer,
        ToolboxContainer,
        PropertiesContainer
    ],
    providers: [],
})
export class FormDesignerModule { }
