import { Component, OnInit } from '@angular/core';
import "lodash" ;
import { startWarServies } from './star-wars.service';

declare var _: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'udemyangularassignment1';
  number = 0;
  rootName = "UmangVaghela";
  rootItem = ['Apple', 'Banana' , 'Graps'];
  
  strwarservice: startWarServies;
  
  constructor ( strwarservice: startWarServies ) {
    this.strwarservice = strwarservice;
  }
  ngOnInit() {
    this.strwarservice.featcharacter();
  }
  OnNameChanged(newName) {
    this.rootName = newName;
  }
  OnItemwasadded(NewItem){
    this.rootItem.push(NewItem);
  }

  IncreaseNumber() {
    this.number = _.random(1, 10);
  }

}
