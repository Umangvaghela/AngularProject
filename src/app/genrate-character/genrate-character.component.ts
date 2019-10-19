import { Component, OnInit } from '@angular/core';
import { startWarServies } from '../star-wars.service';

@Component({
  selector: 'app-genrate-character',
  templateUrl: './genrate-character.component.html',
  styleUrls: ['./genrate-character.component.css']
})
export class GenrateCharacterComponent implements OnInit {

  StrwarService : startWarServies

  avalibleSides = [
    { display:'none', value:''},
    { display:'Light', value:'light'},
    { display:'Dark', value:'dark'},
  ]
  
  constructor(StrwarService : startWarServies ) { 
    this.StrwarService = StrwarService;
   }

  OnSubmit(Submithandle) {

    if(Submithandle.invalid) { 
      return;
    }
    this.StrwarService.addCharacter(Submithandle.value.name,Submithandle.value.side);
    
    //this.StrwarService.addCharacter({Submithandle.value.name,Submithandle.value.side });
  }
  ngOnInit() {
  }

}
