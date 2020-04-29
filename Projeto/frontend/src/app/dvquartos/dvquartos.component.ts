import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-dvquartos',
  templateUrl: './dvquartos.component.html',
  styleUrls: ['./dvquartos.component.css']
})
export class DVQuartosComponent implements OnInit {
  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    step: 50,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Preço Mínimo:</b> €' + value;
        case LabelType.High:
          return '<b>Preço Máximo:</b> €' + value;
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

  constructor() { }

  ngOnInit(): void {
  }

}
