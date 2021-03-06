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
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { NotFoundComponent } from './components/not-found/not-found.component';
import {ReactiveFormsModule} from "@angular/forms";


let routes: Routes = [
  {path: 'movie', component:MovieComponent },
  {path: 'movie/:id', component:MovieDetailComponent},
  {path: 'like', component:LikeComponent },
  {path: '', component:HomeComponent },
  {path:'**',component:NotFoundComponent}
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
    MovieDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
