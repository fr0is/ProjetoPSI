import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/user';

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

  user: User;

  constructor(private http: HttpClient) { }

  setUserAtual(user:User){
    this.user = user;
  }

  getUserAtual(){
    return this.user;
  }

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
}