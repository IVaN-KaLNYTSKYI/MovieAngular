import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie:Movie
  constructor(private movieServices: MovieService){
  }

  ngOnInit(): void {
    this.movieServices.getMovie(1).subscribe(value => {
      this.movie = value
    })
  }
  next(pageMovie:number){
    this.movieServices.getMovie(this.movie.page+pageMovie).subscribe(value => {
      this.movie = value
    })
  }
  back(pageMovie:number){
    this.movieServices.getMovie(this.movie.page-pageMovie).subscribe(value => {
      this.movie = value
    })
  }
  firstPage(pageMovie:number){
    this.movieServices.getMovie(pageMovie).subscribe(value => {
      this.movie = value
    })
  }
  lastPage(pageMovie:number){
    this.movieServices.getMovie(pageMovie).subscribe(value => {
      this.movie = value
    })
  }
}
