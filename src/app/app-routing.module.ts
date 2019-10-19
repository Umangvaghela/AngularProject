import { NgModule } from "@angular/core";
import {RouterModule} from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { SignupComponent } from './signup/signup.component';

const routes = [
    {path: 'characters' , component : TabsComponent, children : [
      { path:'', redirectTo:'all' , pathMatch:'full' },
      {path:':side', component:ListComponent }
    ]},
    {path:'newcharacter', loadChildren:'./genrate-character/genarate-routing.module#genarateRouting'},
   // {path:'**' , redirectTo:'/characters'},
    { path: 'signup', component: SignupComponent },
  ];

@NgModule({ 
    imports:[
        RouterModule.forRoot(routes),
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule { 

}