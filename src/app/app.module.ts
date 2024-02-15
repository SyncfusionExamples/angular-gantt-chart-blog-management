import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GanttAllModule } from '@syncfusion/ej2-angular-gantt';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GanttAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
