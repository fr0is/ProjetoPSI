import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Hotel } from 'src/hotel';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  hoteis: Hotel[] = [];

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.showHoteis();
    this.generateRandomNumber(length);
  }

  showHoteis() {
    this.hotelService.getHoteis().subscribe(hoteisList => {
      this.hoteis = hoteisList as Hotel[];
    });
  }

  setHotelNome(nome){
    this.hotelService.setHotelNome(nome);
  }

  generateRandomNumber(length){
    return Math.floor(Math.random() * length); 
  }

}
