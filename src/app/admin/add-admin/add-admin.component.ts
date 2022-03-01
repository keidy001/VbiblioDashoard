import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { AdminService } from 'src/app/service/admin.service';

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

  ) { }

  ngOnInit(): void {

    this.adminservice.getAllAdmin().subscribe((response:any)=>{
      this.admins = response;
      this.admins.paginator =this.paginator;

    })
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


  submitForm(fg : FormGroup){

    // var obj: { [idAdmin: string]: any} = {};
     
    // obj['idAdmin'] = this.adminData.idAdmin; 
    // fg.value.admin = obj;
    
    console.log(fg.value)
    console.log(this.adminData)
    this.adminservice.addAdmin( fg.value).subscribe((data)=>{
     
        this.toast.success("Ajout effectuer avec succès ");
    })
}
}