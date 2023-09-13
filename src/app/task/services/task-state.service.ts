import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay } from 'rxjs';

import { Task } from '../models/task.model';
import { TaskApiService } from './task-api.service';

@Injectable({
  providedIn: 'root'
})
export class TaskStateService {
  private tasks$ = new BehaviorSubject<Task[]>([]);
  private loading$ = new BehaviorSubject<boolean>(false);

  constructor(private taskApiService: TaskApiService) {}

  isLoading$() : Observable<boolean> {
    return this.loading$.asObservable();
  }

  getTasks$(): Observable<Task[]> {
    return this.tasks$.asObservable();
  }

  loadTasks(): void {
    this.loading$.next(true);

    this.taskApiService
      .getTasks()
      .pipe(delay(500))
      .subscribe({
        next: (tasks) => this.tasks$.next(tasks),
        complete: () => this.loading$.next(false),
      });
  }

  addTask(task: Task): Observable<Task> {
    return this.taskApiService.addTask(task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.taskApiService.updateTask(task);
  }

  deleteTask(task: Task): Observable<null> {
    return this.taskApiService.deleteTask(task.id);
  }
}
