import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers() {
    return [
      {
        id: 1,
        name: 'Augustine',
        email: 'augustine@gmail.com'
      },
      {
        id: 2,
        name: 'Tony',
        email: 'tony@gmail.com'
      },
      {
        id: 3,
        name: 'Don',
        email: 'don@gmail.com'
      },
    ]
  }

}
