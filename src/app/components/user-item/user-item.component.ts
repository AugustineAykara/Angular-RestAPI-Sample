import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Users } from 'src/app/models/Users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user: Users;
  @Output() deleteUser : EventEmitter<Users> = new EventEmitter();

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  // dynamic class
  setClass() {
    let userStyle = {
      userText: true,
    }
    return userStyle;
  }

  // update Evenet
  onUpdate(newName : string, user : any) {    
    this.user.name = newName
    console.log("updated name : " + this.user.name);
    this.usersService.updateName(user).subscribe();
  }

  // delete Event
  onDelete(user) {;
    this.deleteUser.emit(user);
  }
}
