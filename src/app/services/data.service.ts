import { Tasks } from './../models/tasks';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  serviceUrl: string;

  constructor(private httpClient: HttpClient) {

    this.serviceUrl = "https://to-do-list-server-six.vercel.app/"

  }

  addTask(task: Tasks): Observable<Tasks> {
    return this.httpClient.post<Tasks>(this.serviceUrl, task);
  }

  getAllTask(): Observable<Tasks[]> {
    return this.httpClient.get<Tasks[]>(this.serviceUrl);
  }


  deleteTask(task: Tasks): Observable<Tasks> {
    console.log(task);
    return this.httpClient.delete<Tasks>(this.serviceUrl + '/' + task.todo_id); 
  }
  editTask(task : Tasks) : Observable<Tasks> {
    console.log(task)
    return this.httpClient.put<Tasks>(this.serviceUrl+ '/' + task.todo_id,task);
    }

}
