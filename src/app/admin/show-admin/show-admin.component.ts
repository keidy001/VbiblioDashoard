import { AdminService } from 'src/app/service/admin.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-admin',
  templateUrl: './show-admin.component.html',
  styleUrls: ['./show-admin.component.css']
})
export class ShowAdminComponent implements OnInit {
  admin:any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public idAdmin: any,
    private adminservice:AdminService,
  ) { }

  ngOnInit(): void {
    this.getAdminById()
  }
  getAdminById(){
    this.adminservice.adminById(this.idAdmin).subscribe((data)=>{
      this.admin=data;

     })
  }
}
