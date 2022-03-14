import { MatDialog } from '@angular/material/dialog';
import {Md5} from 'ts-md5/dist/md5';
import { AdminService } from './../../service/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginInfo:any;

  constructor(
    private service: AdminService,
    public toast: ToastrService, 
    public router: Router,
    public matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  onLogin(form :NgForm){
   // const md5 =new Md5;
   // form.value.password = md5.appendStr(form.value.password);
    this.service.login(form.value["login"],form.value["password"]).subscribe((res)=>{
      if(res){

        console.log(res);
        this.loginInfo = res;
        let loginStatus = true
        location.replace("/accueil");
        localStorage.setItem('loginInfo', JSON.stringify(this.loginInfo));
        localStorage.setItem('userRole', JSON.stringify(this.loginInfo.role));
        localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
      }else{

        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Login ou mot de passe incorrect',
          showConfirmButton: false,
          timer: 3000
        })
        this.router.navigate(["/login"]);
        }

      },
      (err) => {  Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Oops! imposible d\'acceder au serveur ',
        showConfirmButton: false,
        timer: 3000}
      )
    })
}

async forgotPsd(){
    const modal = this.matDialog.open(ForgotPasswordComponent,{
      width:'40%',
      
    })
}
}
