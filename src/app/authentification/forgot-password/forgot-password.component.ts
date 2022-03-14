import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    public matDialog:MatDialog,
  ) { }

  ngOnInit(): void {
  }
valider(){

  this.matDialog.closeAll();
  Swal.fire({
    position: 'center',
    icon: 'info',
    title: 'Nous avons envoyer un mail de réinitialisation sur votre compte email ',
    showConfirmButton: false,
    timer: 3000
  }
  )
}
}
