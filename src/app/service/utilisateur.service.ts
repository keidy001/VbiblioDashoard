import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

 //Local url
 url='http://localhost:8080/api/utilisateur';

 //Remote url
 url1 = 'https://virtualbiblio.herokuapp.com/api/utilisateur';

 constructor(
   private http : HttpClient)
    {
       this.http = http;
     }


     getAllUtilisateur(){
       return this.http.get(this.url+"/byStatus/0");
     }


     utilisateurById(id:number){
     return this.http.get(this.url+"/afficher/"+id)
    }
    
     deleteAdmin(id:number){
       return this.http.put(this.url+"/disable/"+id,{responseType:'text'});
   }
   restoreAdmin(id:any, ){
     return this.http.put(this.url+"/restore/"+id,{responseType:'text'});
 }
   }
