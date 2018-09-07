import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter.component';
import { CounterButtonComponent } from './components/counter-button.component';
import { CounterValueComponent } from './components/counter-value.component';

@NgModule({
  declarations: [
    AppComponent, CounterComponent, CounterButtonComponent, CounterValueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
