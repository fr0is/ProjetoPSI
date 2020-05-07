import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-login-registo',
  templateUrl: './login-registo.component.html',
  styleUrls: ['./login-registo.component.css']
})
export class LoginRegistoComponent implements OnInit {

  screenWidth: number;

  constructor() {
      this.getScreenSize();
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

}
