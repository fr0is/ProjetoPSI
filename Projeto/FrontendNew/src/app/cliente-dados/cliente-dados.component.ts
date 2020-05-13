import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/user';
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { HotelService } from '../hotel.service';
import { CartaoMBService } from '../cartao-mb.service';
import { Hotel } from 'src/hotel';
import { CartaoMB } from 'src/cartaoMB';

@Component({
  selector: 'app-cliente-dados',
  templateUrl: './cliente-dados.component.html',
  styleUrls: ['./cliente-dados.component.css', './cartoesMB.css', './deleteCreateCartao.css']
})
export class ClienteDadosComponent implements OnInit {

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
    morada: [],
    cartaoMB: [],
    reservas: []
  }
  hotel: Hotel;
  cartoes: any;
  createCartao: FormGroup;
  criar = false;
  apagar=false;
  link='hoteisPSI/' + sessionStorage.getItem('hotelNome') + '/cliente';

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private cartaoMBService: CartaoMBService,
    private hotelService: HotelService,
    private router: Router
  ) { 
    this.createCartao = this.formBuilder.group({
      numeroCartao1: this.formBuilder.control(""),
      numeroCartao2: this.formBuilder.control(""),
      numeroCartao3: this.formBuilder.control(""),
      numeroCartao4: this.formBuilder.control(""),
      dataCartao: this.formBuilder.control(""),
      nomeCartao: this.formBuilder.control(""),
      cvvCartao: this.formBuilder.control(""),
      dataCartaoAno: this.formBuilder.control(""),
      dataCartaoMes: this.formBuilder.control("")
    })
  }

  ngOnInit(): void {
    this.getCartoes();
    this.getUser();
    this.getHotel();
  }

  getCartoes(){
    this.cartaoMBService.getCartaoEmail(localStorage.getItem('userAtual')).subscribe(listCartao =>{
      this.cartoes = listCartao;
    });
  }

  getUser(){
    this.userService.getUser(localStorage.getItem('userAtual')).subscribe(user => {
      this.clienteAtual = user[0];
    });
  }

  getHotel() {
    this.hotelService.getHotel(sessionStorage.getItem("hotelAtual")).subscribe(results => {
      this.hotel = results;
    })
  }

  criarCartao(){
    this.criar = !this.criar;
  }

  cancelarCriarCartao(){
    window.location.href = 'hoteisPSI/' + sessionStorage.getItem('hotelNome')+'/cliente';
  }

  apagarCartao(cartao){
    this.cartaoMBService.apagarCartao(cartao).subscribe(result => {
      if(result.message === 'success'){
        this.apagar = true;
      }
    });
  }

  apagarCartaoFechar(){
    this.apagar = false;
  }

  deleteCard(){
    alert("apagado");
  }

  create(cartaoData){
    const nrCartao = cartaoData.numeroCartao1 + cartaoData.numeroCartao2 + cartaoData.numeroCartao3 + cartaoData.numeroCartao4;
    this.criar = !this.criar;
    this.cartaoMB.numero = nrCartao;
    this.cartaoMB.nome = cartaoData.nomeCartao;
    this.cartaoMB.prazoAno = cartaoData.dataCartaoAno;
    this.cartaoMB.prazoMes = cartaoData.dataCartaoMes;
    this.cartaoMB.cvv = cartaoData.cvvCartao;
    this.cartaoMB.userEmail = localStorage.getItem('userAtual');
    this.createCartao.reset();
  
    this.cartaoMBService.createCartao(this.cartaoMB).subscribe(result => {
      if(result.message === "success"){
        window.location.href = 'hoteisPSI/' + sessionStorage.getItem('hotelNome')+'/cliente';
      }else{
        alert("Ocorreu um erro a criar o cartao!");
      }
    });
  }
}
