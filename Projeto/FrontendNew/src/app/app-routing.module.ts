import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './home-page/home-page.component';
import {DouroVinhasComponent} from './douro-vinhas/douro-vinhas.component';
import {AVerOMarComponent} from './aver-omar/aver-omar.component';
import {MediterraneoComponent} from './mediterraneo/mediterraneo.component';
import {DVQuartosComponent} from './dvquartos/dvquartos.component';
import {DvHomeComponent} from './dv-home/dv-home.component';
import {DVQuartosServicosComponent} from './dvquartos-servicos/dvquartos-servicos.component';
import {DvstandardComponent} from './dvstandard/dvstandard.component';
import {DvsuiteComponent} from './dvsuite/dvsuite.component';
import {DvsuiteDeluxeComponent} from './dvsuite-deluxe/dvsuite-deluxe.component';
import {DvsuiteDuplexComponent} from './dvsuite-duplex/dvsuite-duplex.component';
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
