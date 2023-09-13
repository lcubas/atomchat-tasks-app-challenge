import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TaskApiService {
  private readonly BASE_API = `${environment.apiUrl}/tasks`;

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.BASE_API);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.BASE_API, {
      title: task.title,
      description: task.description,
    });
  }

  updateTask(task: Partial<Task>): Observable<Task> {
    return this.http.put<Task>(`${this.BASE_API}/${task.id}`, { ...task });
  }

  deleteTask(taskId: string): Observable<null> {
    return this.http.delete<null>(`${this.BASE_API}/${taskId}`);
  }
}
