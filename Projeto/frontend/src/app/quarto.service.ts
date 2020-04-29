import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quarto } from 'src/quarto';

@Injectable({
  providedIn: 'root'
})
export class QuartoService {

  baseUrl = 'http://localhost:3000/catalog/';
  quartosUrl = this.baseUrl + 'quartos/';
  constructor(private http: HttpClient) { }

  getAuthors() {
    return this.http.get(this.quartosUrl);
  }

}
