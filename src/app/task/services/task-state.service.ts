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
        error: (error) => console.log(error),
        complete: () => this.loading$.next(false),
      });
  }

  addTask(task: Task): void {
    this.loading$.next(true);

    this.taskApiService
      .addTask(task)
      .subscribe({
        next: () => this.loadTasks(),
        error: (error) => console.log(error),
      });
  }

  updateTask(task: Task): Observable<Task> {
    return this.taskApiService.updateTask(task);
  }

  // toggleCompletedTask(task: Task): Observable<Task> {
  //   const updateTaskData: Task = {
  //     ...task,
  //     is_completed: !task.is_completed,
  //   };

  //   return this.taskApiService.updateTask(updateTaskData);
  // }
}
