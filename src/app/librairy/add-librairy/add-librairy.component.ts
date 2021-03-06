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
  librairie : any;
  imgfile :File;
  img :any;
  submitted = false;
  constructor(
    public formBuilder: FormBuilder,
    private servicelibrairie: LibrairyService,
    private router: Router,
    private matDialogRef:MatDialogRef<ListLibrairyComponent>,

  ) { }

  ngOnInit(): void {
    // this. listLibrairie()
    this.formulaire = this.formBuilder.group({
      photo: ['', Validators.required],
       nom: ['', Validators.required],
       adresse: ['', Validators.required],
       telephone: ['', [ Validators.required, Validators.minLength(8) ]],
       email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    },);
  }

  get f() { return this.formulaire.controls; }
 imgSelect(event){
  const img = event.target.files[0];
 this.imgfile =img;
}


  SubmitForm(form:FormGroup){

    if (this.formulaire.invalid) {
      return ;
  }
  else{
   this.servicelibrairie.addLibrairy(form.value, this.imgfile).subscribe((data)=>{
    data.nom=form.value['nom'],
    data.adresse=form.value['adresse'],
    data.telephone=form.value['telephone'],
    data.email=form.value['email'],
  console.log(data)
this.servicelibrairie.updateLibrairy(data.idLibrairy, data).subscribe((res)=>{



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
})
  }}
onCloseDialog(){
  this.matDialogRef.close();
}
}
