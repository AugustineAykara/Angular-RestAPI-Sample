import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/Users';
import {UsersService} from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:Users[];

  constructor(private usersServices: UsersService) { }

  ngOnInit(): void {
    this.usersServices.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
