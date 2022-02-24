import { UpdateLivreComponent } from './livre/update-livre/update-livre.component';
import { ShowLivreComponent } from './livre/show-livre/show-livre.component';
import { ShowLibrairyComponent } from './librairy/show-librairy/show-librairy.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { AdminGuard } from './guard/admin.guard';
import { LoginGuard } from './guard/login.guard';
import { LoginComponent } from './authentification/login/login.component';
import { ListLivreComponent } from './livre/list-livre/list-livre.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AddLivreComponent } from './livre/add-livre/add-livre.component';
import { AdminComponent } from './admin/admin/admin.component';

const routes: Routes = [
  {path:"listlivres",component:ListLivreComponent, canActivate:[AdminGuard]},
  {path:"addlivre",component:AddLivreComponent, canActivate:[AdminGuard]},
  { path: 'login',component: LoginComponent,canActivate:[LoginGuard]},
  {path:"accueil",component:AdminComponent,canActivate:[AdminGuard] },
  {path:"category",component:AddCategoryComponent, canActivate:[AdminGuard]},
  {path:"corbeille",component:CorbeilleComponent, canActivate:[AdminGuard]},
  {path:"show",component:ShowLivreComponent, canActivate:[AdminGuard]},
  {path:"updatelivre/:id",component:UpdateLivreComponent, canActivate:[AdminGuard]},
  {path:"updateCategory/:id",component:AddCategoryComponent, canActivate:[AdminGuard]},
  { path: '**', redirectTo: '/login', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
