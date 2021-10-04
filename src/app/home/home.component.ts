import { Component, OnInit } from '@angular/core';
import{ MoviesService } from '../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
moviesData:any=[];
 tvData:any=[];
base_url="https://image.tmdb.org/t/p/w500"
constructor(_MoviesService:MoviesService ) {
 _MoviesService.getTrendingMovies().subscribe((data)=>{
    this.moviesData = data.results;
  }, (err)=>{console.log(err)});


  _MoviesService.getTrendingTv().subscribe((data)=>{this.tvData=data.results},(err)=>{console.log(err)})
   }


  ngOnInit(

  ): void {
  }


}
