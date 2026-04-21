import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GanttAllModule } from '@syncfusion/ej2-angular-gantt';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    GanttAllModule,
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
