import { Component, OnInit, Input, Output } from '@angular/core';
import { Film } from 'src/app/Film';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {

  @Input() film!: Film;

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(film: any) {
    console.log(film)
  }

}
