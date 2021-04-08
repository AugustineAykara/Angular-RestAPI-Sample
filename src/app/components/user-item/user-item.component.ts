import { Component, OnInit, Input } from '@angular/core';
import { Users } from 'src/app/models/Users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user: Users;

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
    console.log("update user " + newName);
    this.user.name = newName
    user = this.usersService.updateName(user).subscribe();
  }

  // delete Event
  onDelete(user) {
    console.log("delete user")
  }
}
