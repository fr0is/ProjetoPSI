import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";
import { Quarto } from 'src/quarto';
import { HotelService } from '../hotel.service';
import { User } from 'src/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reserva-quarto',
  templateUrl: './reserva-quarto.component.html',
  styleUrls: ['./reserva-quarto.component.css','./paginaReserva.css','./botaoReservar.css','./paginaDatas.css'],
})
export class ReservaQuartoComponent implements OnInit {

  quartos: Quarto[] = [];
  mudaPagina = false;
  erroDatas = false;
  errorMessage;
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
  /**** Booleans de cada pagina ****/
  datasQuarto = true;
  dadosCliente = false;
  pagamento = false;
  final = false;
  foto = "";
  //Forms
  reservaCreate: FormGroup;
  datasQuartoForm: FormGroup
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
    })
  }

  ngOnInit(): void {
    this.showQuartos();
    this.getCliente();
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
    localStorage.removeItem('checkInR');
    localStorage.removeItem('checkOutR');
    localStorage.removeItem('quartoR');
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

  
  getCliente(){
    this.userService.getUser(localStorage.getItem('userAtual')).subscribe(user => {
      this.cliente = user[0];
      this.updateForm = this.formBuilder.group({
        nomeUpdate: this.formBuilder.control(this.cliente.nome),
        emailUpdate: this.formBuilder.control(this.cliente.email),
        indicativoUpdate: this.formBuilder.control(this.cliente.indicativo),
        telefoneUpdate: this.formBuilder.control(this.cliente.telefone),
        passwordUpdate: this.formBuilder.control(this.cliente.password),
        nifUpdate: this.formBuilder.control(this.cliente.nif),
      })
    }); 
  }


  updateCliente(updateData){
    console.log("iniciou update")
    //Update Form Data  
    this.clienteUpdate.nome = updateData.nomeUpdate;
    this.clienteUpdate.email = updateData.emailUpdate;
    this.clienteUpdate.indicativo = updateData.indicativoUpdate;
    this.clienteUpdate.telefone = updateData.telefoneUpdate;
    this.clienteUpdate.password = updateData.passwordUpdate;
    this.clienteUpdate.nif = updateData.nifUpdate;
    //Data que nao muda
    this.clienteUpdate._id = this.cliente._id;
    this.pagamentoN();
  }
  
}