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

  hoteis: Hotel[] = [];

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService
    ) {}

  ngOnInit(): void {
    this.showHoteis();
  }

  hotelId = this.hotelService.getHotelId;

  showHoteis() {
    this.hotelService.getHoteis().subscribe(hoteisList => {
      this.hoteis = hoteisList as Hotel[];
    });
  }

getHotel() {
  const id = this.route.snapshot.paramMap.get("idHotel");
    this.hotelService.getHotel(id).subscribe(results => {
      this.hotel = results;
  })
}
}

