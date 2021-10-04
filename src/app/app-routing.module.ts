import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import{RegisterComponent} from'./register/register.component'
import{LoginComponent} from './login/login.component'
import { AuthGuard } from './auth.guard';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
    {path:'home', canActivate:[AuthGuard],component:HomeComponent},
    { path:'signin',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    { path:'moviedetails/:id',component:MoviedetailsComponent},
    { path:'movies',component: MoviesComponent},
    { path:'tv',component: TvComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
