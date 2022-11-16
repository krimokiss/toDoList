import { Tasks } from './../../models/tasks';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  taskObj: Tasks = new Tasks();
  taskArr: Tasks[] = [];

  addTaskValue: string = '';
  editTaskValue: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.editTaskValue = '';
    this.addTaskValue = '';
    this.taskObj = new Tasks();
    this.taskArr = [];
    this.getAllTask();
    
  }
  getAllTask() {
    this.dataService.getAllTask().subscribe(res => {
      this.taskArr = res;
      console.log(res);

    }, err => {

      alert(err.message)
    })
  }

  // getTask(task : Tasks){
  //   this.dataService.getTask(this.taskObj).subscribe(res =>{
  //     console.log(res);
  //     this.ngOnInit()
      
  //   }, err =>{
  //     alert("Pas de bol")
  //   })
  // }

  addTask() {
    this.taskObj.description = this.addTaskValue;
    this.dataService.addTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
      this.addTaskValue = '';
    }, err => {
      alert(err);
    })
  }

  editTask() {
    this.taskObj.description = this.editTaskValue;
    this.dataService.editTask(this.taskObj).subscribe(res => {
      this.ngOnInit()
    }, err => {
      alert("Failed to update task")
    })
  }

  deleteTask(eTask: Tasks) {
    this.dataService.deleteTask(eTask).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert("Failed to delete task");
    })
  }

  call(etask : Tasks) {
    this.taskObj = etask;
    this.editTaskValue = etask.description;
    console.log(etask);
    
  }

}
