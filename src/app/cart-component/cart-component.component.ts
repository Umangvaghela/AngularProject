import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {
 
  @Input() item = [];
  @Output() addItem = new EventEmitter<string>();

  newItem = "";
  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    this.addItem.emit(this.newItem);
  }

}
