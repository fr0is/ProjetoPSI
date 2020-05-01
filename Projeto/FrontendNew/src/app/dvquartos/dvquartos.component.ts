import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

import { QuartoService } from './../quarto.service';
import { Quarto } from '../../quarto';

@Component({
  selector: 'app-dvquartos',
  templateUrl: './dvquartos.component.html',
  styleUrls: ['./dvquartos.component.css']
})
export class DVQuartosComponent implements OnInit {
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

  constructor(private quartoService: QuartoService) { }

  ngOnInit(): void {
    this.showQuartos();
  }

  showQuartos() {
    this.quartoService.getQuartos().subscribe(quartoList => {
      this.quartos = quartoList as Quarto[];
    });
  }
}
