import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SalesTeamListComponent } from './sales-team-list/sales-team-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesTeamListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
