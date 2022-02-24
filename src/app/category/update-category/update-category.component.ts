import { CategoryService } from 'src/app/service/category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  id: any;
  detailCategory:any;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private service:CategoryService,
    public toast: ToastrService
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.service.showCategory(this.id).subscribe(data=>{
      this.detailCategory = data;
  })
}

}
