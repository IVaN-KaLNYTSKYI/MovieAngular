import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  data = JSON.parse(<string>localStorage.getItem("lik"));
  movieImg = 'https://image.tmdb.org/t/p/original'

  constructor() {
  }

  ngOnInit(): void {
  }

}
