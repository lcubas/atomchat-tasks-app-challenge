import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TaskComponent } from './task.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { NewTaskModalComponent } from './components/new-task-modal/new-task-modal.component';
import { UpdateTaskModalComponent } from './components/update-task-modal/update-task-modal.component';

@NgModule({
  declarations: [
    TaskComponent,
    TaskItemComponent,
    TaskListComponent,
    NewTaskModalComponent,
    UpdateTaskModalComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonComponent,
  ],
  exports: [
    TaskListComponent,
    TaskItemComponent,
    TaskComponent,
  ],
})
export class TaskModule { }
