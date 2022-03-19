import { ListUtilisateurComponent } from './utilisateur/list-utilisateur/list-utilisateur.component';
import { FormatComponent } from './format/format.component';
import { AccueilComponent } from './accueil/accueil.component';
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
import { ListLibrairyComponent } from './librairy/list-librairy/list-librairy.component';
import { AddLibrairyComponent } from './librairy/add-librairy/add-librairy.component';
import { ListAdminComponent } from './admin/list-admin/list-admin.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';

const routes: Routes = [
  {path:"accueil",component:AccueilComponent, canActivate:[AdminGuard]},

  //Admin Route
  {path:"listadmin",component:ListAdminComponent, canActivate:[AdminGuard]},
  {path:"addadmin",component:AddAdminComponent, canActivate:[AdminGuard]},
  {path:"utilisateur",component:ListUtilisateurComponent, canActivate:[AdminGuard]},


  {path:"byformat/:format",component:FormatComponent, canActivate:[AdminGuard]},

  //Librairies
  {path:"listlibrary",component:ListLibrairyComponent, canActivate:[AdminGuard]},
  {path:"addlibrairy",component:AddLibrairyComponent, canActivate:[AdminGuard]},
  {path:"showlibrairy/:idLibrairy",component:ShowLibrairyComponent, canActivate:[AdminGuard]},

  {path:"listlivres",component:ListLivreComponent, canActivate:[AdminGuard]},
  {path:"addlivre",component:AddLivreComponent, canActivate:[AdminGuard]},
  {path: 'login',component: LoginComponent,canActivate:[LoginGuard]},
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
