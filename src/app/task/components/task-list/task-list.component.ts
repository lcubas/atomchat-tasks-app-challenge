import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { Task } from '../../models/task.model';
import { TaskStateService } from '../../services/task-state.service';
import { NewTaskModalComponent } from '../new-task-modal/new-task-modal.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;
  isLoading$: Observable<boolean>;

  constructor(
    public dialog: MatDialog,
    private taskStateService: TaskStateService,
  ) {
    this.tasks$ = taskStateService.getTasks$();
    this.isLoading$ = taskStateService.isLoading$();
  }

  ngOnInit(): void {
    this.taskStateService.loadTasks();
  }

  onClickOpenNewTaskModal(): void {
    this.dialog.open(NewTaskModalComponent);
  }
}
