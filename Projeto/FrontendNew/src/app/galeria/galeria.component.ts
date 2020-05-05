import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../hotel.service';
import { Hotel } from 'src/hotel';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
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
    servicos: [],
    fotos: [],
    fotoPath: ""
  };


constructor(
  private route: ActivatedRoute,
  private hotelService: HotelService
) { }

ngOnInit(): void {
  this.getHotel();
}

getHotel() {
  const id = this.hotelService.getHotelId();
  if (id) {
    this.hotelService.getHotel(id).subscribe(results => {
      this.hotel = results;
    });
  }
}
}