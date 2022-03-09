import { LibrairyService } from './../service/librairy.service';
import { AdminService } from 'src/app/service/admin.service';
import { UtilisateurService } from './../service/utilisateur.service';
import { CategoryService } from 'src/app/service/category.service';
import { LivreserviceService } from 'src/app/service/livreservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  nombreEbook :any;
  nombreAudiobook:any;
  nombreMemoire:any;
  nombreArticle:any;
  nombreLibrairy:any;
  constructor(
    public livreService :LivreserviceService,
    public categoryService:CategoryService,
    public utilisateur: UtilisateurService,
    public admin: AdminService,
    public librairy :LibrairyService,
  ) { }

  ngOnInit(): void {

    //Methode for count total Ebook
    this.livreService.livreByFormat('Ebook').subscribe((data)=>{
      this.nombreEbook = data;
      this.nombreEbook = this.nombreEbook.length;
    })

    //Methode for count total Audio
      this.livreService.livreByFormat('AudioBook').subscribe((data)=>{
        this.nombreAudiobook = data;
        this.nombreAudiobook = this.nombreAudiobook.length;
  })

      //Methode for count total Article
      this.livreService.livreByFormat('Article').subscribe((data)=>{
        this.nombreArticle = data;
        this.nombreArticle = this.nombreArticle.length;
  })
        //Methode for count total Memoire
        this.livreService.livreByFormat('Memoire').subscribe((data)=>{
          this.nombreMemoire = data;
          this.nombreMemoire = this.nombreMemoire.length;
    })
      //Methode for count total Library
      this.librairy.getAllLibrairy().subscribe((data)=>{
        this.nombreLibrairy = data;
        this.nombreLibrairy = this.nombreLibrairy.length;
  })
  }
}
