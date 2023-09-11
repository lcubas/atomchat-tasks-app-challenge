import { Component, OnInit } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';

import { Task } from '../../models/task.model';
import { TaskStateService } from '../../services/task-state.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;
  isLoading$: Observable<boolean>;
  currentTasks: string[] = ['Take a shower', 'Do homework', 'Do exercise'];

  constructor(private taskStateService: TaskStateService) {
    this.tasks$ = taskStateService.getTasks$();
    this.isLoading$ = taskStateService.isLoading$();
  }

  ngOnInit(): void {
    this.taskStateService.loadTasks();
  }
}
