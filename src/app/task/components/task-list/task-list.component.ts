import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Observable } from 'rxjs';

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

  onClickOpenNewTaskModal() {
    const dialogRef = this.dialog.open(NewTaskModalComponent);

    dialogRef.afterClosed().subscribe((newTaskData: Task) => {
      this.taskStateService.addTask(newTaskData);
    });
  }
}
