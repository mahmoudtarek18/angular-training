import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private tasksSer: TasksService, 
    private route: Router,
    private title:Title ) { 
      this.title.setTitle('add task')
    }

  ngOnInit() {
  }

  saveTask (title, des) {
    this.tasksSer.saveTask(title.value, des.value);
    this.route.navigate(['/'])
  }

}
