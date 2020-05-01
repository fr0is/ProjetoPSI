import { Component, OnInit } from '@angular/core';

import { QuartoService } from './../quarto.service';
import { Quarto } from '../../quarto';

@Component({
  selector: 'app-dvquartos-servicos',
  templateUrl: './dvquartos-servicos.component.html',
  styleUrls: ['./dvquartos-servicos.component.css']
})
export class DvquartosServicosComponent implements OnInit {

  constructor(private quartoService: QuartoService) { }

  quartos: Quarto[] = [];

  ngOnInit(): void {
    this.showQuartos();
  }

  showQuartos() {
    this.quartoService.getQuartos().subscribe(quartoList => {
      this.quartos = quartoList as Quarto[];
    });
  }

}
