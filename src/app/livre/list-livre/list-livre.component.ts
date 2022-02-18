import { Router } from '@angular/router';
import { LivreserviceService } from './../../service/livreservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-livre',
  templateUrl: './list-livre.component.html',
  styleUrls: ['./list-livre.component.css']
})
export class ListLivreComponent implements OnInit {
  allLivres : any;
  image : any;
  constructor(
    public livreService : LivreserviceService,
    public router: Router,
  ) { }

  ngOnInit(): void {
      this.getAllLivre();
      this.image =this.livreService.img
  }

  getAllLivre(){
    this.livreService.getAllLivre().subscribe((data)=>{
      this.allLivres = data;

    })
  }
}
