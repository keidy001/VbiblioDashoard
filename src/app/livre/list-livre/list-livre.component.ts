import { UpdateLivreComponent } from './../update-livre/update-livre.component';
import { Router } from '@angular/router';
import { LivreserviceService } from './../../service/livreservice.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-list-livre',
  templateUrl: './list-livre.component.html',
  styleUrls: ['./list-livre.component.css'],
})
export class ListLivreComponent implements OnInit {
  allLivres: any;
  image: any;
  constructor(
    public livreService: LivreserviceService,
    public router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllLivre();
    this.image = this.livreService.img;
  }

  getAllLivre() {
    this.livreService.getAllLivre().subscribe((data) => {
      this.allLivres = data;
    });
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
          this.getAllLivre();
        });
      } else if (result.isDismissed) {
      }
    });
  }

  update(){
  
 
   

  }
}
