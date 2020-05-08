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
  loginForm: FormGroup;
  userR: User = {
    _id: "",
    nome: "",
    email: "",
    password: "",
    reservas: []
  };
  errorMessage = "";

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
      this.loginForm = this.formBuilder.group({
        emailLogin: this.formBuilder.control(""),
        passwordLogin: this.formBuilder.control("")
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
    this.userR.nome = registoData.nomeRegisto;
    this.userR.email = registoData.emailRegisto;
    this.userR.password = registoData.passwordRegisto;
    this.registoForm.reset();
  
    this.userService.getUser(this.userR.email).subscribe(user => {
      if(!user[0]){
        this.userService.createUser(this.userR).subscribe(result => {
          this.errorMessage = result.message;
        });
      }else{
        alert("email em uso");
      }
    });
  }



  login(login){
   /* this.user.email = login.emailLogin;
    this.user.password = login.passwordLogin;
    console.log(this.userService.getUser(this.user.email));
    console.log(this.user.email);
    if(!this.userService.getUser(this.user.email)){
      alert("Login Inválido");
    }else{
      if(this.userService.getUser(this.user.email) !== login.passwordLogin){
        alert("Password inválida");
        this.loginForm.reset();
      }else{
        alert("yey"); 
        this.userService.setUserAtual(this.user);
        this.loginForm.reset();
      }
    }*/
  } 
}