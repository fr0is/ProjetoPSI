import { Component, OnInit } from '@angular/core';

import { QuartoService } from './../quarto.service';
import { Quarto } from '../../quarto';

@Component({
  selector: 'app-dvsuite',
  templateUrl: './dvsuite.component.html',
  styleUrls: ['../../app/dvstandard/dvstandard.component.css']
})
export class DvsuiteComponent implements OnInit {

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
