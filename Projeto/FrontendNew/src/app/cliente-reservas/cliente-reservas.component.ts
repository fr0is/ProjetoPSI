import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/user';
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { HotelService } from '../hotel.service';
import { CartaoMBService } from '../cartao-mb.service';
import { Hotel } from 'src/hotel';
import { CartaoMB } from 'src/cartaoMB';
import { Morada } from 'src/morada';
import { Reserva } from 'src/reserva';

@Component({
  selector: 'app-cliente-reservas',
  templateUrl: './cliente-reservas.component.html',
  styleUrls: ['./cliente-reservas.component.css']
})
export class ClienteReservasComponent implements OnInit {

  cartaoMB: CartaoMB ={
    _id: "",
    numero: "",
    nome: "",
    prazoAno: 0,
    prazoMes: 0,
    cvv: "",
    userEmail: "",
  }
  morada: Morada ={
    _id: "",
    rua: "",
    codigoPostal: "",
    cidade: "",
    pais: "",
    userEmail: ""
  }
  clienteAtual: User = {
    _id: "",
    nome: "",
    email: "",
    password: "",
    indicativo: "",
    telefone: "",
    nif: "",
    morada: [],
    cartaoMB: [],
    reservas: []
  }
  reserva: Reserva = {
    _id: "",
    userEmail: "",
    quarto: "",
    morada: "",
    metodoDePagamento: "",
    checkIn: null,
    checkOut: null
  }
  hotel: Hotel;
  moradas: any;
  cartoes: any;
  createReserva: FormGroup;
  link='hoteisPSI/' + sessionStorage.getItem('hotelNome') + '/cliente';

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) { 
    this.createReserva = this.formBuilder.group({
      quarto: this.formBuilder.control(""),
      morada: this.formBuilder.control(""),
      metodoDePagamento: this.formBuilder.control(""),
      checkIn: this.formBuilder.control(""),
      checkOut: this.formBuilder.control("")
    });
  }

  ngOnInit(): void {
  }

  create(reservaData){
    this.reserva.userEmail = localStorage.getItem('userAtual');
    this.reserva.quarto = reservaData.quarto;
    this.reserva.morada = reservaData.morada;
    this.reserva.metodoDePagamento = reservaData.metodoDePagamento;
    this.reserva.checkIn = reservaData.checkIn;
    this.reserva.checkOut = reservaData.checkOut;
    this.createReserva.reset();
  
    this.userService.createReserva(this.reserva).subscribe(result => {
        alert(result.message);
    });
  }

}
