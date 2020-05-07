import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";

import { User } from 'src/user';

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

  constructor(
    private formBuilder: FormBuilder
  ) {
      this.getScreenSize();
      this.registoForm = this.formBuilder.group({
        nomeRegisto: this.formBuilder.control(""),
        emailRegisto: this.formBuilder.control(""),
        passRegisto: this.formBuilder.control("")
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

  onSubmit(registoData) {
    this.user.nome = registoData.title;
    this.user.email = registoData.summary;
    this.user.password = registoData.isbn;
    this.registoForm.reset();


      /*this.userService.createuser(this.user).subscribe(result => {
        this.errorMessage = result.message;
      });
    }*/
  }
}


