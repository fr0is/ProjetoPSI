import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DouroVinhasComponent } from './douro-vinhas/douro-vinhas.component';
import { AVerOMarComponent } from './a-ver-omar/a-ver-omar.component';
import { MediterraneoComponent } from './mediterraneo/mediterraneo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DouroVinhasComponent,
    AVerOMarComponent,
    MediterraneoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
