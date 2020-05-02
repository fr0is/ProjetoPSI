import { Component, OnInit } from '@angular/core';

import { QuartoService } from './../quarto.service';
import { Quarto } from '../../quarto';

@Component({
  selector: 'app-mar-quartos-servicos',
  templateUrl: './mar-quartos-servicos.component.html',
  styleUrls: ['../../app/dvquartos-servicos/dvquartos-servicos.component.css']
})
export class MarQuartosServicosComponent implements OnInit {

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
