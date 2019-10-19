import { Component , Input, Output , EventEmitter  } from '@angular/core';

@Component({
    selector:'app-user',
    template: `
        <input type="text" (input)="OnUserInput($event)" [value]="name" >
        <p> {{name}} </p>`
})

export class UserComponent { 
    @Input() name;
    @Output() nameChanged = new EventEmitter<string>();

    OnUserInput(event) { 
        this.nameChanged.emit(event.target.value) 
        //this.name = event.target.value;
    }
}