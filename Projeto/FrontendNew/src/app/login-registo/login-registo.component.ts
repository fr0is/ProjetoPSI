import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";

import { User } from 'src/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-registo',
  templateUrl: './login-registo.component.html',
  styleUrls: ['./login-registo.component.css']
})
export class LoginRegistoComponent implements OnInit {

  screenWidth: number;
  registoForm: FormGroup;
  user: User = {
    _id: "",
    nome: "",
    email: "",
    password: "",
    reservas: []
  };
  errorMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
      this.getScreenSize();
      this.registoForm = this.formBuilder.group({
        nomeRegisto: this.formBuilder.control(""),
        emailRegisto: this.formBuilder.control(""),
        passwordRegisto: this.formBuilder.control("")
      })
  }

  ngOnInit(){};

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.screenWidth = window.innerWidth;
        console.log(this.screenWidth);
  }

  changeForm(){
    document.querySelector('.cont').classList.toggle('s--signup');
  }

  create(registoData) {
    this.user.nome = registoData.nomeRegisto;
    this.user.email = registoData.emailRegisto;
    this.user.password = registoData.passwordRegisto;
    this.registoForm.reset();

      if(this.userService.getUser(this.user.email)){
       alert(this.user.email+' já associado a uma conta')
      }else{ 
      this.userService.createUser(this.user).subscribe(result => {
        this.errorMessage = result.message;
      });
    }
  }
}
