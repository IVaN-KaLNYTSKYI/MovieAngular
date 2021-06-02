import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MovieService} from "./services/movie.service";
import {HttpClientModule} from "@angular/common/http";
import { MovieComponent } from './components/movie/movie.component';
import { MovieListComponent } from './components/movie/movie-list/movie-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule, Routes} from "@angular/router";
import { LikeComponent } from './components/like/like.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';


let routes: Routes = [
  {path: 'movie', component:MovieComponent },
  {path: 'movie/:id', component:MovieDetailComponent},
  {path: 'like', component:LikeComponent },
  {path: '', component:HomeComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieListComponent,
    HeaderComponent,
    FooterComponent,
    LikeComponent,
    HomeComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
