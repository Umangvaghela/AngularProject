import { Component, OnInit, Input } from '@angular/core';
import { startWarServies } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character;
  
  starnewSer: startWarServies;
  constructor( starnewSer: startWarServies ) { 
    this.starnewSer = starnewSer;
  }

  ngOnInit() {
  }

   onAssign(side) { 
    this.starnewSer.onSideChosen({ name:this.character.name , side:side })
  }
}
