import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: string = '';

  isCompleted: boolean = false;

  onChange() {
    this.isCompleted = !this.isCompleted;
  }
}
