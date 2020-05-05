import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng5SliderModule } from 'ng5-slider';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AVerOMarComponent } from './aver-omar/aver-omar.component';
import { DouroVinhasComponent } from './douro-vinhas/douro-vinhas.component';
import { DvHomeComponent } from './dv-home/dv-home.component';
import { DVQuartosComponent } from './dvquartos/dvquartos.component';
import { DvquartosServicosComponent } from './dvquartos-servicos/dvquartos-servicos.component';
import { DvstandardComponent } from './dvstandard/dvstandard.component';
import { DvsuiteComponent } from './dvsuite/dvsuite.component';
import { DvsuiteDeluxeComponent } from './dvsuite-deluxe/dvsuite-deluxe.component';
import { DvsuiteDuplexComponent } from './dvsuite-duplex/dvsuite-duplex.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MarHomeComponent } from './mar-home/mar-home.component';
import { MediterraneoComponent } from './mediterraneo/mediterraneo.component';
import { DVGaleriaComponent } from './dvgaleria/dvgaleria.component';
import { MarGaleriaComponent } from './mar-galeria/mar-galeria.component';
import { MarQuartosComponent } from './mar-quartos/mar-quartos.component';
import { MarQuartosServicosComponent } from './mar-quartos-servicos/mar-quartos-servicos.component';
import { MarStandardComponent } from './mar-standard/mar-standard.component';
import { MarSuiteJuniorComponent } from './mar-suite-junior/mar-suite-junior.component';
import { MarSuiteJuniorSuperiorComponent } from './mar-suite-junior-superior/mar-suite-junior-superior.component';
import { MediterraneoHomeComponent } from './mediterraneo-home/mediterraneo-home.component';
import { MediterraneoGaleriaComponent } from './mediterraneo-galeria/mediterraneo-galeria.component';
import { MediterraneoQuartosComponent } from './mediterraneo-quartos/mediterraneo-quartos.component';
import { MediterraneoQuartosServicosComponent } from './mediterraneo-quartos-servicos/mediterraneo-quartos-servicos.component';
import { MediterraneoQuartosStandardComponent } from './mediterraneo-quartos-standard/mediterraneo-quartos-standard.component';
import { MediterraneoQuartosSuiteJuniorComponent } from './mediterraneo-quartos-suite-junior/mediterraneo-quartos-suite-junior.component';
import { MediterraneoQuartosSuiteSeniorComponent } from './mediterraneo-quartos-suite-senior/mediterraneo-quartos-suite-senior.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelHomePageComponent } from './hotel-home-page/hotel-home-page.component';
import { TopBarHotelComponent } from './top-bar-hotel/top-bar-hotel.component';
import { BotBarHotelComponent } from './bot-bar-hotel/bot-bar-hotel.component';
import { QuartosPesquisaComponent } from './quartos-pesquisa/quartos-pesquisa.component';


@NgModule({
  declarations: [
    AppComponent,
    AVerOMarComponent,
    DouroVinhasComponent,
    DvHomeComponent,
    DVQuartosComponent,
    DvquartosServicosComponent,
    DvstandardComponent,
    DvsuiteComponent,
    DvsuiteDeluxeComponent,
    DvsuiteDuplexComponent,
    HomePageComponent,
    MarHomeComponent,
    MediterraneoComponent,
    DVGaleriaComponent,
    MarGaleriaComponent,
    MarQuartosComponent,
    MarQuartosServicosComponent,
    MarStandardComponent,
    MarSuiteJuniorComponent,
    MarSuiteJuniorSuperiorComponent,
    MediterraneoHomeComponent,
    MediterraneoGaleriaComponent,
    MediterraneoQuartosComponent,
    MediterraneoQuartosServicosComponent,
    MediterraneoQuartosStandardComponent,
    MediterraneoQuartosSuiteJuniorComponent,
    MediterraneoQuartosSuiteSeniorComponent,
    HotelComponent,
    HotelHomePageComponent,
    TopBarHotelComponent,
    BotBarHotelComponent,
    QuartosPesquisaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng5SliderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
