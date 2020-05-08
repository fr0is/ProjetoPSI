import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/user';
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-cliente-dados',
  templateUrl: './cliente-dados.component.html',
  styleUrls: ['./cliente-dados.component.css']
})
export class ClienteDadosComponent implements OnInit {

  cliente: User;
  updateForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getCliente();
  }

  getCliente(){
    this.cliente = this.userService.getUserAtual();
  }

  updateCliente(updateData){}

}
