import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-header',
  templateUrl: './film-header.component.html',
  styleUrls: ['./film-header.component.css']
})
export class FilmHeaderComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  toggleAddFilm() {
    console.log('toggle');
  }

}
