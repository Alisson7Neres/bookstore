import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';

import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component'
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component'
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LivroReadComponent } from './components/views/livro/livro-read/livro-read.component';
import { LivroCreateComponent } from './components/views/livro/livro-create/livro-create.component';
import { LivroUpdateComponent } from './components/views/livro/livro-update/livro-update.component';
import { LivroDeleteComponent } from './components/views/livro/livro-delete/livro-delete.component';
import { LivroReadBookComponent } from './components/views/livro/livro-read-book/livro-read-book.component';

import { LoaderComponent } from './components/loader/loader.component';

import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CategoriaReadComponent,
    CategoriaCreateComponent,
    CategoriaDeleteComponent,
    CategoriaUpdateComponent,
    LivroReadComponent,
    LivroCreateComponent,
    LivroUpdateComponent,
    LivroDeleteComponent,
    LivroReadBookComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
