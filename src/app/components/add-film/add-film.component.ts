import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { Film } from 'src/app/Film';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  
  @Output() onAddFilm: EventEmitter<Film> = new EventEmitter();

  showAddFilm!: boolean;
  subscription! : Subscription;

  id!: number
  title!: string
  description!: string
  release_year!: string
  rental_duration!: string
  rental_rate!: string
  language_id!: string
  length!: string
  replacement_cost!: string
  rating!: string
  special_features!: string

  constructor (private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddFilm = value));
  }

  ngOnInit (): void {}

  onSubmit () {
    if (!this.title) {
      alert('Please add the film details')
      return
    }

    const newFilm = {
      title: this.title,
      description: this.description,
      release_year: this.release_year,
      rental_duration: this.rental_duration,
      rental_rate: this.rental_rate,
      language_id: this.language_id,
      length: this.length,
      replacement_cost: this.replacement_cost,
      rating: this.rating,
      special_features: this.special_features
    }

    this.onAddFilm.emit(newFilm);

    this.title = '';
    this.description = '';
    this.release_year = '';
    this.rental_duration = '';
    this.rental_rate = '';
    this.language_id = '';
    this.length = '';
    this.replacement_cost = '';
    this.rating = '';
    this.special_features = '';
  }
}
