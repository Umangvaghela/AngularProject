import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { startWarServies } from '../star-wars.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;
  savedChanges: boolean = false;
  constructor(private _startWarServies: startWarServies, private _route: Router) { }
  ngOnInit() {
  }
  setUser(formData){ 
    this.dataLoading = true;
    this.querySubscription = this._startWarServies.setUser(formData).subscribe((res) => {
      if (res["errorCode"] > 0) {
          this.error = false;
          this.errorMessage = "";
          this.dataLoading = false;
          this.savedChanges = true;
      } else {
          this.error = true;
          this.errorMessage =res["errorMessage"];
          this.dataLoading = false;
      }
  },
      (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
      },
      () => {
          this.dataLoading = false;
      });
}
ngOnDestroy(){
  if (this.querySubscription) {
    this.querySubscription.unsubscribe();
}
}
}