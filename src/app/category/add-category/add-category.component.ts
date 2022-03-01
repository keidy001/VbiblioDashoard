import { MatPaginator } from '@angular/material/paginator';
import { CategoryService } from './../../service/category.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {



  
@ViewChild('paginator') paginator! :MatPaginator;
  
  displayedColumns: string[] = ['category', 'description'];
  dataSource : MatTableDataSource<any>;
  formulaire: FormGroup;
  allCategory : any;
  public imgfile : any = File;
  public livrefile : any = File;
  submitted = false;
  category :any;
  adminData :any;
  constructor(
    public categoryService : CategoryService,
    public  route: ActivatedRoute,
    public router : Router,
    public toast: ToastrService,
    public formBuilder: FormBuilder
  ) { }
    
  ngOnInit(): void {
    this.adminData =JSON.parse(localStorage['loginInfo']);

  
    this.getCategory();
    
    this.formulaire = this.formBuilder.group({
      category: ['', Validators.required],
      description: [''],
  },);
  }

  submitForm(fg : FormGroup){

    // var obj: { [idAdmin: string]: any} = {};
     
    // obj['idAdmin'] = this.adminData.idAdmin; 
    // fg.value.admin = obj;
    
    console.log(fg.value)
    console.log(this.adminData)
    this.categoryService.addCategory( fg.value).subscribe((data)=>{
     
        this.toast.success("Ajout effectuer avec succès ");
        this.getCategory();
    })
    
    
  }
  
  getCategory(){
    this.categoryService.getAllCategory().subscribe((data:any )=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator =this.paginator;
    });
   
  }

  delete(id:number){
    this.categoryService.deleteCategory(id).subscribe((res)=>{
      this.getCategory();
    })
  }
}
