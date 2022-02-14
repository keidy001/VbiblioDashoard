import { LivreserviceService } from './../../service/livreservice.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {
  adminData: any;
  formulaire: FormGroup;
  user: any;
  id: any;
  chaine : string;
  loginData: any;
  userId:any;
  userngForm: NgForm;
  
  submitted = false;

  constructor(
    public service: LivreserviceService,
    public  route: ActivatedRoute,
    public router : Router,
    public toast: ToastrService,
    public formBuilder: FormBuilder) { }

  ngOnInit(): void {


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




  submitForm(fg : FormGroup){
    this.submitted = true;
    console.log(this.formulaire)
    // stop here if form is invalid
    if (this.formulaire.invalid) {
        return;
    }
    var obj: { [id: string]: any} = {};
   // obj.id = fg.value.profile; 
    fg.value.profile = obj;
     fg.value.userId =this.loginData.id
     
   console.log(JSON.stringify(fg.value));

   this.service.addLivre(fg.value).subscribe(
     
     (data)=>{


      // if(data==="email"){
      //   console.log("incorrect email");
      //   this.toast.error("Cet email existe déja ");

      // }else if (data==="telephone"){
      //   console.log("incorrect telephone");
      //   this.toast.error("Ce téléphone existe déja ");

      // }else if (data==="login"){
      //   console.log("incorrect login");
      //   this.toast.error("Ce login existe déja ");
      // }

      // else{
      //   this.router.navigateByUrl("/listAdmins");
      //   console.log("helle ++++++++++++", data);
      // }

     }

   )
    
  }
  showToast(){
    this.toast.success("Ajout effectuer avec succes !!!");
  }
  logOut(){
    localStorage.removeItem('isLogin');
  this.router.navigateByUrl('/');
}
}