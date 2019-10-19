import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GenrateCharacterComponent } from '../genrate-character/genrate-character.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[
        GenrateCharacterComponent
    ],
    imports:[ 
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {path:'', component:GenrateCharacterComponent}
        ])
    ]
})
export class genarateRouting{ }