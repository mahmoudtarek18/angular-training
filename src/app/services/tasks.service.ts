import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
   
  tasks: Array<Task> = [];  

  constructor() { 
    let savedTasks = localStorage.getItem('tasks');
    if(savedTasks) this.tasks = JSON.parse(savedTasks)
     else this.tasks = []
  }

  deletTask(i){
    this.tasks.splice(i,1)
    this.saveAll()
  }

  saveTask (title, description) {
    this.tasks.push({
      title,
      description
    })
    this.saveAll()
  }

  editTask(i, data){
    this.tasks[i] = data
    this.saveAll()
  }

  saveAll(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }


}
