import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cliente-moradas-lista',
  templateUrl: './cliente-moradas-lista.component.html',
  styleUrls: ['./cliente-moradas-lista.component.css']
})
export class ClienteMoradasListaComponent implements OnInit {

  moradas: any;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getMoradasUser();
  }

  getMoradasUser(){
    this.userService.getUserMoradas(localStorage.getItem('userAtual')).subscribe(listMorada =>{
      this.moradas = listMorada;
    });
  }

  apagarMorada(morada){
    this.userService.apagarMorada(morada).subscribe(result => {
      alert(result.message);
    });
  }

}
