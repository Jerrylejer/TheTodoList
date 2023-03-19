import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/myTask';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  // Ma propriété qui qui va stocker les données du formulaire
  //! Je ne parviens pas à récupérer mes catégories via [(ngModel)] => voir Manon
  todos: ITodo = {
    id: 1,
    content: '',
    category: ['bills', 'cleaning', 'health', 'other', 'shopping', 'work'],
    isUrgent: false,
    doneDate: null
  }
  // Création du localStorage
  createTodosStore() {
    const myTodo: ITodo[] = [];
    // myTodo.push(this.todos);
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
