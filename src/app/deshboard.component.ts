import { Component } from '@angular/core';

@Component({
    selector:'app-deshboard',
    templateUrl:'./deshboard.component.html'
})

export class DeshboardComponent { 
    loadState='Loading';

    OnSwitchState() {
        this.loadState = 'Finished';
    }
}