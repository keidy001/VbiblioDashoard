import { CategoryService } from 'src/app/service/category.service';
import { LivreserviceService } from './../service/livreservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corbeille',
  templateUrl: './corbeille.component.html',
  styleUrls: ['./corbeille.component.css']
})
export class CorbeilleComponent implements OnInit {
  livres: any;
  category: any;
  image : any;

  constructor(
    private livreService :LivreserviceService,
    private categoryService :CategoryService,

  ) { }

  ngOnInit(): void {
    this.image =this.livreService.img
    this.getLivre();
    console.log(this.livres)
  
    this.categoryService.getAllCategory().subscribe((data)=>{
      this.category = data
    })


  }
getLivre(){
  this.livreService.getAllLivre().subscribe((data)=>{
    this.livres = data
  });
}

  restore(id:number){
    this.livreService.restoreLivre(id).subscribe((res)=>{
      this.getLivre();
    })
  }
}
