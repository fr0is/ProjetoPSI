import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";
import { Quarto } from 'src/quarto';
import { HotelService } from '../hotel.service';
import { User } from 'src/user';
import { UserService } from '../user.service';
import { Hotel } from 'src/hotel';
import { Morada } from 'src/morada';

@Component({
  selector: 'app-reserva-quarto',
  templateUrl: './reserva-quarto.component.html',
  styleUrls: ['./reserva-quarto.component.css','./paginaReserva.css','./paginaIdentificacao.css','./botaoReservar.css','./paginaDatas.css'],
})
export class ReservaQuartoComponent implements OnInit {

  quartos: Quarto[] = [];
  moradaId: any;
  moradaIdFinal: any;
  mudaPagina = false;
  erroDatas = false;
  errorMessage;
  moradas = [];
  cliente: User;
  updateForm: FormGroup;
  clienteUpdate: User = {
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
  morada: Morada ={
    _id: "",
    rua: "",
    codigoPostal: "",
    cidade: "",
    pais: "",
    userEmail: ""
  }
  hotel: Hotel;
  /**** Booleans de cada pagina ****/
  datasQuarto = true;
  dadosCliente = false;
  pagamento = false;
  final = false;
  criarM = false;
  foto = "";
  //Forms
  reservaCreate: FormGroup;
  datasQuartoForm: FormGroup;
  createMorada: FormGroup;
  //Dados Forms
  checkIn = localStorage.getItem('checkInR');
  checkOut = localStorage.getItem('checkOutR');
  quarto = localStorage.getItem('quartoR');
  selectedQuarto = localStorage.getItem('quartoR');
  constructor(
    private formBuilder: FormBuilder,
    private hotelService: HotelService,
    private userService: UserService
  ) { 
    this.datasQuartoForm = this.formBuilder.group({
      checkInInicial: this.formBuilder.control(this.checkIn),
      checkOutInicial: this.formBuilder.control(this.checkOut),
      quartoInicial: this.formBuilder.control(this.quarto)
    });
    this.createMorada = this.formBuilder.group({
      rua: this.formBuilder.control(""),
      codigoPostal: this.formBuilder.control(""),
      cidade: this.formBuilder.control(""),
      pais: this.formBuilder.control(""),
    })
  }


  ngOnInit(): void {
    this.showQuartos();
    this.getCliente();
    this.getHotel();
  }

  showQuartos() {
    this.hotelService.getHotelQuartos(sessionStorage.getItem("hotelAtual")).subscribe(quartoList => {
      this.quartos = quartoList as Quarto[];
      for (let i = 0; i < this.quartos.length; i++) {
        if(this.quartos[i].tipo === this.selectedQuarto){
          this.foto = this.quartos[i].foto;
        }
      }
    });
  }

  
  getHotel() {
    this.hotelService.getHotel(sessionStorage.getItem("hotelAtual")).subscribe(results => {
      this.hotel = results;
    })
  }
  
  mudaQuarto(quarto){
    this.selectedQuarto = quarto;
    for (let i = 0; i < this.quartos.length; i++) {
      if(this.quartos[i].tipo === this.selectedQuarto){
        this.foto = this.quartos[i].foto;
      }
    }
  }

  updateDataQD(updateDataDQ){
    if(!this.compareTwoDates()){
      this.erroDatas = true;
    }else{
    this.checkIn = updateDataDQ.checkInInicial;
    this.checkOut = updateDataDQ.checkOutInicial;
    this.quarto = updateDataDQ.quartoInicial;
    this.datasQuarto = false;
    this.dadosCliente = true;
    this.erroDatas = false;
    this.mudaPagina = true;
    }
  }

  pagamentoN(){
    this.dadosCliente = false;
    this.pagamento = true;
  }
  finalN(){
    this.pagamento = false;
    this.final = true;
    this.reservaCreate = this.formBuilder.group({
      metodoPagamento: this.formBuilder.control(""),
      morada: this.formBuilder.control(""),
      dataCheckIn: this.formBuilder.control(this.checkIn),
      dataCheckOut: this.formBuilder.control(this.checkOut),
      quarto: this.formBuilder.control(this.quarto),
    })
  }

  goBack(){
    if(this.datasQuarto){
      return;
    }
    if(this.dadosCliente){
      this.datasQuarto = true;
      this.dadosCliente = false;
    }else{
      if(this.pagamento){
        this.dadosCliente = true;
        this.pagamento = false;
      }else{
        this.pagamento = true;
        this.final = false;
      }
    }
  }

  createReserva(reservaData){
    
    /**** Apagar dados reserva *****/
    sessionStorage.removeItem('checkInR');
    sessionStorage.removeItem('checkOutR');
    sessionStorage.removeItem('quartoR');
    this.reservaCreate.reset();
    this.datasQuartoForm.reset();
  }

  compareTwoDates(){
    if(new Date(this.datasQuartoForm.controls['checkOutInicial'].value)<new Date(this.datasQuartoForm.controls['checkInInicial'].value)){
       return false;
    }else{
      return true;
    }
  }

  changeStateDateErro(){
    this.erroDatas = !this.erroDatas;
  }

  onItemChange(valor){
    this.moradaId = valor;
  }

  getCliente(){
    this.userService.getUser(localStorage.getItem('userAtual')).subscribe(user => {
      this.cliente = user[0];
      this.userService.getUserMoradas(this.cliente.email).subscribe(listMorada => {
        this.moradas = listMorada as [];
      })
      if(sessionStorage.getItem('indicativoReserva') === null){
        sessionStorage.setItem('indicativoReserva', '');
      }
      if(sessionStorage.getItem('numeroReserva') === null){
        sessionStorage.setItem('numeroReserva', '');
      }
      if(sessionStorage.getItem('nifReserva') === null){
        sessionStorage.setItem('nifReserva', '');
      }
      this.updateForm = this.formBuilder.group({
        nomeUpdate: this.formBuilder.control(sessionStorage.getItem('nomeReserva')),
        emailUpdate: this.formBuilder.control(sessionStorage.getItem('emailReserva')),
        indicativoUpdate: this.formBuilder.control(sessionStorage.getItem('indicativoReserva')),
        telefoneUpdate: this.formBuilder.control(sessionStorage.getItem('numeroReserva')),
        nifUpdate: this.formBuilder.control(sessionStorage.getItem('nifReserva')),
      })
    }); 
  }


  updateClienteReserva(updateData){
    console.log("iniciou update")
    //Update Form Data  
    sessionStorage.setItem('nomeReserva',updateData.nomeUpdate);
    sessionStorage.setItem('emailReserva',updateData.emailUpdate);
    sessionStorage.setItem('indicativoReserva',updateData.indicativoUpdate);
    sessionStorage.setItem('numeroReserva',updateData.telefoneUpdate);
    sessionStorage.setItem('nifReserva',updateData.nifUpdate);
    this.moradaIdFinal = this.moradaId;
    sessionStorage.setItem('moradaReserva',this.moradaIdFinal);
    //Data que nao muda
    this.pagamentoN();
  }

  criarMorada(){
    this.criarM = !this.criarM;
  }

  createM(moradaData){
    this.criarM = !this.criarM;
    this.morada.rua = moradaData.rua;
    this.morada.codigoPostal = moradaData.codigoPostal;
    this.morada.cidade = moradaData.cidade;
    this.morada.pais = moradaData.pais;
    this.morada.userEmail = sessionStorage.getItem('userAtual');
    this.createMorada.reset();
  
    this.userService.createMorada(this.morada).subscribe(result => {
      if(result.message === "success"){
        window.location.href = 'hoteisPSI/' + sessionStorage.getItem('hotelNome')+'/reservar';
      }else{
        alert("Ocorreu um erro a criar o cartao!");
      }
    });
  }
  
}