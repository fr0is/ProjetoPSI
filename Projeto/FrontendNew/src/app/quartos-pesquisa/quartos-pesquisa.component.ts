import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

import { Quarto } from '../../quarto';
import { HotelService } from '../hotel.service';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from "@angular/forms";
import { QuartoService } from '../quarto.service';
import { QuartoInstance } from 'src/quartoInstance';


@Component({
  selector: 'app-quartos-pesquisa',
  templateUrl: './quartos-pesquisa.component.html',
  styleUrls: ['./quartos-pesquisa.component.css','./filtroReserva.css']
})
export class QuartosPesquisaComponent implements OnInit {
  quartos: Quarto[] = [];
  quartoInstances = [[]];
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
  datasValidasToday = true;
  checkIn = new Date();
  checkOut = new Date();

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
    private quartoService: QuartoService
    ) {
    this.reservaForm = this.formBuilder.group({
      checkInReserva: this.formBuilder.control(this.checkIn),
      checkOutReserva: this.formBuilder.control(this.checkOut),
      quartoReserva: this.formBuilder.control("")
    })
   }

  ngOnInit(): void {
   this.showQuartos();
  }

  showQuartos() {
    this.hotelService.getHotelQuartos(sessionStorage.getItem("hotelAtual")).subscribe(quartoList => {
      this.quartos = quartoList as Quarto[];
      for(let i = 0; i < this.quartos.length; i++){
        this.quartoService.getInstances(this.quartos[i]._id).subscribe(listReservas => {
            console.log(listReservas);
        });
      }
      console.log(this.quartoInstances);
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
    }else{
      this.datasValidas = true;
    }
  }

  compareDates(date1, date2){
    if(new Date(date1)<=new Date(date2)){
      this.datasValidas = false;
      return false;
   }else{
     this.datasValidas = true;
     return true;
   }
  }

  compareDatesToToday(date){
    if(new Date(date) < new Date()){
      this.datasValidasToday = false;
      return false;
   }else{
     this.datasValidasToday = true;
     return true;
   }
  }

  mudaCheckOut(newDate){
    if(this.compareDatesToToday(newDate)){
      if(this.compareDates(newDate,this.checkIn)){
        this.checkOut = newDate;
        this.verficarQuartosDisponiveis();
      }
    }
  }

  mudaCheckIn(newDate){
    if(this.compareDatesToToday(newDate)){
      if(this.compareDates(this.checkOut,newDate)){
        this.checkIn = newDate;
        this.verficarQuartosDisponiveis();
      }
    }
  }

  verficarQuartosDisponiveis(){
    for(let i = 0; i < this.quartoInstances.length; i++){
      console.log(this.quartoInstances);
    }
  }

  changeStateDateErro(){
    this.datasValidas = !this.datasValidas;
  }

  changeStateDateErroToday(){
    this.datasValidasToday = !this.datasValidasToday;
  }
}
