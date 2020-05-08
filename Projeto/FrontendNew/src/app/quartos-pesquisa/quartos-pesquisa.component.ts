import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

import { Quarto } from '../../quarto';
import { HotelService } from '../hotel.service';


@Component({
  selector: 'app-quartos-pesquisa',
  templateUrl: './quartos-pesquisa.component.html',
  styleUrls: ['./quartos-pesquisa.component.css']
})
export class QuartosPesquisaComponent implements OnInit {
  quartos: Quarto[] = [];
  
  minValue: number = 100;
  maxValue: number = 450;
  options: Options = {
    floor: 0,
    ceil: 500,
    step: 50,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:     
          return value + '€';
        case LabelType.High:
          return value + '€';
        default:
          return '€' + value;
      }
    }
  }

  epoca = 0;
  EpBaixa(){
    this.epoca =1;
  }
  
  EpAlta(){
    this.epoca =0;
  }

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
   this.showQuartos();
  }

  showQuartos() {
    this.hotelService.getHotelQuartos(sessionStorage.getItem("hotelAtual")).subscribe(quartoList => {
      this.quartos = quartoList as Quarto[];
    });
  }
}
