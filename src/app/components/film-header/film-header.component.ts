import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-film-header',
  templateUrl: './film-header.component.html',
  styleUrls: ['./film-header.component.css']
})
export class FilmHeaderComponent implements OnInit {

  showAddFilm!: boolean;
  subscription!: Subscription;


  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddFilm = value)
   }

  ngOnInit(): void {
  }

  toggleAddFilm() {
    this.uiService.toggleAddFilm();
  }

}
