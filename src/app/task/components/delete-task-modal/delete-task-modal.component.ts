import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Task } from '../../models/task.model';
import { Notifier } from '../../../shared/services/notifier.service';
import { TaskStateService } from '../../services/task-state.service';

@Component({
  selector: 'app-delete-task-modal',
  templateUrl: './delete-task-modal.component.html',
  styleUrls: [],
})
export class DeleteTaskModalComponent {
  isLoading: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public task: Task,
    private notifer: Notifier,
    private taskStateService: TaskStateService,
    private dialogRef: MatDialogRef<DeleteTaskModalComponent>,
  ) {}

  onClickDeleteTask(): void {
    this.isLoading = true;

    this.taskStateService
      .deleteTask(this.task)
      .subscribe({
        next: () => {
          this.notifer.showSuccess('Tarea eliminada!!');
          this.taskStateService.loadTasks();
        },
        complete: () => {
          this.isLoading = false;
          this.dialogRef.close();
        },
      });
  }
}
