import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Task } from '../../models/task.model';
import { Notifier } from 'src/app/shared/services/notifier.service';
import { TaskStateService } from '../../services/task-state.service';
import { UpdateTaskModalComponent } from '../update-task-modal/update-task-modal.component';
import { DeleteTaskModalComponent } from '../delete-task-modal/delete-task-modal.component';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TaskItemComponent {
  @Input() task: Task = {
    id: '',
    title: '',
    description: '',
    is_completed: false,
  };

  constructor(
    private dialog: MatDialog,
    private notifier: Notifier,
    private taskStateService: TaskStateService,
  ) {}

  onChangeCompletedTask() {
    const updateTaskData: Task = {
      ...this.task,
      is_completed: !this.task.is_completed,
    };

    this.task = { ...updateTaskData };

    this.taskStateService
      .updateTask(updateTaskData)
      .subscribe({
        error: (error) => console.log(error),
      });
  }

  onClickEditTask(): void {
    const dialogRef = this.dialog.open(UpdateTaskModalComponent, {
      data: this.task,
    });

    dialogRef.afterClosed().subscribe((updateTaskData: Task) => {
      if (updateTaskData) {
        this.task = { ...updateTaskData };
        this.notifier.showSuccess('Tarea actualizada!!');
      }
    });
  }

  onClickDeleteTask(): void {
    this.dialog.open(DeleteTaskModalComponent, {
      data: this.task,
    });
  }
}
