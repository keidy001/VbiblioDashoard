import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
loginStatus : any;
loginInfo :any;
  constructor(
    private router :Router
  ) {}
  ngOnInit() {
     if(localStorage["loginInfo"]){
      this.loginInfo=JSON.parse(localStorage["loginInfo"]);
      console.log(this.loginInfo)
    }

    if(localStorage["loginStatus"]){
      this.loginStatus=JSON.parse(localStorage["loginStatus"]);
      console.log(this.loginStatus)
    }  
  }
logOut(){
  localStorage.removeItem('loginStatus');
  localStorage.removeItem('loginInfo');
  location.replace("/");
}
}
