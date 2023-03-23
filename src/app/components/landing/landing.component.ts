import { Component } from '@angular/core';
import { ITodo } from 'src/app/interfaces/myTask';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  // Booléen qui gère l'apparition/disparition btn + message d'accueil
  isHide: boolean = false;
  // Ma liste de todos
  todoLists: ITodo[] = [];
  // J'utilise'mon service
  constructor(private todo: TasksService) {}

  ngOnInit() {
    // Je récupère ma liste des tâches
    this.getTodoList();
    // Je lance ma méthode pour l'affichage accueil conditionnel
    this.displayWelcomeMessage();
    console.log(this.todoLists);
  }

  // Méthode pour afficher ou non le bouton + "Aucune tâche pour le moment"
  displayWelcomeMessage() {
    // J'utilise une ternaire plus concise qu'un if => J'ajoute le .length sinon le array vide me fait disparaitre la div
    this.todoLists.length > 0 ? this.isHide = true : this.isHide = false;
  }

  // Je récupère la liste des todos
  getTodoList() {
    this.todoLists = this.todo.getTodos();
  }
}
