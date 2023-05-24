import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnsattComponent } from './ansatt/ansatt.component';
import { HeaderComponent } from './header/header.component';
import { VirksomhetComponent } from './virksomhet/virksomhet.component';
import { KartComponent } from './kart/kart.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AnsattComponent,
    HeaderComponent,
    VirksomhetComponent,
    KartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
