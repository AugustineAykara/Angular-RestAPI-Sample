import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/Users';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:Users[];

  constructor() { }

  ngOnInit(): void {
    this.users = [
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
