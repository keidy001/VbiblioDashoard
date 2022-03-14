import { ShowLivreComponent } from './../show-livre/show-livre.component';
import { UpdateLivreComponent } from './../update-livre/update-livre.component';
import { Router } from '@angular/router';
import { LivreserviceService } from './../../service/livreservice.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-livre',
  templateUrl: './list-livre.component.html',
  styleUrls: ['./list-livre.component.css'],
})
export class ListLivreComponent implements OnInit {
  @ViewChild('paginator') paginator! :MatPaginator;
  loading: boolean = false;
  displayedColumns: string[] = [ 'titre','auteur','prix','format','category.category'];
  dataSource : MatTableDataSource<any>;
  allLivres: any;
  image: any;
  totalRecords: number;
  constructor(
    public livreService: LivreserviceService,
    public router: Router,
    private dialog: MatDialog,
     
  ) {}

  ngOnInit(): void {
    this.getAllLivre();
    this.image = this.livreService.img;
  }

  getAllLivre() {
    this.livreService.getAllLivre().subscribe((data: any) => {
      this.allLivres = data;
      this.totalRecords = this.allLivres.length
      //this.allLivres.paginator =this.paginator;
      this.dataSource = new MatTableDataSource(data);
       this.dataSource.paginator =this.paginator;
    });
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
          this.getAllLivre();
        });
      } else if (result.isDismissed) {
      }
    });
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
  update(){




  }
}
