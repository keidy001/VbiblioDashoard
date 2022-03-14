import { AddAdminComponent } from './../add-admin/add-admin.component';
import { ActivatedRoute } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/service/admin.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import {  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  
  adminData:any;
  formulaire: FormGroup;
  admin: any;
  constructor(
    private adminservice:AdminService,
    private toast:ToastrService,
    private route:ActivatedRoute,
    public formBuilder: FormBuilder,
    public matDialogRef:MatDialogRef<AddAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public idAdmin: any
  ) { }

  ngOnInit(): void {

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
     this.getAdminById();
    console.log(this.idAdmin);
    
  }

   getAdminById(){
    this.adminservice.adminById(this.idAdmin).subscribe((data)=>{
      this.admin=data;
      
     })
  }


  update(fg : FormGroup){
    console.log(fg.value);
    
    this.adminservice.UpdateAdmin(this.idAdmin, fg.value).subscribe((data)=>{
     
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Modifier effectuer avec succès !',
        showConfirmButton: false,
        timer: 3000
      })
    })
    this.onClose() 
  }
  onClose(){
    this.matDialogRef.close();
  }
}
