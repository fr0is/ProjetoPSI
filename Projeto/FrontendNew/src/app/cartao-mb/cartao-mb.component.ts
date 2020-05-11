import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CartaoMBService } from '../cartao-mb.service';
import { CartaoMB } from 'src/cartaoMB';
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";
import { User } from 'src/user';

@Component({
  selector: 'app-cartao-mb',
  templateUrl: './cartao-mb.component.html',
  styleUrls: ['./cartao-mb.component.css']
})
export class CartaoMBComponent implements OnInit {

  cartaoMB: CartaoMB ={
    _id: "",
    numero: "",
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
  cartoes: any;
  createCartao: FormGroup;
  nrCartaoArray= [0,1,2,3,4,5,6,7,8,9,10,11];

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private cartaoMBService: CartaoMBService
  ) { 
    this.createCartao = this.formBuilder.group({
      numeroCartao: this.formBuilder.control(""),
      dataCartao: this.formBuilder.control(""),
      cvvCartao: this.formBuilder.control(""),
      dataCartaoAno: this.formBuilder.control(""),
      dataCartaoMes: this.formBuilder.control("")
    })
  }

  ngOnInit(): void {
    this.getCartoes();
    this.getUser();
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

  create(cartaoData){
    this.cartaoMB.numero = cartaoData.numeroCartao;
    this.cartaoMB.prazoAno = cartaoData.dataCartaoAno;
    this.cartaoMB.prazoMes = cartaoData.dataCartaoMes;
    this.cartaoMB.cvv = cartaoData.cvvCartao;
    this.cartaoMB.userEmail = localStorage.getItem('userAtual');
    this.createCartao.reset();
  
    this.cartaoMBService.createCartao(this.cartaoMB).subscribe(result => {
         alert(result.message);
    });
  }
}
