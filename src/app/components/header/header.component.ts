import {Component, Input, OnInit} from '@angular/core';
import {ResultsMovie} from "../../models/results-movie";
import {MovieBehaviorService} from "../../services/movie-behavior.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  movie = "Movie"
  home = 'Home'
  like = "Like"

  constructor() {
  }

  ngOnInit(): void {

  }

  likeCounter(): void {
    return JSON.parse(<string>localStorage.getItem("nim"))
  }

}
