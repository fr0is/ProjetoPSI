import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:3000/catalog/';
  usersUrl = this.baseUrl + 'users/';
  createUrl = this.usersUrl + 'create';

  constructor(private http: HttpClient) { }

  createUser(user: User) {
    return this.http.post<{ message: string }>(this.createUrl, user);
  }

  getUser(email){
    return this.http.get(this.usersUrl + email);
  }
}