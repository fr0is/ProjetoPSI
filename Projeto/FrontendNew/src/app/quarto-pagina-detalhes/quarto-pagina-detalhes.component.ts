import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../hotel.service';
import { Quarto } from 'src/quarto';

@Component({
  selector: 'app-quarto-pagina-detalhes',
  templateUrl: './quarto-pagina-detalhes.component.html',
  styleUrls: ['./quarto-pagina-detalhes.component.css']
})
export class QuartoPaginaDetalhesComponent implements OnInit {

  quarto: Quarto = {
    _id: "",
    servicos:[],
    tipo: "",
    precoAlta: 0,
    precoBaixa: 0,
    hotel:"",
    foto:"",
  };

  constructor(    
    private route: ActivatedRoute,
    private hotelService: HotelService
    ) { }

  ngOnInit(): void {
    this.showQuarto();
  }

  showQuarto() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.hotelService.getHotelQuarto(id).subscribe(results => {
        this.quarto = results;
      });
    }else{
      alert("Quarto não encontrado");
    }
  }

}
