import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/user';
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-dados',
  templateUrl: './cliente-dados.component.html',
  styleUrls: ['./cliente-dados.component.css']
})
export class ClienteDadosComponent implements OnInit {

  cliente: User;
  updateForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.updateForm = this.formBuilder.group({
      nomeUpdate: this.formBuilder.control(""),
      emailUpdate: this.formBuilder.control(""),
      telemovelUpdate: this.formBuilder.control("")
    })
  }

  ngOnInit(): void {
    this.getCliente();
  }

  getCliente(){
    this.userService.getUser(localStorage.getItem('userAtual')).subscribe(user => {
      this.getNewCliente(user[0]);
    }); 
  }

  getNewCliente(user){
    this.cliente.nome = user[0].nome;
    this.cliente.email = user[0].email;
    this.cliente._id = user[0]._id;
  }

  updateCliente(updateData){
    console.log("update");
  }
  
  logout(){
    localStorage.removeItem('userAtual');
    localStorage.removeItem('cliente');
    window.location.href = 'hoteisPSI/' + sessionStorage.getItem('hotelNome');
  }

}
