import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { map } from  'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LivreserviceService {


  url='http://localhost:8080/api/livre';


  constructor(
    private http : HttpClient)
     {

      }

     //-------------------------------------------------------Gestion livre livre --------------

    addLivre(formData:FormData){

      return this.http.post(this.url+"/ajouter/", formData, {responseType:"text"});
    }
    getAllLivre(){
      return this.http.get(this.url +"/lister");
    }
    deleteLivre(id:number){
        return this.http.put(this.url+"/disable/"+id,{responseType:'text'});
    }
    restoreLivre(id:any, userId:number){
      return this.http.put(this.url+"/restore/"+id,{responseType:'text'});
  }

    showLivre(id:any){
      return this.http.get(this.url +"/afficher"+ id);
    }
    updateLivre(id:number, data: any){
      return this.http.put(this.url+"/modifier/"+id, data);
    }


}
