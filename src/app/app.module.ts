import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FundamentacionComponent } from './fundamentacion/fundamentacion.component';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FundamentacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    NgbModule,
    CommonModule,
    RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
