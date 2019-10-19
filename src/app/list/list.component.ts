import { Component, OnInit, OnDestroy } from '@angular/core';
import { startWarServies } from '../star-wars.service';
import { ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit , OnDestroy {
 characters = [];
 // use services to get data
 strwarservice: startWarServies;
 // find which router is activate
 ActivetedRouter:ActivatedRoute;
 // define loadparam to get and set parameter
 loadparam = 'all';
 subscription;

  constructor( ActivetedRouter:ActivatedRoute , strwarservice: startWarServies ) { 
    this.ActivetedRouter = ActivetedRouter;
    this.strwarservice = strwarservice;
    }

  ngOnInit( ) {   
    
    this.ActivetedRouter.params.subscribe( 
      (params)=> { 
        //add side parameter in loadparam object
        this.loadparam = params.side;
        this.characters = this.strwarservice.getCharacters(params.side)
      });
      // EventEmitter
      this.subscription =  this.strwarservice.activechosen.subscribe(
        ()=> {
          this.characters = this.strwarservice.getCharacters(this.loadparam)
      })
  }
  // ngDestroy for destroy the subscriiption to remove the data form memory
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
