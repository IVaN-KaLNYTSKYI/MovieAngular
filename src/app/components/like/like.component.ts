import {Component, OnInit, Output} from '@angular/core';
import {ResultsMovie} from "../../models/results-movie";
import {Movie} from "../../models/movie";
import {EventEmitter} from '@angular/core';
import {MovieBehaviorService} from "../../services/movie-behavior.service";


@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  data: ResultsMovie[]
  movieImg = 'https://image.tmdb.org/t/p/original'
  movieLoading = false

  constructor(private movieBehavior: MovieBehaviorService) {
  }

  ngOnInit(): void {
    this.data = JSON.parse(<any>localStorage.getItem("lik"));
    setTimeout(() => {
      this.movieLoading = true
    }, 1500)
  }

  remove(id: number) {
    this.data = this.data.filter(value => value.id !== id)
    localStorage.setItem("lik", JSON.stringify(this.data))
    this.movieBehavior.like.next(this.data.length)
    localStorage.setItem("nim", JSON.stringify(this.movieBehavior.like.getValue()))
  }


}
