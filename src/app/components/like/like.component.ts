import {Component, OnInit} from '@angular/core';
import {ResultsMovie} from "../../models/results-movie";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  data:ResultsMovie[]
  movieImg = 'https://image.tmdb.org/t/p/original'

  constructor() {
  }

  ngOnInit(): void {
    this.data = JSON.parse(<any>localStorage.getItem("lik"));
  }
  remove(id: number) {
    this.data=this.data.filter(value => value.id!==id)
    localStorage.setItem("lik", JSON.stringify(this.data))
    console.log(this.data)
  }


}
