import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng5SliderModule } from 'ng5-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DouroVinhasComponent } from './douro-vinhas/douro-vinhas.component';
import { AVerOMarComponent } from './a-ver-omar/a-ver-omar.component';
import { MediterraneoComponent } from './mediterraneo/mediterraneo.component';
import { DVQuartosComponent } from './dvquartos/dvquartos.component';
import { DvHomeComponent } from './dv-home/dv-home.component';
import { DVQuartosServicosComponent } from './dvquartos-servicos/dvquartos-servicos.component';
import { MarHomeComponent } from './mar-home/mar-home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DouroVinhasComponent,
    AVerOMarComponent,
    MediterraneoComponent,
    DVQuartosComponent,
    DvHomeComponent,
    DVQuartosServicosComponent,
    MarHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
