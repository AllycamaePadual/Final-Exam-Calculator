import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MycaculatorComponent } from './mycaculator/mycaculator.component';

@NgModule({
  declarations: [
    AppComponent,
    MycaculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
