import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddActor: EventEmitter<Task> = new EventEmitter;

  firstName!: string;
  lastName!: string;
  id! : string;

  updatedFirstName!: string;
  updatedLastName!: string;

  showAddActor!: boolean;
  subscription: Subscription;

  constructor(private taskService: TaskService, private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddActor = value)
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.firstName) {
      alert('Please add an Actors details');
      return;
    }

    const newActor = {
      firstName: this.firstName,
      lastName: this.lastName

    }

    this.onAddActor.emit(newActor);

    this.firstName = '';
    this.lastName = '';
  }

  onUpdate(){
    
    const updatedActor = {
      firstName: this.updatedFirstName,
      lastName: this.updatedLastName

    }

    this.taskService.updateActor(this.updatedFirstName, this.updatedLastName, this.id).subscribe(response => {console.log('updated')})
    console.log(this.id);
    console.log(updatedActor);

    
  }

}
