import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResultsMovie} from "../models/results-movie";
import {MovieVideo} from "../models/movie-video";
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private path={
    discover:'/discover/movie',
    movieId:'/movie/',
    search:"/search/movie"
  }
  private base = "https://api.themoviedb.org/3"
  private API_KEY = "?api_key=8aaf14eada5c1779a594aaa553b31207"
  private page="&page="

  constructor(private httpClient: HttpClient) {
  }

  getMovie(page:number): Observable<Movie> {
    return this.httpClient.get<Movie>(this.base+this.path.discover+this.API_KEY+this.page+page)
  }
  getMovieId(id:number): Observable<ResultsMovie> {
    return this.httpClient.get<ResultsMovie>(this.base+this.path.movieId+id+this.API_KEY)
  }

  getVideo(id:number):Observable<MovieVideo>{
    return this.httpClient.get<MovieVideo>(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=8aaf14eada5c1779a594aaa553b31207`)
  }
  getMovieSearch(text:string):Observable<Movie>{
    return this.httpClient.get<Movie>(this.base+this.path.search+this.API_KEY+"&query="+text)
  }
}
