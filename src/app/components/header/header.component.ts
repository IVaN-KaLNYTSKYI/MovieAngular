import {Component, OnInit} from '@angular/core';

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

}
