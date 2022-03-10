import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


 //Local url
 url1='http://localhost:8080/api/category';

 //Remote url
 url = 'https://virtualbiblio.herokuapp.com/api/category'
  constructor(
    private http : HttpClient)
     { }


  //-------------------------------------------------------Gestion category --------------

addCategory(data:any){

    return this.http.post(this.url+"/ajouter/", data, {responseType:"text"});
  }
  getAllCategory(){
    return this.http.get(this.url +"/lister");
  }
  deleteCategory(id:number){
      return this.http.put(this.url+"/disable/"+id,{responseType:'text'});
  }
  restoreCategory(id:any){
    return this.http.put(this.url+"/restore/"+id,{responseType:'text'});
}

  showCategory(id:any){
    return this.http.get(this.url +"/afficher"+ id);
  }
  updateCategory(id:number, data: any){
    return this.http.put(this.url+"/modifier/"+id, data);
  }
}
