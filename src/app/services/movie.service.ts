import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../models/Movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private path={
    discover:'/discover/movie',
    movieId:'/movie/'
  }
  private base = "https://api.themoviedb.org/3"
  private API_KEY = "?api_key=8aaf14eada5c1779a594aaa553b31207"
  private page="&page="

  constructor(private httpClient: HttpClient) {
  }

  getMovie(page:number): Observable<Movie> {
    return this.httpClient.get<Movie>(this.base+this.path.discover+this.API_KEY+this.page+page)
  }
}
