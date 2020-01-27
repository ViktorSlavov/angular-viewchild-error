import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomComponent } from './custom/custom.component';
import { CustomDirective } from './custom-directive/custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
