import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 //Local url
  url='http://localhost:8080/api/admin';

  //Remote url
  url1 = 'https://virtualbiblio.herokuapp.com/api/admin';

  constructor(
    private http : HttpClient)
     {
        this.http = http;
      }

      login(login :String,password : String){
        return this.http.get(this.url+"/login?login="+login+"&password="+password)

      }

      getAllAdmin(){
        return this.http.get(this.url+"/byStatus/0");
      }


     adminById(id:number){
      return this.http.get(this.url+"/afficher/"+id)
     }

      UpdateAdmin(id:number , data:any){
        return this.http.put(this.url+"/modifier/"+id, data);
      }


      addAdmin(data :any){
        return this.http.post(this.url+"/ajouter", data ,{responseType:'text'})
      }
      deleteAdmin(id:number){
        return this.http.put(this.url+"/disable/"+id,{responseType:'text'});
    }
    restoreAdmin(id:any, ){
      return this.http.put(this.url+"/restore/"+id,{responseType:'text'});
  }
    }
