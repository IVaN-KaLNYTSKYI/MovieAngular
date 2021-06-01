import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {ResultsMovie} from "../../models/ResultsMovie";
import {MovieVideo} from "../../models/movie-video";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: ResultsMovie
  video: MovieVideo
  private lik = JSON.parse(<string>localStorage.getItem("lik"))
  list = this.lik || []
  movieImg = 'https://image.tmdb.org/t/p/original'
  id: number

  constructor(private movieServices: MovieService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.activatedRoute.params.subscribe(value => {
      this.id = +value.id
      this.movieServices.getMovieId(value.id).subscribe(value => {
        this.movie = value
      })
    })
    this.movieServices.getVideo(this.id).subscribe(value => {
      this.video = value
      console.log(this.video)
    })
  }

  ngOnInit(): void {
  }

  per() {
    return this.list.find((value: any) => value.id === this.id)
  }

  addLike(movie: object) {
    console.log(this.per())
    if (!this.per()) {
      this.list.push(movie)
    } else {
      alert("no")
    }
    localStorage.setItem("lik", JSON.stringify(this.list))
  }

  stl(url: string) {
    return (
      `background-image:linear-gradient(rgba(0,0,0,0.9),
     rgba(0,0,0,0.6)),
     url(https://image.tmdb.org/t/p/original${url})`)
  }

  movieVideo(key: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`)
  }
}
