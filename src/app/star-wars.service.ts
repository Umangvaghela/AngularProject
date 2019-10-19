import { Injectable } from '@angular/core';
import { LogService } from "./log.service";
import { Subject } from 'rxjs';
import { Http,Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()

/**
 * Service file to get Charecter and Set Charecter Value
 * 
 *
 */
export class startWarServies {
    characters = [
        { name: 'Luke Skywalker', side: '' },
        { name: 'Rahul Vaghela', side: '' }
      ];
      
      private logservice:LogService;
      http:Http;
      private httpOptions: any;
      activechosen = new Subject<void>();

      constructor(  logservice:LogService , http:Http ) {
            this.logservice = logservice;
            this.http = http;
            let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
            this.httpOptions = {
              headers: new HttpHeaders({'Content-Type': 'application/json','token': token}),
              observe: 'events'
          };
      }

      setUser(formData){ 
      console.log(formData);  
      let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
      //this.httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token, observe: 'events' }) };
      return this.http.post("http://127.0.0.1:8081/", formData, this.httpOptions);
      }

      featcharacter() {
        this.http.get('https://swapi.co/api/people')
          .pipe(map((response: Response) => { 
            const data = response.json();
            const extraCharacter  = data.results;
            const char = extraCharacter.map((char) => {
              return { name: char.name, side:''}
            })
            return char;
          }))
          .subscribe((data) => { 
            console.log(data);
            this.characters = data;
            this.activechosen.next();
          })
        }

/**
 * Function For GetCharacter by Chosenlist
 * chosenlist : string
 * 
 * @returns char
 *      
 */      
    getCharacters( chosenList ) {
        if (chosenList === 'all') {
          return this.characters.slice();
        }
        return this.characters.filter((char) => {
          return char.side === chosenList;
        })
    }

    onSideChosen(charInfo) {
        const pos = this.characters.findIndex((char) => {
          return char.name === charInfo.name;
        })
        this.characters[pos].side = charInfo.side;
        this.activechosen.next();
        this.logservice.writelog('NEW Name :'+ charInfo.name + ' : and New Side :' + charInfo.side + '' );
    }

    addCharacter(name,side) {
      const newChar = {name:name , side:side}
      this.characters.push(newChar);
    }
    
    
}