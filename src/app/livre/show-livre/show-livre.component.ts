import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateLivreComponent } from '../update-livre/update-livre.component';

@Component({
  selector: 'app-show-livre',
  templateUrl: './show-livre.component.html',
  styleUrls: ['./show-livre.component.css']
})
export class ShowLivreComponent implements OnInit {

  constructor(
    private dialog: MatDialog

  ) { }

  ngOnInit(): void {
  }

  update(){
    
    this.dialog.open(UpdateLivreComponent,{
      width:'100%'
    });
    
  }

}