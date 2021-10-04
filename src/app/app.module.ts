import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import{HttpClientModule}from '@angular/common/http'
import{ReactiveFormsModule} from'@angular/forms'
import{RegisterComponent } from'./register/register.component';
import{LoginComponent} from'./login/login.component';

import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { TvComponent } from './tv/tv.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    MoviedetailsComponent,
    TvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
