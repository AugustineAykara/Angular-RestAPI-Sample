import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Users } from '../models/Users';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = 'http://localhost:8080/demo'

  constructor(private http: HttpClient) { }

  // GET REQ
  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl + "/all");
  }

  // PUT REQ
  updateName(user: Users): Observable<any> {
    const url = `${this.baseUrl}/${user.id}`;    
    return this.http.put(url, user, httpOptions);
  }

  // DEL REQ
  deleteUser(user: Users): Observable<any> {
    const url = `${this.baseUrl}/${user.id}`;
    return this.http.delete(url, httpOptions);
  }
}
