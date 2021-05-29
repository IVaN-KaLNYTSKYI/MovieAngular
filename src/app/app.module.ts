import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MovieService} from "./services/movie.service";
import {HttpClientModule} from "@angular/common/http";
import { MovieComponent } from './components/movie/movie.component';
import { MovieListComponent } from './components/movie/movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
