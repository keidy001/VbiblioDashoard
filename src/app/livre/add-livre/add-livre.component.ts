import { LivreserviceService } from './../../service/livreservice.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/service/category.service';

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

  constructor(
    public livreService: LivreserviceService,
    public categoryService : CategoryService,
    public  route: ActivatedRoute,
    public router : Router,
    public toast: ToastrService,
    public formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.getCategory();
    console.log('tes'+this.allCategory);
    this.formulaire = this.formBuilder.group({

      photo: ['', Validators.required],
      livre: ['', Validators.required],
      titre: ['', Validators.required],
      auteur: ['', Validators.required],
      prix: ['', Validators.required],
      domaine: ['', Validators.required],
      category: ['', Validators.required],
      format: ['', Validators.required],
      somaire: ['', [Validators.required]],
      description: ['', [Validators.required]],

  },);
  }

  get f() { return this.formulaire.controls; }


 imgSelect(event){
  const img = event.target.files[0];
 this.imgfile =img;
}
// livreSelect(event){
//   const livre = event.target.files[0];
//   this.imgfile.get('livre').setValue(livre);
//   console.log(this.imgfile);
// }

  submitForm(fg : FormGroup){

    var obj: { [idCategory: string]: any} = {};
    obj['idCategory'] = fg.value.category;
    fg.value.category = obj;
    const data = fg.value;
    const formData = new FormData();
    formData.append('data',JSON.stringify(data) )
    formData.append('photo',this.imgfile);
    console.log("test de data"+formData.get('photo'));
    this.livreService.addLivre(formData).subscribe((data)=>{
      console.log(data)
    })
    // formData.append('livre',this.livrefile);

    this.submitted = true;
    console.log(this.formulaire)
    // stop here if form is invalid
    if (this.formulaire.invalid) {
        return;
    }



   console.log(JSON.stringify(fg.value));

   this.livreService.addLivre(fg.value).subscribe(

     (data)=>{
      this.toast.success("Ajout effectuer avec succès ");
      this.router.navigateByUrl("/listlivres");

     }

   )

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

  logOut(){
    localStorage.removeItem('isLogin');
  this.router.navigateByUrl('/');
}
}
