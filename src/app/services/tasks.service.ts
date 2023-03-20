import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/myTask';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  // Ma propriété qui qui va stocker les données du formulaire
  todos: ITodo = {
    id: 1,
    content: '',
    category: '',
    isUrgent: false,
    doneDate: null
  }

  // Création du localStorage
  createTodosStore() {
    const myTodo: ITodo[] = [];
    const stringifyMyTodo = JSON.stringify(myTodo);
    localStorage.setItem('todo', stringifyMyTodo);
  }

  // Récupération la liste des tâches ou la créée dans LS
  getTodos() {
    const todoList = localStorage.getItem('todo');
    if (todoList) {
      return JSON.parse(todoList);
    } else {
      this.createTodosStore();
      this.getTodos();
    }
    console.log(todoList);
  }
  
  // Ajouter une tache au LS (pas de vérification pour commencer)
  addTodos(todos: ITodo) {
    const storage = this.getTodos();
    storage.push(todos);
    localStorage.setItem('todo', JSON.stringify(storage));
  }
}
