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
  }

  ngOnInit(): void {
    this.getCliente();
  }


    getCliente(){
      this.userService.getUser(localStorage.getItem('userAtual')).subscribe(user => {
        this.cliente = user[0];
        this.updateForm = this.formBuilder.group({
          nomeUpdate: this.formBuilder.control(this.cliente.nome)
        })
      }); 
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
