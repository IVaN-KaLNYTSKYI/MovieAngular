import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {ResultsMovie} from "../../models/ResultsMovie";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: ResultsMovie
  private lik = JSON.parse(<string>localStorage.getItem("lik"))
  list = this.lik || []

  constructor(private movieServices: MovieService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.movieServices.getMovieId(value.id).subscribe(value => {
        this.movie = value
      })
    })
  }

  ngOnInit(): void {
  }
  add(poster_path: string) {
    this.list.push({poster_path})
    localStorage.setItem("lik", JSON.stringify(this.list))
  }
}
