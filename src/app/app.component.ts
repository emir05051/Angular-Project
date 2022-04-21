import { Component } from '@angular/core';

interface Task {
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  tasks: Array<Task> = [];
  taskTitle: string = '';
  taskDescription: string = '';
  hasTask: boolean = false;

  checkTitle(): void {
    this.hasTask = false;

    this.taskTitle = this.taskTitle || 'None';
    this.taskDescription = this.taskDescription || 'None';

    let task: string = this.tasks.find(
      (task: Task) => task.title === this.taskTitle
    ) as unknown as string;

    if (task) {
      this.hasTask = true;
    }
  }
  addTask(): void {
    if (this.hasTask) {
      return;
    }

    this.tasks.push({
      title: this.taskTitle,
      description: this.taskDescription,
    });
    this.taskTitle = '';
    this.taskDescription = '';
  }
  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
