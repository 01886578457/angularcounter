import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <div>
        <app-counter-value [count]="count" ></app-counter-value>
            <div>
                <app-counter-button (clicked)="increment()">+</app-counter-button>
                <app-counter-button (clicked)="decrement()">-</app-counter-button>
            </div>
        </div>
        `
})
export class CounterComponent {
    count = 999;
    increment(){
        this.count++;
    }
    decrement(){
        this.count--;
    }
 }
