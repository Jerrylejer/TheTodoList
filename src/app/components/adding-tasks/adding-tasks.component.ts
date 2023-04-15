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
  // Ok Il faut faire attention à utiliser todos.category dans le html ... Je n'appelais que formCategory
  formCategory: string = '';
  // Je récupère dans ma prop "modifiedTask", la liste de mon localStorage dédié à la tache à modifier
  // Ce tableau sera nécessairement alimenté que par 1 seule tâche qui sera supprimée à la validation des modifs
  // D'où le modifiedTask[0] (un seul élémnent dans le tableau)
  modifiedTask: ITodo[] = this.todo.getModify();
  // "todos" =>  propriété qui va stocker les données du formulaire
  // Je fais une ternaire pour chaque propriété => Si mon tableau LS "modified" contient un objet, je prends les datas de cet objet sinon je capte les données de mon formulaire
  todos: ITodo = {
    id:
      this.modifiedTask.length > 0
        ? this.modifiedTask[0].id
        : this.todo.addNewId(),
    content: this.modifiedTask.length > 0 ? this.modifiedTask[0].content : '',
    category:
      this.modifiedTask.length > 0
        ? this.modifiedTask[0].category
        : this.formCategory,
    isUrgent:
      this.modifiedTask.length > 0 ? this.modifiedTask[0].isUrgent : false,
    doneDate:
      this.modifiedTask.length > 0 ? this.modifiedTask[0].doneDate : null,
  };

  ngOnInit() {
    // Je récupère ma liste de tâche à modifier (qui restera à seulement un élément car après modif, je la supprime du tableau)
    console.log(this.modifiedTask);
  }

  // Je capte mon Formulaire pour utiliser le reset() et vider les inputs
  @ViewChild('myForm') todoForm!: NgForm;

  // J'utilise mon service et intègre sa méthode addTodos(en paramètre la props todos qui capte les valeurs d'inputs)
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
    // Je supprime la tache à modifier du LS
    this.todo.deleteModified(this.modifiedTask[0].id);
    // Je retourne à la page d'accueil
    return this.route.navigate(['/']);
  }
}
