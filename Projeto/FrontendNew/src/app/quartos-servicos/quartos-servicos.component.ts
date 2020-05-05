import { Component, OnInit } from '@angular/core';

import { Quarto } from '../../quarto';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-quartos-servicos',
  templateUrl: './quartos-servicos.component.html',
  styleUrls: ['./quartos-servicos.component.css']
})
export class QuartosServicosComponent implements OnInit {
  quartos: Quarto[] = [];

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
   this.showQuartos();
  }

  hotelId=this.hotelService.getHotelId();

  showQuartos() {
    this.hotelService.getHotelQuartos(this.hotelService.getHotelId()).subscribe(quartoList => {
      this.quartos = quartoList as Quarto[];
    });
  }

}