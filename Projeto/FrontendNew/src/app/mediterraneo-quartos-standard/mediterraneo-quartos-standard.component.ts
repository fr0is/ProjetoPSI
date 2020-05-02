import { Component, OnInit } from '@angular/core';

import { QuartoService } from './../quarto.service';
import { Quarto } from '../../quarto';

@Component({
  selector: 'app-mediterraneo-quartos-standard',
  templateUrl: './mediterraneo-quartos-standard.component.html',
  styleUrls: ['../../app/dvstandard/dvstandard.component.css']
})
export class MediterraneoQuartosStandardComponent implements OnInit {

  quartos: Quarto[] = [];

  constructor(private quartoService: QuartoService) { }

  ngOnInit(): void {
    this.showQuartos();
  }

  showQuartos() {
    this.quartoService.getQuartos().subscribe(quartoList => {
      this.quartos = quartoList as Quarto[];
    });
  }

}
