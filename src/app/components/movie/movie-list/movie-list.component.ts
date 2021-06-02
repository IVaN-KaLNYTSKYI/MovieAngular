import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ResultsMovie} from "../../../models/results-movie";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieImg = 'https://image.tmdb.org/t/p/original'
  @Input()
  movieList: ResultsMovie

  constructor(private router: Router,private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  detail() {
    this.router.navigate([this.movieList.id], {relativeTo: this.activatedRoute, state: this.movieList});
  }
}
