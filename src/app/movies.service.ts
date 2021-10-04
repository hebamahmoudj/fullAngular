import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient: HttpClient) { }
  getTrendingMovies():Observable<any>{
    
    const newLocal = 'https://api.themoviedb.org/3/trending/movie/week?api_key=2969eb9d6e59ac53603727c7c1ec6a02';
   return this._HttpClient.get(newLocal);
  }
  getTrendingTv():Observable<any>{
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/week?api_key=2969eb9d6e59ac53603727c7c1ec6a02")
  }
  getMovieDetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2969eb9d6e59ac53603727c7c1ec6a02&language=en-US`);
  }
}
