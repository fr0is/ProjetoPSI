import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-registo',
  templateUrl: './login-registo.component.html',
  styleUrls: ['./login-registo.component.css']
})
export class LoginRegistoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeForm(){
    document.querySelector('.cont').classList.toggle('s--signup');
  }

}
