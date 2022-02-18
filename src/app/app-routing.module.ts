import { LoginComponent } from './authentification/login/login.component';
import { ListLivreComponent } from './livre/list-livre/list-livre.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLivreComponent } from './livre/add-livre/add-livre.component';
import { AdminComponent } from './admin/admin/admin.component';

const routes: Routes = [
  {path:"listlivres",component:ListLivreComponent, },
  {path:"addlivre",component:AddLivreComponent, },
  {path:"login",component:LoginComponent, },
  {path:"accueil",component:AdminComponent, },

  { path: '**', redirectTo: '/login', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
