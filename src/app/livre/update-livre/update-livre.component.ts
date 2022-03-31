import { LibrairyService } from 'src/app/service/librairy.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/service/category.service';
import { LivreserviceService } from 'src/app/service/livreservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styleUrls: ['./update-livre.component.css']
})
export class UpdateLivreComponent implements OnInit {

        public      formulaire        :        FormGroup;
        public      imgfile           :        any = File;
        public      livrefile         :        any = File;
        public      image             :        any;
        public      contentLivre      :        any;
        public      allCategory       :        any;
        public      livre             :        any;
        public      submitted         :        boolean = false;
        public      allLibrairy       :        any;

  constructor (

        public      livreService      :   LivreserviceService,
        public      categoryService   :   CategoryService,
        public      route             :   ActivatedRoute,
        public      router            :   Router,
        public      toast             :   ToastrService,
        public      formBuilder       :   FormBuilder,
        public      LibrairyService   :   LibrairyService,

        ) { }

  ngOnInit(): void {

        this.getLivreById(this.route.snapshot.params['id']);
        this.getCategory();
        this.getLibrairy();

        this.image = this.livreService.img;
        this.contentLivre = this.livreService.contentLivre

        this.formulaire = this.formBuilder.group({

        titre: ['', Validators.required],
        auteur: ['', Validators.required],
        prix: ['', Validators.required],
        librairy: ['', [Validators.required]],
        domaine: ['', Validators.required],
        category: ['', Validators.required],
        format: ['', Validators.required],
        photo:['',Validators.required],
        livre:['',Validators.required],
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

    var obj: {
      [idCategory : string]: any} = {};
    obj['idCategory'] = fg.value.category;
    fg.value.category = obj;


    var lib: { [idLibrairy: string]: any} = {};
    lib['idLibrairy'] = fg.value.librairy;
    fg.value.librairy = lib;

    this.livreService.updateLivre(this.route.snapshot.params['id'], fg.value).subscribe(( )=>{


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
  this.LibrairyService.getAllLibrairy().subscribe((data)=>{
    this.allLibrairy = data;
    console.log(this.allLibrairy);

  })
}

getLivreById(id:number){
    this.livreService.getLivreById(id).subscribe((data)=>{
    this.livre = data
  })
}

  logOut(){
    localStorage.removeItem('isLogin');
    this.router.navigateByUrl('/');
}
}
