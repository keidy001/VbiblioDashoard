import { LibrairyService } from './../../service/librairy.service';
import { LivreserviceService } from './../../service/livreservice.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {
  formulaire: FormGroup;
  allCategory : any;
  public imgfile : any = File;
  public livrefile : any = File;
  submitted = false;
  alllibrairy:any;
  constructor(
    public livreService: LivreserviceService,
    public categoryService : CategoryService,
    public librairyService : LibrairyService,
    public  route: ActivatedRoute,
    public router : Router,
    public toast: ToastrService,
    public formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.getCategory();
    console.log('tes'+this.allCategory);
    this.formulaire = this.formBuilder.group({

      // photo: ['', Validators.required],
      // livre: ['', Validators.required],
      titre: ['', Validators.required],
      auteur: ['', Validators.required],
      prix: ['', Validators.required],
     domaine: ['', Validators.required],
      category: ['', Validators.required],
      format: ['', Validators.required],
      sommaire: ['', [Validators.required]],
      librairy: ['', [Validators.required]],
      description: ['', [Validators.required]],

  },);
  }

  get f() { return this.formulaire.controls; }


 imgSelect(event){
  const img = event.target.files[0];
 this.imgfile =img;
}
livreSelect(event){
  const livre = event.target.files[0];
 this.livrefile =livre;
}

  submitForm(fg : FormGroup){
    var obj: { [idCategory: string]: any} = {};
    obj['idCategory'] = fg.value.category;
    fg.value.category = obj;

    this.livreService.addLivre( fg.value, this.imgfile, this.livrefile ).subscribe((data)=>{
      console.log(data)
        data.titre=fg.value['titre'],
        data.auteur=fg.value['auteur'],
        data.description=fg.value['description'],
        data.sommaire=fg.value['sommaire'],
        data.prix=fg.value['prix'],
        data.domaine=fg.value['domaine'],
        data.category=fg.value['category'],
        data.format=fg.value['format'],
        data.format=fg.value['librairy'],
      console.log(data)
      this.livreService.updateLivre(data.idLivre, data).subscribe((data)=>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Ajout effectuer avec succès !',
          showConfirmButton: false,
          timer: 3000
        })
        this.router.navigateByUrl("/listlivres");
      })
    })
    // formData.append('livre',this.livrefile);

  }


  showToast(){
    this.toast.success("Ajout effectuer avec succes !!!");
  }
getCategory(){
  this.categoryService.getAllCategory().subscribe((data)=>{
    this.allCategory = data;
    console.log("ok"+data);
  })
};
getLibrairy(){
  this.librairyService.getAllLibrairy().subscribe((data)=>{
    this.alllibrairy = data;
    console.log("ok"+data);
  })
};

  logOut(){
    localStorage.removeItem('isLogin');
  this.router.navigateByUrl('/');
}

}
