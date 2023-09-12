import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-new-task-modal',
  templateUrl: './new-task-modal.component.html',
  styleUrls: ['./new-task-modal.component.css']
})
export class NewTaskModalComponent {
  newTaskForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(private dialogRef: MatDialogRef<NewTaskModalComponent>) {}

  onSubmitNewTaskForm(): void {
    if (this.newTaskForm.valid) {
      const newTaskData: Task = {
        id: '',
        is_completed: false,
        title: this.newTaskForm.value.title || '',
        description: this.newTaskForm.value.description || '',
      };

      this.dialogRef.close(newTaskData);
    }
  }
}
