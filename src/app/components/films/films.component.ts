import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/Film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Film[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((films) => (this.films = films));
  }

  deleteFilm(film: Film) {
    //this.filmService.deleteFilm(film).subscribe(() => (this.films = this.films.filter(f => f.id !== film.id)))  //ASK JOANN ABOUT DELETE
    console.log(film.id)
  }

  addFilm(film: Film) {
    this.filmService.addFilm(film).subscribe((film)  => (this.films.push(film)));       //Ask Joann about HTTP response but still adding film
    alert('Film Added Successfully');
  }

}
