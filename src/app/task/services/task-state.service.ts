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

  constructor(private taskApiSerive: TaskApiService) {}

  isLoading$() : Observable<boolean> {
    return this.loading$.asObservable();
  }

  getTasks$(): Observable<Task[]> {
    return this.tasks$.asObservable();
  }

  loadTasks() {
    this.loading$.next(true);

    return this.taskApiSerive.getTasks()
      .pipe(delay(500))
      .subscribe({
        next: (tasks) => {
          this.tasks$.next(tasks);
        },
        error: (error) => console.log(error),
        complete: () => this.loading$.next(false),
      });
  }
}
