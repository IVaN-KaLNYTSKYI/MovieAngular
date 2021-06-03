import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movie: Movie
  movieImg = 'https://image.tmdb.org/t/p/original'
  constructor(private movieServices: MovieService) {
  }

  ngOnInit(): void {
    this.movieServices.getMovie(1).subscribe(value => {
      this.movie = value
    })
  }

}
