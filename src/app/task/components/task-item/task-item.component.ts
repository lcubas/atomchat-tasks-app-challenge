import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Task } from '../../models/task.model';

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

  isCompleted: boolean = this.task.is_completed;

  onChange() {
    this.task.is_completed = !this.task.is_completed;
  }
}
