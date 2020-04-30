import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './home-page/home-page.component';
import {DouroVinhasComponent} from './douro-vinhas/douro-vinhas.component';
import {AVerOMarComponent} from './a-ver-omar/a-ver-omar.component';
import {MediterraneoComponent} from './mediterraneo/mediterraneo.component';
import {DVQuartosComponent} from './dvquartos/dvquartos.component';
import {DvHomeComponent} from './dv-home/dv-home.component';
import {DVQuartosServicosComponent} from './dvquartos-servicos/dvquartos-servicos.component';
import {DVStandardComponent} from './dvstandard/dvstandard.component';
import {DVSuiteComponent} from './dvsuite/dvsuite.component';
import {DVSuiteDeluxeComponent} from './dvsuite-deluxe/dvsuite-deluxe.component';
import {DVSuiteDuplexComponent} from './dvsuite-duplex/dvsuite-duplex.component';
import {MarHomeComponent} from './mar-home/mar-home.component';


const routes: Routes = [
  { path: '', redirectTo: '/homePage', pathMatch: 'full' },
  { path: 'homePage', component: HomePageComponent },
  { path: 'douroVinhas', component: DouroVinhasComponent,
  children: [
    {
      path: 'quartos/servicos', // child route path
      component: DVQuartosServicosComponent // child route component that the router renders
      },
      {
        path: 'quartos/Standard', // child route path
        component: DVStandardComponent // child route component that the router renders
        },
        {
          path: 'quartos/Suite', // child route path
          component: DVSuiteComponent // child route component that the router renders
          },
          {
            path: 'quartos/Suite Duplex', // child route path
            component: DVSuiteDuplexComponent // child route component that the router renders
            },
            {
              path: 'quartos/Suite Deluxe', // child route path
              component: DVSuiteDeluxeComponent // child route component that the router renders
              },
    {
      path: 'quartos', // child route path
      component: DVQuartosComponent, // child route component that the router renders
    },
    {
      path: 'home', // child route path
      component: DvHomeComponent// child route component that the router renders
    }
  ] },
  { path: 'aVerOMar', component: AVerOMarComponent,
  children: [
    {
      path: 'home', // child route path
      component: MarHomeComponent// child route component that the router renders
    }
  ] },
  { path: 'mediterraneo', component: MediterraneoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
