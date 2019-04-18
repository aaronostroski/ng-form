import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {

  cadasterUsers: User[]; 

  constructor() {}

  ngOnInit() {

  }

  save(formValue){

    let values = []

    values.push(formValue);

    this.cadasterUsers = values;
  }

  delete(){

    this.cadasterUsers = [];

  }

}
