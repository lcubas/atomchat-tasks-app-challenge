import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TaskComponent } from './task.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { NewTaskModalComponent } from './components/new-task-modal/new-task-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TaskComponent,
    TaskItemComponent,
    TaskListComponent,
    NewTaskModalComponent,
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
  ],
  exports: [
    TaskListComponent,
    TaskItemComponent,
    TaskComponent,
  ],
})
export class TaskModule { }
