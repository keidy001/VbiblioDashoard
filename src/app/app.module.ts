import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddLivreComponent } from './livre/add-livre/add-livre.component';
import { ListLivreComponent } from './livre/list-livre/list-livre.component';
import { ShowLivreComponent } from './livre/show-livre/show-livre.component';
import { UpdateLivreComponent } from './livre/update-livre/update-livre.component';
import { UpdateLibrairyComponent } from './librairy/update-librairy/update-librairy.component';
import { AddLibrairyComponent } from './librairy/add-librairy/add-librairy.component';
import { ListLibrairyComponent } from './librairy/list-librairy/list-librairy.component';
import { ShowLibrairyComponent } from './librairy/show-librairy/show-librairy.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component'
import { HttpClientModule } from '@angular/common/http';
import {  ToastrModule, ToastrService } from 'ngx-toastr';
import { AdminComponent } from './admin/admin/admin.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AccueilComponent } from './accueil/accueil.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    AddLivreComponent,
    ListLivreComponent,
    ShowLivreComponent,
    UpdateLivreComponent,
    UpdateLibrairyComponent,
    AddLibrairyComponent,
    ListLibrairyComponent,
    ShowLibrairyComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    CorbeilleComponent,
    AccueilComponent,
    AddAdminComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    NgxPaginationModule,
    FilterPipeModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
