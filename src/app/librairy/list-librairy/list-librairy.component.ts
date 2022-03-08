import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { LibrairyService } from 'src/app/service/librairy.service';

import { AddLibrairyComponent } from '../add-librairy/add-librairy.component';

@Component({
  selector: 'app-list-librairy',
  templateUrl: './list-librairy.component.html',
  styleUrls: ['./list-librairy.component.css']
})
export class ListLibrairyComponent implements OnInit {
  allLibrairie: any;
  constructor(
     private librairieservice: LibrairyService,
    private dialog:MatDialog

  ) { }

  ngOnInit(): void {
    this.getAllLivre()
  }
  getAllLivre() {
    this.librairieservice.getAllLibrairy().subscribe((data) => {
      this.allLibrairie = data;
    });
  }

  add(){
    this.dialog.open(AddLibrairyComponent,{
      width:"50%",  
      
    })
  }
}
