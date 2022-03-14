import { UtilisateurService } from './../../service/utilisateur.service';
import { Component, OnInit, Inject } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-utilisateur',
  templateUrl: './show-utilisateur.component.html',
  styleUrls: ['./show-utilisateur.component.css']
})
export class ShowUtilisateurComponent implements OnInit {
  utilisateur:any;
  constructor( private service:UtilisateurService,
    @Inject(MAT_DIALOG_DATA) public idUtilisateur: any,
    ) { }
  
    ngOnInit(): void {
      console.log(this.idUtilisateur);
      
      this.getUtilisateurById()
    }
    getUtilisateurById(){
      this.service.utilisateurById(this.idUtilisateur).subscribe((data)=>{
        this.utilisateur=data;
  
       })
    }
}
