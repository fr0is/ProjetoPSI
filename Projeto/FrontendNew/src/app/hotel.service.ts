import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from 'src/hotel';
import { Quarto } from 'src/quarto';

@Injectable({
  providedIn: 'root'
})

export class HotelService {

  baseUrl = 'http://localhost:3000/catalog/';
  hoteisUrl = this.baseUrl + 'hoteis/';
  hotelUrl = this.baseUrl + 'hoteis/';

  constructor(private http: HttpClient) { }

  getHoteis() {
    return this.http.get(this.hoteisUrl);
  }

  getHotel(id: string) {
    const url = this.hotelUrl + id;
    return this.http.get<Hotel>(url);
  }

  getHotelQuartos(id: string) {
    const url = this.hotelUrl + id +"/quartos";
    return this.http.get<Quarto>(url);
  }
}