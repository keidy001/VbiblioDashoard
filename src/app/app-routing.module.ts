import { ListLivreComponent } from './livre/list-livre/list-livre.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLivreComponent } from './livre/add-livre/add-livre.component';

const routes: Routes = [
  {path:"listlivres",component:ListLivreComponent, },
  {path:"addlivre",component:AddLivreComponent, }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
