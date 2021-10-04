import { Component, OnInit } from '@angular/core';
import{ MoviesService } from '../movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  moviesData:any=[];
 
 base_url="https://image.tmdb.org/t/p/w500"
 constructor(_MoviesService:MoviesService ) {
  _MoviesService.getTrendingMovies().subscribe((data)=>{
     this.moviesData = data.results;
   }, (err)=>{console.log(err)});
 
  } 
  ngOnInit(): void {
  }

}
