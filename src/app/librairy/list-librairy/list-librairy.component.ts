import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { LibrairyService } from 'src/app/service/librairy.service';

import { AddLibrairyComponent } from '../add-librairy/add-librairy.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-librairy',
  templateUrl: './list-librairy.component.html',
  styleUrls: ['./list-librairy.component.css']
})
export class ListLibrairyComponent implements OnInit {
  [x: string]: any;
  allLibrairie: any;
  img:any;
  constructor(
     private librairieservice: LibrairyService,
    private dialog:MatDialog

  ) { }

  ngOnInit(): void {
    this.getlibrarie();
    this.img = this.librairieservice.img;

  }
  getlibrarie() {
    this.librairieservice.getAllLibrairy().subscribe((data) => {
      this.allLibrairie = data;
    });
  }
  supprimer(id:number){
    Swal.fire({
      title: 'Etes vous sure?',
      text: 'Le fichier sera placé dans le corbeille !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Supprimer!',
      confirmButtonColor:'#6A9BFF',
      cancelButtonText: 'Non, Ne pas supprimer ',
    })
    .then((result) => {
      if (result.isConfirmed) {
        this.librairieservice.deleteLibrairy(id).subscribe((data)=>{
          this.getlibrarie();
        });
      } else if (result.isDismissed) {
      }
    });
  

  

  }

  add(){
    this.dialog.open(AddLibrairyComponent,{
      width:"50%",  
      
    })
  }
}


