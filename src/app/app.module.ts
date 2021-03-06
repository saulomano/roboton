import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FundamentacionComponent } from './fundamentacion/fundamentacion.component';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';
import { NoticiasComponent } from './noticias/noticias.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { KitsComponent } from './kits/kits.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FundamentacionComponent,
    NoticiasComponent,
    InstitucionalComponent,
    KitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    NgbModule,
    CommonModule,
    RouterModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
