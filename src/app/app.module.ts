import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { DeshboardComponent } from './deshboard.component'
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component'
import { startWarServies } from './star-wars.service';
import { AppRoutingModule } from './app-routing.module';
import { LogService } from './log.service';

import { HeaderComponentComponent } from './header-component/header-component.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
 


@NgModule({
  declarations: [
    AppComponent,
    DeshboardComponent,
    UserComponent,
    UserDetailComponent,
    CartComponentComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    HeaderComponentComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [startWarServies,LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
