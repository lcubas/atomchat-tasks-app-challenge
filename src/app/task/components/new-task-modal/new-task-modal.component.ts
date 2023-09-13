import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { Task } from '../../models/task.model';
import { TaskStateService } from '../../services/task-state.service';
import { Notifier } from '../../../shared/services/notifier.service';

@Component({
  selector: 'app-new-task-modal',
  templateUrl: './new-task-modal.component.html',
  styleUrls: ['./new-task-modal.component.css']
})
export class NewTaskModalComponent {
  isLoading: boolean = false;

  newTaskForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(
    private notifer: Notifier,
    private taskStateService: TaskStateService,
    private dialogRef: MatDialogRef<NewTaskModalComponent>,
  ) {}

  onSubmitNewTaskForm(): void {
    if (this.newTaskForm.valid) {
      const newTaskData: Task = {
        id: '',
        is_completed: false,
        title: this.newTaskForm.value.title || '',
        description: this.newTaskForm.value.description || '',
      };

      this.isLoading = true;

      this.taskStateService
        .addTask(newTaskData)
        .subscribe({
          next: () => {
            this.notifer.showSuccess('Tarea agregada!!');
            this.taskStateService.loadTasks();
          },
          complete: () => {
            this.isLoading = false;
            this.dialogRef.close();
          },
        });
    }
  }
}
