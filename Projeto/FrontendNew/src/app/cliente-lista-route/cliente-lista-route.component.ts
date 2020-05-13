import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-lista-route',
  templateUrl: './cliente-lista-route.component.html',
  styleUrls: ['./cliente-lista-route.component.css']
})
export class ClienteListaRouteComponent implements OnInit {

  hotelNome;

  constructor() { }

  ngOnInit(): void {
    this.getHotelAtual();
  }

  getHotelAtual(){
    this.hotelNome = sessionStorage.getItem('hotelNome');
  }

  logout(){
    localStorage.removeItem('userAtual');
    localStorage.removeItem('cliente');
    window.location.href = 'hoteisPSI/' + sessionStorage.getItem('hotelNome');
  }  

}
