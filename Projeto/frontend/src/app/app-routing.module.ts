import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './home-page/home-page.component';
import {DouroVinhasComponent} from './douro-vinhas/douro-vinhas.component';
import {AVerOMarComponent} from './a-ver-omar/a-ver-omar.component';
import {MediterraneoComponent} from './mediterraneo/mediterraneo.component';

const routes: Routes = [
  { path: '', redirectTo: '/homePage', pathMatch: 'full' },
  { path: 'homePage', component: HomePageComponent },
  { path: 'douroVinhas', component: DouroVinhasComponent },
  { path: 'aVerOMar', component: AVerOMarComponent },
  { path: 'mediterraneo', component: MediterraneoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
