import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { map } from  'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LivreserviceService {


  //Local url
  url='http://localhost:8080/api/livre';
  img='http://localhost:8080/api/livre/photo/';
  contentLivre='http://localhost:8080/api/livre/livre/';

  //Remote url On heroku
  url1='https://virtualbiblio.herokuapp.com/api/livre';
  img1='https://virtualbiblio.herokuapp.com/api/livre/photo/';
  contentLivre1='https://virtualbiblio.herokuapp.com/api/livre/livre/';

  constructor(
    private http : HttpClient)
     {
        this.http = http;
      }

     //-------------------------------------------------------Gestion livre livre --------------

    addLivre(data:any, imgfile:File,livrefile:File ):Observable<any>{

      const forms: FormData = new FormData();
      forms.append("file", imgfile)
      forms.append("pdf", livrefile)
      forms.append("data", data)

      return this.http.post(this.url+"/ajouter/",forms);

    }
    getAllLivre(){
      return this.http.get(this.url +"/byStatus/0");
    }
    getDeletedLivre(){
      return this.http.get(this.url +"/byStatus/1");
    }
    deleteLivre(id:number){
        return this.http.put(this.url+"/disable/"+id,{responseType:'text'});
    }
    restoreLivre(id:any, ){
      return this.http.put(this.url+"/restore/"+id,{responseType:'text'});
  }

    showLivre(id:any){
      return this.http.get(this.url +"/afficher"+ id);
    }
    updateLivre(id:number, data: any){
      return this.http.put(this.url+"/modifier/"+id, data);
    }

    getLivreById(id:number){
     return this.http.get(this.url +"/afficher/"+id);
    }
    livreByFormat(format :String){
      return this.http.get(this.url+"/livrebyformat/"+format)
    }

    livreByFormatNotDeleted(format:string, state: boolean){
      return this.http.get(this.url+"/formatNotDeleleted/"+format+"/"+state)
    }
    livreByLibraryNotDeleted(library:any, state:boolean){
    return this.http.get(this.url+"/livreByLibrairy/"+library+"/"+state)
    }

}
