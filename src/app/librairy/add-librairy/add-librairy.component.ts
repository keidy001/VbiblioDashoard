import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibrairyService } from 'src/app/service/librairy.service';
import { ListLibrairyComponent } from '../list-librairy/list-librairy.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-librairy',
  templateUrl: './add-librairy.component.html',
  styleUrls: ['./add-librairy.component.css']
})
export class AddLibrairyComponent implements OnInit {
  formulaire:FormGroup;
  librairie : any
  constructor(
    public formBuilder: FormBuilder, 
    private servicelibrairie: LibrairyService, 
    private router: Router,
    private matDialogRef:MatDialogRef<ListLibrairyComponent>,

  ) { }

  ngOnInit(): void {
    // this. listLibrairie()
    
    this.formulaire = this.formBuilder.group({ 
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.required,Validators.email],
      // livre: ['', Validators.required],
      // admin: ['', Validators.required],
      // image: ['', Validators.required],

    },);
  }

  SubmitForm(form:FormGroup){
   
   this.servicelibrairie.addLibrairy(form.value).subscribe((data)=>{

  this.onCloseDialog();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ajout effectuer avec succès !',
      showConfirmButton: false,
      timer: 3000
    })
    location.replace("/listlibrary");
  })

  }
onCloseDialog(){
  this.matDialogRef.close();
}
}
