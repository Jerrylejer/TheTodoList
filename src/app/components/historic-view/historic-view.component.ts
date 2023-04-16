import { Component } from '@angular/core';
import { ITodo } from 'src/app/interfaces/myTask';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historic-view',
  templateUrl: './historic-view.component.html',
  styleUrls: ['./historic-view.component.css'],
})
export class HistoricViewComponent {
  // Mon tableau de l'historique
  hystoric: ITodo[] = [];

  constructor(private todo: TasksService, private route: Router) {}

  ngOnInit() {
    this.getHistoryList();
  }

  // Je récupère la liste des todos de l'historique
  getHistoryList() {
    this.hystoric = this.todo.getHistory();
    console.log(this.hystoric);
  }

  // Au submit du radioBTN, je capte les données
  todolistButton(selectedTodo: ITodo) {
    // Je récupère mon objet (ma tâche) !!!
    console.log(
      'la tâche sélectionnée pour retourner dans la todolist :',
      selectedTodo
    );
    // J'envoie mon objet le LS de la todolist
    this.todo.addTodos(selectedTodo);
    console.log('index de la tâche qui doit être retournée :', selectedTodo.id);
    // Je supprime la tâche de la liste de l'historique
    this.todo.deleteFromHistoric(selectedTodo.id);
    // Je renvoie à la page de la todolist
    this.route.navigate(['']);
  }
}
