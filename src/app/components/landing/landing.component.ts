import { Component } from '@angular/core';
import { ITodo } from 'src/app/interfaces/myTask';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  // Ma liste de todos
  todoLists: ITodo[] = [];
  // J'utilise'mon service
  constructor(private todo: TasksService) {}

  onInit() {
    //! Je ne récupère rien en console ...
    this.getTodoList();
  }
  // Je récupère la liste des todos
  getTodoList() {
    this.todoLists = this.todo.getTodos();
  }
}
