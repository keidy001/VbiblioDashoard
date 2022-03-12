import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';
import { ShowAdminComponent } from '../show-admin/show-admin.component';
import { UpdateAdminComponent } from '../update-admin/update-admin.component';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {

 
  @ViewChild('paginator') paginator! :MatPaginator;
  searchText:any;
  p: number = 1;
  adminData:any;
  toast: any;
  admins:any;
  constructor(
    private adminservice:AdminService,
    private dialog:MatDialog,

  ) { }

  ngOnInit(): void {

   this.listAdmin();
    this.adminData =JSON.parse(localStorage['loginInfo']);
  }

listAdmin(){
  this.adminservice.getAllAdmin().subscribe((response:any)=>{
    this.admins = response;
    this.admins.paginator =this.paginator;

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
      this.adminservice.deleteAdmin(id).subscribe((res) => {
        this.listAdmin();
      });
    } else if (result.isDismissed) {
    }
  });
}
show(id:number){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  this.dialog.open(ShowAdminComponent,{
    data:id
  })
}
update(id:number){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  this.dialog.open(UpdateAdminComponent,{
    data:id,
    width:"50%"
      
    
  }
    )

}

}