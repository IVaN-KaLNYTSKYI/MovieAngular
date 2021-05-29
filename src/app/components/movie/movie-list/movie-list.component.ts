import {Component, Input, OnInit} from '@angular/core';
import {ResultsMovie} from "../../../models/ResultsMovie";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieImg='https://image.tmdb.org/t/p/original'
  @Input()
  movieList: ResultsMovie
  constructor() { }

  ngOnInit(): void {
    console.log(this.movieList)
  }

}
