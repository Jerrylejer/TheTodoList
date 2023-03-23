import { Component } from '@angular/core';
import { ITodo } from 'src/app/interfaces/myTask';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-historic-view',
  templateUrl: './historic-view.component.html',
  styleUrls: ['./historic-view.component.css']
})
export class HistoricViewComponent {
 // Booléen qui gère l'apparition/disparition btn + message d'accueil
 isHide: boolean = false;
  // Mon tableau de l'hystorique
  hystoric: ITodo[] = [];

  constructor(private historic: TasksService) {}

  ngOnInit() {
    //! Je dois cliquer une seconde fois pour afficher la première tâche terminée
    this.getHistoryList();
  }

  // Je récupère la liste des todos de l'historique
  getHistoryList() {
    this.hystoric = this.historic.getHistory();
    console.log(this.hystoric);
  }

}
