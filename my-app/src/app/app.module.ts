import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnsattComponent } from './ansatt/ansatt.component';
import { HeaderComponent } from './header/header.component';
import { VirksomhetComponent } from './virksomhet/virksomhet.component';
import { KartComponent } from './kart/kart.component';
import { FooterComponent } from './footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { Ansattpics1Component } from './ansattpics1/ansattpics1.component';
import { Ansattpics2Component } from './ansattpics2/ansattpics2.component';
import { Ansattpics3Component } from './ansattpics3/ansattpics3.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    AnsattComponent,
    HeaderComponent,
    VirksomhetComponent,
    KartComponent,
    FooterComponent,
    Ansattpics1Component,
    Ansattpics2Component,
    Ansattpics3Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTabsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
