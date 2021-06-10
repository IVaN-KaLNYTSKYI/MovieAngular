import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie";
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Movie
  movieLoading = false

  textControl = new FormControl("")

  myFormGroup: FormGroup = new FormGroup({
    text: this.textControl,
  })

  constructor(private movieServices: MovieService) {
  }

  ngOnInit(): void {
    this.movieServices.getMovie(1).subscribe(value => {
      this.movie = value
    })
    setTimeout(() => {
      this.movieLoading = true
    }, 1500)
  }

  next(pageMovie: number) {
    this.movieServices.getMovie(this.movie.page + pageMovie).subscribe(value => {
      this.movie = value
      this.movieLoading = false
      setTimeout(() => {
        this.movieLoading = true
      }, 500)
    })
  }

  back(pageMovie: number) {
    this.movieServices.getMovie(this.movie.page - pageMovie).subscribe(value => {
      this.movie = value
      this.movieLoading = false
      setTimeout(() => {
        this.movieLoading = true
      }, 500)
    })
  }

  firstPage(pageMovie: number) {
    this.movieServices.getMovie(pageMovie).subscribe(value => {
      this.movie = value
      this.movieLoading = false
      setTimeout(() => {
        this.movieLoading = true
      }, 500)
    })
  }

  lastPage(pageMovie: number) {
    this.movieServices.getMovie(pageMovie).subscribe(value => {
      this.movie = value
      this.movieLoading = false
      setTimeout(() => {
        this.movieLoading = true
      }, 500)
    })
  }

  search(): void {
    if (this.textControl.value === "") {
      this.movieServices.getMovie(1).subscribe(value => {
        this.movie = value
      })
    } else {
      this.movieServices.getMovieSearch(this.textControl.value).subscribe(value => this.movie=value)
    }

  }

}
