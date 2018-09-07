import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-counter-button',
    template: `
        <button (click)="handleClick()"><ng-content></ng-content></button>
        `
})
export class CounterButtonComponent { 
    @Output()
    clicked = new EventEmitter();
    handleClick(){
        this.clicked.emit();
    }
}
