import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITodo } from '../../interfaces/myTask';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adding-tasks',
  templateUrl: './adding-tasks.component.html',
  styleUrls: ['./adding-tasks.component.css'],
})
export class AddingTasksComponent {
  // J'appelle mon service
  constructor(private todo: TasksService, private route: Router) {}

  // Je récupère la valeur de l'input type radio que j'envoie ensuite dans mon objet todos
  formCategory: string = '';

  // Ma propriété qui qui va stocker les données du formulaire
  //! Ok Il faut faire attention à utiliser todos.category dans le html ... Je n'appelais que formCategory
  todos: ITodo = {
    id: this.todo.addNewId(),
    content: '',
    category: this.formCategory,
    isUrgent: false,
    doneDate: null,
  };

  ngOnInit() {
    // je récupère la première valeur de mon tableau prop categorie
    console.log(this.todos.category);
  }

  // Je capte mon Formulaire pour utiliser le reset() et vider les inputs
  @ViewChild('myForm') todoForm!: NgForm;

  // J'utilise mon service et intègre sa méthodez addTodos(en paramètre la props todos qui capte les valeurs d'inputs)
  addTodo(todos: ITodo) {
    this.todo.addTodos(todos);
  }

  // Soumission du formulaire
  onSubmit() {
    // console.log('todoForm', this.todoForm);
    // Je lis ma tâche
    console.log('La tâche qui est va être ajoutée au LS : ', this.todos);
    // J'ajoute la tache au localStore
    this.addTodo(this.todos);
    // Je reset les champs du formulaire
    this.todoForm.reset();
    // Je retourne à la page d'accueil
    return this.route.navigate(['/']);
  }
}
