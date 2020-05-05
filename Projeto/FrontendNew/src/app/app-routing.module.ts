import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './home-page/home-page.component';
import {DouroVinhasComponent} from './douro-vinhas/douro-vinhas.component';
import {AVerOMarComponent} from './aver-omar/aver-omar.component';
import {MediterraneoComponent} from './mediterraneo/mediterraneo.component';
import {DVQuartosComponent} from './dvquartos/dvquartos.component';
import {DvHomeComponent} from './dv-home/dv-home.component';
import {DvquartosServicosComponent} from './dvquartos-servicos/dvquartos-servicos.component';
import {DvstandardComponent} from './dvstandard/dvstandard.component';
import {DvsuiteComponent} from './dvsuite/dvsuite.component';
import {DvsuiteDeluxeComponent} from './dvsuite-deluxe/dvsuite-deluxe.component';
import {DvsuiteDuplexComponent} from './dvsuite-duplex/dvsuite-duplex.component';
import {MarHomeComponent} from './mar-home/mar-home.component';
import { DVGaleriaComponent } from './dvgaleria/dvgaleria.component';
import { MarGaleriaComponent } from './mar-galeria/mar-galeria.component';
import { MarQuartosComponent } from './mar-quartos/mar-quartos.component';
import { MarSuiteJuniorSuperiorComponent } from './mar-suite-junior-superior/mar-suite-junior-superior.component';
import { MarSuiteJuniorComponent } from './mar-suite-junior/mar-suite-junior.component';
import { MarStandardComponent } from './mar-standard/mar-standard.component';
import { MarQuartosServicosComponent } from './mar-quartos-servicos/mar-quartos-servicos.component';
import { MediterraneoQuartosServicosComponent } from './mediterraneo-quartos-servicos/mediterraneo-quartos-servicos.component';
import { MediterraneoQuartosStandardComponent } from './mediterraneo-quartos-standard/mediterraneo-quartos-standard.component';
import { MediterraneoQuartosSuiteJuniorComponent } from './mediterraneo-quartos-suite-junior/mediterraneo-quartos-suite-junior.component';
import { MediterraneoQuartosSuiteSeniorComponent } from './mediterraneo-quartos-suite-senior/mediterraneo-quartos-suite-senior.component';
import { MediterraneoQuartosComponent } from './mediterraneo-quartos/mediterraneo-quartos.component';
import { MediterraneoGaleriaComponent } from './mediterraneo-galeria/mediterraneo-galeria.component';
import { MediterraneoHomeComponent } from './mediterraneo-home/mediterraneo-home.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelHomePageComponent } from './hotel-home-page/hotel-home-page.component';
import { QuartosPesquisaComponent } from './quartos-pesquisa/quartos-pesquisa.component';
import { QuartoPaginaDetalhesComponent } from './quarto-pagina-detalhes/quarto-pagina-detalhes.component';


const routes: Routes = [
  { path: '', redirectTo: '/hoteisPSI', pathMatch: 'full' },
  { path: 'hoteisPSI', component: HomePageComponent },
  { path: 'hoteisPSI/hotel/:idHotel', component: HotelComponent,
  children: [
    {
      path: '', // child route path
      component: HotelHomePageComponent // child route component that the router renders
    },
    {
      path: 'quartos', // child route path
      component: QuartosPesquisaComponent // child route component that the router renders
    },
    {
      path: 'quartos/:id', // child route path
      component: QuartoPaginaDetalhesComponent // child route component that the router renders
    }
  ]},


  { path: 'douroVinhas', component: DouroVinhasComponent,
  children: [
    {
      path: 'quartos/servicos', // child route path
      component: DvquartosServicosComponent // child route component that the router renders
    },
    {
      path: 'quartos/Standard', // child route path
      component: DvstandardComponent // child route component that the router renders
    },
    {
      path: 'quartos/Suite', // child route path
      component: DvsuiteComponent // child route component that the router renders
    },
    {
      path: 'quartos/Suite Duplex', // child route path
      component: DvsuiteDuplexComponent // child route component that the router renders
    },
    {
      path: 'quartos/Suite Deluxe', // child route path
      component: DvsuiteDeluxeComponent // child route component that the router renders
    },
    {
      path: 'quartos', // child route path
      component: DVQuartosComponent, // child route component that the router renders
    },
    {
      path: 'galeria', // child route path
      component: DVGaleriaComponent, // child route component that the router renders
    },
    {
      path: 'home', // child route path
      component: DvHomeComponent// child route component that the router renders
    }
  ] },
  { path: 'aVerOMar', component: AVerOMarComponent,
  children: [
    {
      path: 'quartos/servicos', // child route path
      component: MarQuartosServicosComponent // child route component that the router renders
    },
    {
      path: 'quartos/Standard', // child route path
      component: MarStandardComponent // child route component that the router renders
    },
    {
      path: 'quartos/Suite Junior', // child route path
      component: MarSuiteJuniorComponent // child route component that the router renders
    },
    {
      path: 'quartos/Suite Junior Superior', // child route path
      component: MarSuiteJuniorSuperiorComponent // child route component that the router renders
    },
    {
      path: 'quartos', // child route path
      component: MarQuartosComponent, // child route component that the router renders
    },
    {
      path: 'galeria', // child route path
      component: MarGaleriaComponent, // child route component that the router renders
    },
    {
      path: 'home', // child route path
      component: MarHomeComponent// child route component that the router renders
    }
  ]  },
  { path: 'mediterraneo', component: MediterraneoComponent,
  children: [
    {
      path: 'quartos/servicos', // child route path
      component: MediterraneoQuartosServicosComponent // child route component that the router renders
    },
    {
      path: 'quartos/Standard', // child route path
      component: MediterraneoQuartosStandardComponent // child route component that the router renders
    },
    {
      path: 'quartos/Suite Junior', // child route path
      component: MediterraneoQuartosSuiteJuniorComponent // child route component that the router renders
    },
    {
      path: 'quartos/Suite Senior', // child route path
      component: MediterraneoQuartosSuiteSeniorComponent // child route component that the router renders
    },
    {
      path: 'quartos', // child route path
      component: MediterraneoQuartosComponent // child route component that the router renders
    },
    {
      path: 'galeria', // child route path
      component: MediterraneoGaleriaComponent, // child route component that the router renders
    },
    {
      path: 'home', // child route path
      component: MediterraneoHomeComponent// child route component that the router renders
    }
  ]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
