import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-dvquartos',
  templateUrl: './dvquartos.component.html',
  styleUrls: ['./dvquartos.component.css']
})
export class DVQuartosComponent implements OnInit {
  
  valueMin;
  valueMax;
  
  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    step: 50,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          this.precoMuda(value);         
          return value + '€';
        case LabelType.High:
          this.precoMuda2(value);
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

  precoMuda(value){
    this.valueMin = value;
  }
  precoMuda2(value){
    this.valueMax = value;
  }



  constructor() { }

  ngOnInit(): void {
  }

}

