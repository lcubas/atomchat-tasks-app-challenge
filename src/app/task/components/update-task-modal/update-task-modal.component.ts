import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../../models/task.model';
import { TaskStateService } from '../../services/task-state.service';

@Component({
  selector: 'app-update-task-modal',
  templateUrl: './update-task-modal.component.html',
  styleUrls: ['./update-task-modal.component.css']
})
export class UpdateTaskModalComponent {
  isLoading: boolean = false;

  updateTaskForm = new FormGroup({
    title: new FormControl(this.task.title, [Validators.required]),
    description: new FormControl(this.task.description, [Validators.required]),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public task: Task,
    private taskStateService: TaskStateService,
    private dialogRef: MatDialogRef<UpdateTaskModalComponent>,
  ) {}

  onSubmitUpdateTaskForm(): void {
    if (this.updateTaskForm.valid) {
      this.isLoading = true;
      this.dialogRef.disableClose = true;

      const updateTaskData: Task = {
        ...this.task,
        title: this.updateTaskForm.value.title || this.task.title,
        description: this.updateTaskForm.value.description || this.task.description,
      };

      this.taskStateService
        .updateTask(updateTaskData)
        .subscribe({
          next: () => this.dialogRef.close(updateTaskData),
          complete: () => this.isLoading = false,
        });
    }
  }
}
