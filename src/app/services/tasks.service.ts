import { Injectable } from '@angular/core';
import { myTask } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  // J'instancie un tableau vide qui est de type myTask[] (mon interface)
  todos!: myTask[];
  // Je crée une méthode qui me retourne ma liste de todo
  getTodos() {
    return this.todos;
  }
  // Je crée une méthode qui push une todo dans todos
  addTodo(todo: myTask) {
    return this.todos.push(todo);
  }
}
