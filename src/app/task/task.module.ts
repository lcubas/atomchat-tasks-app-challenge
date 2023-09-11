import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TaskComponent } from './task.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  declarations: [
    TaskItemComponent,
    TaskListComponent,
    TaskComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    HttpClientModule,
  ],
  exports: [
    TaskListComponent,
    TaskItemComponent,
    TaskComponent,
  ],
})
export class TaskModule { }
