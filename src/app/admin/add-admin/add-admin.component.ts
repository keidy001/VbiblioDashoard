import { ShowAdminComponent } from './../show-admin/show-admin.component';
import { UpdateAdminComponent } from './../update-admin/update-admin.component';
import { MatDialog ,MatDialogConfig  } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  @ViewChild('paginator') paginator! :MatPaginator;
  searchText:any;
  p: number = 1;
  formulaire: FormGroup;
  adminData:any;
  toast: any;
  admins:any;
  constructor(
    public formBuilder: FormBuilder,
    private adminservice:AdminService,
    private dialog:MatDialog,

  ) { }

  ngOnInit(): void {

   this.listAdmin();
    this.adminData =JSON.parse(localStorage['loginInfo']);

    this.formulaire = this.formBuilder.group({ 
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
      role: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', Validators.required],

    },);

    


  }

listAdmin(){
  this.adminservice.getAllAdmin().subscribe((response:any)=>{
    this.admins = response;
    this.admins.paginator =this.paginator;

  })

}

  submitForm(fg : FormGroup){
    const md5 = new Md5();
    fg.value.password = md5.appendStr(fg.value.password).end();
    // var obj: { [idAdmin: string]: any} = {};
     
    // obj['idAdmin'] = this.adminData.idAdmin; 
    // fg.value.admin = obj;
    
    console.log(fg.value)
    console.log(this.adminData)
    this.adminservice.addAdmin( fg.value).subscribe((data)=>{
     
        this.toast.success("Ajout effectuer avec succès ");
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