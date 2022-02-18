import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 
  url='http://localhost:8080/api/admin';


  constructor(
    private http : HttpClient)
     {
        this.http = http;
      }

      login(login :String,password : String){
        return this.http.get(this.url+"/login?login="+login+"&password="+password)

      }
    }