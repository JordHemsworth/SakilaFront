import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddActor: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddActor(): void {
    this.showAddActor = !this.showAddActor;
    this.subject.next(this.showAddActor);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
