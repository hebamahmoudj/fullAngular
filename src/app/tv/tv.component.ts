import { Component, OnInit } from '@angular/core';
import{ MoviesService } from '../movies.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  tvData:any=[];
  base_url="https://image.tmdb.org/t/p/w500"
 
  constructor(public _MoviesService:MoviesService) { 

    
 

 

  
  
    _MoviesService.getTrendingTv().subscribe((data)=>{this.tvData=data.results},(err)=>{console.log(err)})
}

  ngOnInit(): void {
  }

}
