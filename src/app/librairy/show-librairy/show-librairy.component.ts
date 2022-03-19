import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LivreserviceService } from 'src/app/service/livreservice.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ShowLivreComponent } from 'src/app/livre/show-livre/show-livre.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-librairy',
  templateUrl: './show-librairy.component.html',
  styleUrls: ['./show-librairy.component.css']
})
export class ShowLibrairyComponent implements OnInit {
allLivres : any;

  constructor(
    private livreService : LivreserviceService,
    private route:ActivatedRoute,
    private dialog :MatDialog,
  ) { }

  ngOnInit(): void {
    this.livreByLIbrary(this.route.snapshot.params['idLibrairy'])
    console.log(this.route.snapshot.params['idLibrairy']);

  }



  async detailLivre(id:number){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    this.dialog.open(ShowLivreComponent,{
      data:id,
      width:'50%',
      maxWidth:'50%',


    })

    }
    delete(id: number) {
      Swal.fire({
        title: 'Etes vous sure?',
        text: 'Le fichier sera placé dans le corbeille !',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, Supprimer!',
        confirmButtonColor:'#6A9BFF',
        cancelButtonText: 'Non, Ne pas supprimer ',
      }).then((result) => {
        if (result.isConfirmed) {
          this.livreService.deleteLivre(id).subscribe((res) => {
            this.livreByLIbrary(this.route.snapshot.params['idLibrairy']);
          });
        } else if (result.isDismissed) {
        }
      });
    }
  livreByLIbrary(id:any){
    this.livreService.livreByLibraryNotDeleted(id,false).subscribe((result)=>{
      this.allLivres = result;
    })
  }
}
