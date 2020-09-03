import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pendingTasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];
  inProgressTasks = [];
  completedTasks = [];
  curTask;
  constructor() { }

  doInProgress(index) {
    this.curTask = this.pendingTasks.splice(index, 1);
    console.log(this.curTask[0]);

    this.inProgressTasks.push(this.curTask[0]);
    console.log(this.inProgressTasks);
  }
  doCompleted(index) {
    this.curTask = this.inProgressTasks.splice(index, 1);
    console.log(this.curTask[0]);

    this.completedTasks.push(this.curTask[0]);
    console.log(this.inProgressTasks);
  }
  //  constructor(private tasksService: TasksService){}
   ngOnInit() {
    //  this.pTasks = this.tasksService.pendingTasks;
   }
}
