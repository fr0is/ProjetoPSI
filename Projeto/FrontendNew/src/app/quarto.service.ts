import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quarto } from 'src/quarto';

@Injectable({
  providedIn: 'root'
})
export class QuartoService {

  baseUrl = 'http://appserver.alunos.di.fc.ul.pt:3071/catalog/';
  quartosUrl = this.baseUrl + 'quartos';

  constructor(private http: HttpClient) { }

  getQuartos() {
    return this.http.get(this.quartosUrl);
  }

}