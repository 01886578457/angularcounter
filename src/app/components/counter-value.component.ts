import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-counter-value',
    template: `
        <h2>Count: {{count}}</h2>
        `
})
export class CounterValueComponent { 
    @Input()
    count;
}
