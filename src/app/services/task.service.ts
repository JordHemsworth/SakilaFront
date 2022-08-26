import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable} from 'rxjs';
import { Task } from 'src/app/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://sakilabeanstalk-env.eba-zkkzp5jg.eu-west-2.elasticbeanstalk.com/Sakila'
  //private apiUrl = 'http://localhost:5000/tasks'
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl + '/All_Actors')
   
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/Delete_Actor_By_Id?actorId=${task.id}`;
    return this.http.delete<Task>(url);
  }

  addActor(task: Task): Observable<Task> {
    const addUrl =  `${this.apiUrl}/Add_New_Actor?firstName=${task.firstName}&lastName=${task.lastName}`

    console.log(addUrl);
    return this.http.post<Task>(addUrl, task, httpOptions);
    
  }

  updateActor(firstName: string, lastName: string, id:string) {
    const updateUrl = `${this.apiUrl}/Edit_Actor_By_Id?actorId=${id}`;
    return this.http.patch<Task>(updateUrl, {firstName, lastName, id})
  }
} 
