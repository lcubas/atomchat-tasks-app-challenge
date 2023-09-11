import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
  ],
  exports: [
    TaskListComponent,
    TaskItemComponent,
    TaskComponent,
  ],
})
export class TaskModule { }
