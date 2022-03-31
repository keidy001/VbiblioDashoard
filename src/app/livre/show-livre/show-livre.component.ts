import { LivreserviceService } from 'src/app/service/livreservice.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateLivreComponent } from '../update-livre/update-livre.component';

@Component({
  selector: 'app-show-livre',
  templateUrl: './show-livre.component.html',
  styleUrls: ['./show-livre.component.css']
})
export class ShowLivreComponent implements OnInit {
  detailLivre: any;
  image:any;
  constructor(
    private dialog: MatDialog,
    private service:LivreserviceService,
    @Inject(MAT_DIALOG_DATA) public idLivre: number,

  ) { }

  ngOnInit(): void {
    this.image = this.service.img;
    this.showLivre();
  }

  update(){

    this.dialog.open(UpdateLivreComponent,{
      width:'100%'
    });

  }
  showLivre(){
    this.service.getLivreById(this.idLivre).subscribe((data)=>{
      this.detailLivre = data;
    })
  }

  fermer(){
    this.dialog.closeAll();
  }

}
