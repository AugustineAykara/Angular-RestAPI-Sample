import { Component, OnInit, Input} from '@angular/core';
import { Users } from 'src/app/models/Users';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user: Users;

  constructor() { }

  ngOnInit(): void {
  }

  // dynamic class
  setClass() {
    let userStyle = {
      userText : true,
    }
    return userStyle;
  }

  // delete Event
  onDelete(user){
    console.log("delete user")
  }
}
