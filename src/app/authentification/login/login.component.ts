import { AdminService } from './../../service/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginInfo:any;

  constructor(
    private service: AdminService,
    public toast: ToastrService, public router: Router
  ) { }

  ngOnInit(): void {
  }
  onLogin(form :NgForm){
    this.service.login(form.value["login"],form.value["password"]).subscribe((res)=>{
      if(res){

        console.log(res);
        this.loginInfo = res;
        let loginStatus = true
        //this.router.navigate(["/accueil"]);
        location.replace("/accueil");
        localStorage.setItem('loginInfo', JSON.stringify(this.loginInfo));
        localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
      }else{

            this.toast.error("Login ou mot de passe incorrect");
            this.router.navigate(["/login"])
            let loginStatus = false;
            localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
            console.log("login non connecter");
          
        } 
        
      }, 
      error=>{
        this.toast.error(error);
      }
      )
    }
  
}

