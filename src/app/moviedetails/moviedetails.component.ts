import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'
import{MoviesService}from '../movies.service'
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
id:any;
movieDetail:any;
isLoading:boolean=false;
toptenmovies:any=[];
base_url="https://image.tmdb.org/t/p/w500";
  constructor(public _ActivatedRoute:ActivatedRoute,_MoviesService:MoviesService) { 
   this.id= _ActivatedRoute.snapshot.paramMap.get('id');

   _MoviesService.getMovieDetails(this.id).subscribe((data)=>{this.movieDetail=data;
for(let i=0 ;i<10 ;i++){
  _MoviesService.getTrendingMovies().subscribe((data)=>{this.toptenmovies=data.results},(err)=>{console.log(err)})
}
  
   setTimeout(()=>{this.isLoading=true;} , 1000);
  
  
  },(err)=>{console.log(err)})
  }

  ngOnInit(): void {
  }

}
