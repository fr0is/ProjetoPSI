import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng5SliderModule } from 'ng5-slider';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnCreate } from 'src/app/onCreate.directive';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelHomePageComponent } from './hotel-home-page/hotel-home-page.component';
import { TopBarHotelComponent } from './top-bar-hotel/top-bar-hotel.component';
import { BotBarHotelComponent } from './bot-bar-hotel/bot-bar-hotel.component';
import { QuartosPesquisaComponent } from './quartos-pesquisa/quartos-pesquisa.component';
import { QuartoPaginaDetalhesComponent } from './quarto-pagina-detalhes/quarto-pagina-detalhes.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { QuartosServicosComponent } from './quartos-servicos/quartos-servicos.component';
import { StickyBarComponent } from './sticky-bar/sticky-bar.component';
import { QuartosHomePageComponent } from './quartos-home-page/quartos-home-page.component';
import { LoginRegistoComponent } from './login-registo/login-registo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HotelComponent,
    HotelHomePageComponent,
    TopBarHotelComponent,
    BotBarHotelComponent,
    QuartosPesquisaComponent,
    QuartoPaginaDetalhesComponent,
    GaleriaComponent,
    QuartosServicosComponent,
    StickyBarComponent,
    QuartosHomePageComponent,
    LoginRegistoComponent,
    OnCreate
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng5SliderModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
