import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/Movie";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie:Movie
  constructor(private movieServices: MovieService) {
  }

  ngOnInit(): void {
    this.movieServices.getMovie(1).subscribe(value => {
      this.movie = value
      console.log(this.movie)
    })
  }
  next(pageMovie:number){
    this.movieServices.getMovie(this.movie.page+pageMovie).subscribe(value => {
      this.movie = value
    })
  }
}
