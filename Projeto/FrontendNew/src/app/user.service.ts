import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/user';
import { Morada } from 'src/morada';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //appserver
  //baseUrl = 'http://appserver.alunos.di.fc.ul.pt:3071/catalog/';
  //locahost
  baseUrl = 'http://localhost:3071/catalog/';
  usersUrl = this.baseUrl + 'users/';
  createUrl = this.usersUrl + 'create';
  updateUrl = this.usersUrl + 'update';
  moradaUrl = this.baseUrl + 'morada/';

  user: User;

  constructor(private http: HttpClient) { }

  createUser(user: User) {
    return this.http.post<{ message: string }>(this.createUrl, user);
  }

  getUser(email){
    const url = this.usersUrl + email;
    return this.http.get<User>(url);
  }

  updateUser(user) {
    return this.http.post<{message: string}>(this.updateUrl, user);
  }

  createMorada(morada: Morada) {
    const createUrl = this.moradaUrl + 'create';
    return this.http.post<{ message: string }>(createUrl, morada);
  }

  getUserMoradas(email){
    const url = this.moradaUrl + email;
    return this.http.get(url);
  }

  apagarMorada(morada: Morada){
    const url = this.moradaUrl + 'delete'
    return this.http.post<{message: string}>(url, morada);
  }

}