import { Component, OnInit } from '@angular/core';
import { Truck } from './truck.model'

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html'
})
export class TruckComponent implements OnInit {

  cadasterTrucks : Truck[];
  
  constructor() { }

  ngOnInit() {
  }

  save(formValue){

    let values = []

    console.log(formValue);

    values.push(formValue);

    this.cadasterTrucks = values;

  }

  delete(){

    this.cadasterTrucks = [];

  }

}



