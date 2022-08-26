import { Injectable } from '@angular/core';
import { Film } from 'src/app/Film';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private apiUrl = 'http://sakilabeanstalk-env.eba-zkkzp5jg.eu-west-2.elasticbeanstalk.com/Sakila'

  constructor(private http:HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiUrl + '/Get_Films')
  }

  deleteFilm(film: Film): Observable<Film> {
    const url = `${this.apiUrl}/Delete_Film_By_Id?filmId=${film.id}`;   //Ask Joann what I need to change in Java for the delete
    return this.http.delete<Film>(url);
  }

  addFilm(film: Film): Observable<Film>{
    /* const addUrl =  `${this.apiUrl}/Add_New_Actor?firstName=${task.firstName}&lastName=${task.lastName}` 
    /* console.log(addUrl);
    return this.http.post<Film>(addUrl, film, httpOptions);  */

    const addUrl =`${this.apiUrl}/Add_New_Film?title=${film.title}&description=${film.description}&release_year=${film.release_year}
    &rental_duration=${film.rental_duration}&rental_rate=${film.rental_rate}&length=${film.length}&replacement_cost=${film.replacement_cost}&rating=${film.rating}
    &special_features=${film.special_features}&language_id=${film.language_id}`

    return this.http.post<Film>(addUrl, film, httpOptions);
    
  }

 
 
}
