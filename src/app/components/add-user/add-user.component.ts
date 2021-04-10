import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Users } from 'src/app/models/Users';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Output() addUser : EventEmitter<Users> = new EventEmitter();

  id : number;
  name: string;
  email: string;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    
    const user = {
      id : this.id,
      name : this.name,
      email : this.email
    }
    
    this.addUser.emit(user);
  }
}
