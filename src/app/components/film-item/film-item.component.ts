import { Task } from 'src/app/Task';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from 'src/app/Film';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {

  @Input() film!: Film;
  @Output() onDeleteFilm: EventEmitter<Film> = new EventEmitter();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(film: any) {
    this.onDeleteFilm.emit(film);
 
  }

}
