import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

import { Quarto } from '../../quarto';
import { HotelService } from '../hotel.service';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from "@angular/forms";
import { invalid } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-quartos-pesquisa',
  templateUrl: './quartos-pesquisa.component.html',
  styleUrls: ['./quartos-pesquisa.component.css','./filtroReserva.css']
})
export class QuartosPesquisaComponent implements OnInit {
  quartos: Quarto[] = [];
  reservaForm: FormGroup;
  datasValidas = true;
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

  constructor(
    private hotelService: HotelService,
    private formBuilder: FormBuilder,
    ) {
    this.reservaForm = this.formBuilder.group({
      checkInReserva: this.formBuilder.control(new Date()),
      checkOutReserva: this.formBuilder.control(new Date()),
      quartoReserva: this.formBuilder.control("")
    })
   }

  ngOnInit(): void {
   this.showQuartos();
  }

  showQuartos() {
    this.hotelService.getHotelQuartos(sessionStorage.getItem("hotelAtual")).subscribe(quartoList => {
      this.quartos = quartoList as Quarto[];
    });
  }

  reservar(reservaData){
    this.compareTwoDates();
    if(this.datasValidas){
      localStorage.setItem('checkInR',(reservaData.checkInReserva));
      localStorage.setItem('checkOutR',(reservaData.checkOutReserva));
      localStorage.setItem('quartoR',(reservaData.quartoReserva));
      this.reservaForm.reset();
      window.location.href = 'hoteisPSI/' + sessionStorage.getItem('hotelNome') + '/reservar';
    }else{
     alert("teste");
    }
  }

  compareTwoDates(){
    if(new Date(this.reservaForm.controls['checkOutReserva'].value)<new Date(this.reservaForm.controls['checkInReserva'].value)){
       this.datasValidas = false;
       this.reservaForm.controls['checkOutReserva']
    }else{
      this.datasValidas = true;
    }
  }

}
