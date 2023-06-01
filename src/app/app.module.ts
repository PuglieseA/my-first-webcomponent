import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TheExampleComponent} from './the-example/the-example.component';
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [TheExampleComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [TheExampleComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(TheExampleComponent, {injector});
    customElements.define('the-example', el);
  }

  ngDoBootstrap() {
  }
}

