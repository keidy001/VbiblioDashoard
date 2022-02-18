import { CategoryService } from './../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  formulaire: FormGroup;
  allCategory : any;
  public imgfile : any = File;
  public livrefile : any = File;
  submitted = false;

  constructor(
    public categoryService : CategoryService,
    public  route: ActivatedRoute,
    public router : Router,
    public toast: ToastrService,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.formulaire = this.formBuilder.group({
      category: ['', Validators.required],
      description: ['', Validators.required],
  },);
  }
  submitForm(fg : FormGroup){

    this.categoryService.addCategory( fg.value).subscribe((data)=>{
      console.log(data)
        this.toast.success("Ajout effectuer avec succès ");
        this.router.navigateByUrl("/category");
    })
    // formData.append('livre',this.livrefile);

  }

}
