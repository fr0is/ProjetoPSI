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
import { Quarto } from 'src/quarto';

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
    emailReserva: "",
    indicativoReserva: "",
    nifReserva: "",
    nomeReserva: "",
    telefoneReserva: "",
    quarto: null,
    morada: null,
    metodoDePagamento: null,
    checkIn: null,
    checkOut: null,
    preco: 0
  }
  quartos: Quarto[] = [];
  reservas: Reserva[] = [];
  cartoes: CartaoMB[] = [];
  down = [];
  precoFiltro: Number = 500;
  hotel: Hotel;
  moradas: Morada[] = [];
  filtrar: FormGroup;
  link='hoteisPSI/' + sessionStorage.getItem('hotelNome') + '/cliente';

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private hotelService: HotelService,
    private cartaoMbService: CartaoMBService
  ) { 
    this.filtrar = this.formBuilder.group({
      precoFiltro: this.formBuilder.control(500),
    });
  }

  ngOnInit(): void {
    this.getReservas();
  }

  updatePrecoFiltro(formData){
    this.precoFiltro = formData.precoFiltro;
  }

  getReservas(){
    this.userService.getUserReservas(localStorage.getItem('userAtual')).subscribe(listReservas => {
      this.reservas = listReservas as Reserva[];
      console.log(this.reservas);
      for(let i = 0; i < this.reservas.length; i++){
        this.hotelService.getHotelQuarto(this.reservas[i].quarto.quarto).subscribe(results => {
          this.quartos[i] = results;
          this.down[i] = false;
        });
        this.userService.getMorada(this.reservas[i].morada._id).subscribe(morada => {
          this.moradas[i] = morada;
        });
        this.cartaoMbService.getCartao(this.reservas[i].metodoDePagamento._id).subscribe(cartao => {
          this.cartoes[i] = cartao;
        });
      }
    });
  }

  format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, '$& ');
  }

  showDropdown(i){
    this.down[i] = !this.down[i];
  }

  delete(reserva){
    alert("delete");
  }

  edit(reserva){
    alert("edit");
  }

}
