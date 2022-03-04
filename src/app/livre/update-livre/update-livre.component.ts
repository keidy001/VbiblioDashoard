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

  formulaire: FormGroup;
  public imgfile : any = File;
  public livrefile : any = File;
  image:any;
  contentLivre:any;
  allCategory : any;
  livre :any;
  submitted = false;

  constructor(
    public livreService: LivreserviceService,
    public categoryService : CategoryService,
    public  route: ActivatedRoute,
    public router : Router,
    public toast: ToastrService,
    public formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.getLivreById(this.route.snapshot.params['id']);
    this.getCategory();
    this.image = this.livreService.img;
    this.contentLivre = this.livreService.contentLivre
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
    console.log(fg.value);
    
    this.livreService.updateLivre(this.route.snapshot.params['id'], fg.value).subscribe((data)=>{
      
 
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
