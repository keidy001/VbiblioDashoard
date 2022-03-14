import { ShowUtilisateurComponent } from './../show-utilisateur/show-utilisateur.component';
import { UtilisateurService } from './../../service/utilisateur.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.css']
})
export class ListUtilisateurComponent implements OnInit {

  
  @ViewChild('paginator') paginator! :MatPaginator;
  searchText:any;
  p: number = 1;
  adminData:any;
  toast: any;
  utilisateurs:any;
  constructor(
    private utilisateurservice:UtilisateurService,
    private dialog:MatDialog,

  ) { }

  ngOnInit(): void {

   this.listUtilisateur();
    this.adminData =JSON.parse(localStorage['loginInfo']);
  }

  listUtilisateur(){
  this.utilisateurservice.getAllUtilisateur().subscribe((response:any)=>{
    this.utilisateurs = response;

  })

}

desactive(id: number) {
  
  
  Swal.fire({
    title: 'Etes vous sure?',
    text: 'Le compte de cet utilisateur sera désactivé!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Continuer',
    cancelButtonText: 'Annuler',
  }).then((result) => {
    if (result.isConfirmed) {
      this.utilisateurservice.deleteAdmin(id).subscribe((res) => {
        this.listUtilisateur();
      });
    } else if (result.isDismissed) {
    }
  });
}
show(id:number){
  console.log('userId'+id);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  this.dialog.open(ShowUtilisateurComponent,{
    data:id
  })
}
disable(id:any){

}

}
