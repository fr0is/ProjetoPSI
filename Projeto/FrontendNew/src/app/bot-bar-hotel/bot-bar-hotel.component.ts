import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Hotel } from 'src/hotel';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-bot-bar-hotel',
  templateUrl: './bot-bar-hotel.component.html',
  styleUrls: ['./bot-bar-hotel.component.css']
})
export class BotBarHotelComponent implements OnInit {

  hotel: Hotel = {
    _id: "",
    nome: "",
    descricao: [],
    local:  "",
    zona:  "",
    codigoPostal: "",
    pais: "",
    latitude: "",
    longitude: "",
    codigoRegiao: "",
    telefone: "",
    email: "",
    servicos: []
  };

constructor(
  private route: ActivatedRoute,
  private hotelService: HotelService
) { }

ngOnInit(): void {
  this.getHotel();
}

getHotel() {
  const id = this.route.snapshot.paramMap.get("id");
  if (id) {
    this.hotelService.getHotel(id).subscribe(results => {
      this.hotel = results;
    });
  }else{
    alert("Hotel não encontrado");
  }
}
}
