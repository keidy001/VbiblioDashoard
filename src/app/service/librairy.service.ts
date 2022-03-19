import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrairyService {

 //Local url
 url='http://localhost:8080/api/librairy';
 img='http://localhost:8080/api/librairy/photo/';


 //Remote url

 url1 = 'https://virtualbiblio.herokuapp.com/api/librairy'
  constructor(
    private http : HttpClient)
     { }


  //-------------------------------------------------------Gestion librairy --------------

addLibrairy(data:any,img:File):Observable<any>{

  const forms: FormData = new FormData();
  forms.append("file", img)
  forms.append("data", data)
    return this.http.post(this.url+"/ajouter", forms);
  }
  getAllLibrairy(){
    return this.http.get(this.url +"/lister");
  }
  deleteLibrairy(id:number){
      return this.http.put(this.url+"/disable/"+id,{responseType:'text'});
  }
  restoreLibrairy(id:any){
    return this.http.put(this.url+"/restore/"+id,{responseType:'text'});
}

  showLibrairy(id:any){
    return this.http.get(this.url +"/afficher/"+id);
  }
  updateLibrairy(id:number, data: any){
    return this.http.put(this.url+"/modifier/"+id, data);
  }
}
