import { Component } from '@angular/core';
import { ITodo } from 'src/app/interfaces/myTask';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';

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
  constructor(private todo: TasksService, private route: Router) {}

  ngOnInit() {
    // Je récupère ma liste des tâches
    this.getTodoList();
    // Je lance l'initialisation du localStorage "historique"
    this.todo.getHistory();
    // Je lance l'initialisation du localStorage "modification"
    this.todo.getModify();
    // Je lance ma méthode pour l'affichage accueil conditionnel
    this.displayWelcomeMessage();
    console.log('ma liste des tâches', this.todoLists);
  }

  // Méthode pour afficher ou non le bouton + "Aucune tâche pour le moment"
  displayWelcomeMessage() {
    // J'utilise une ternaire plus concise qu'un if => J'ajoute le .length sinon le array vide me fait disparaitre la div
    this.todoLists.length > 0 ? (this.isHide = true) : (this.isHide = false);
  }

  // Je récupère la liste des todos
  getTodoList() {
    this.todoLists = this.todo.getTodos();
  }

  // Au submit du radioBTN, je capte les données
  submitButton(selectedTodo: ITodo) {
    // Je récupère mon objet (ma tâche) !!!
    console.log('la tâche sélectionnée pour suppression :', selectedTodo);
    // J'envoie mon objet dans mon LS Historique
    this.todo.addToHystory(selectedTodo);
    console.log('index de la tâche qui doit être supprimée :', selectedTodo.id);
    // Je supprime la tâche de la liste
    this.todo.deleteOneTask(selectedTodo.id);
    // Je renvoie à la page de l'historique
    this.route.navigate(['myTaskHistory']);
  }

  // Cliquer sur le texte pour renvoyer dans le adding-task AVEC les données de la tâche
  modifyMyTask(selectedTodo: ITodo) {
    // Je récupère mon objet (ma tâche) !!!
    console.log('la tâche sélectionnée pour modification :', selectedTodo);
    // J'ajoute la tache dans le tableau
    this.todo.addToModify(selectedTodo);
    console.log('index de la tâche qui doit être modifiée :', selectedTodo.id);
    // Je renvoie à la page de l'historique pré-remplie
    this.route.navigate(['myNewTask']);
    // Je supprime la tâche de la liste
    this.todo.deleteOneTask(selectedTodo.id);
  }
}
