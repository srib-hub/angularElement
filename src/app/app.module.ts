import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { createCustomElement } from '@angular/elements';
import { MonpetitponeyComponent } from './monpetitponey/monpetitponey.component';

@NgModule({
  declarations: [
    AppComponent,
    MonpetitponeyComponent,
    MonpetitponeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [
    AppComponent,
    MonpetitponeyComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(app: ApplicationRef) {
    if(environment.production) {
      const monpetitponeyElement = createCustomElement(MonpetitponeyComponent, {injector: this.injector});
      customElements.define('mon-petit-poney', monpetitponeyElement);
    }
    else {
      app.bootstrap(AppComponent);
    }
  }
}
