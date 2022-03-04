import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { LibrairyService } from '../service/librairy.service';
import { LivreserviceService } from '../service/livreservice.service';
import { UtilisateurService } from '../service/utilisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-format',
  templateUrl: './format.component.html',
  styleUrls: ['./format.component.css']
})
export class FormatComponent implements OnInit {
  allItems :any;
  image: any;
  format:any;
  searchText:any;
  p: number = 1;
  constructor(
    public livreService :LivreserviceService,
    public categoryService:CategoryService,
    public utilisateur: UtilisateurService,
    public librairy :LibrairyService,
    public  route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getByFormat(this.route.snapshot.params['format']);
    this.image = this.livreService.img;
    this.format = this.route.snapshot.params['format'];

  }

getByFormat(format:any){
  //Methode for count total Ebook
  this.livreService.livreByFormat(format).subscribe((data)=>{
    this.allItems = data;
    console.log(this.allItems);
    
  })
}

delete(id: number) {
  Swal.fire({
    title: 'Etes vous sure?',
    text: 'Le fichier sera placé dans le corbeille !',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui, Supprimer!',
    cancelButtonText: 'Non, Ne pas supprimer ',
  }).then((result) => {
    if (result.isConfirmed) {
      this.livreService.deleteLivre(id).subscribe((res) => {
        this.getByFormat(this.route.snapshot.params['format']);
            });
    } else if (result.isDismissed) {
    }
  });
}

}