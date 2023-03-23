import { Component } from '@angular/core';
import { ITodo } from 'src/app/interfaces/myTask';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-historic-view',
  templateUrl: './historic-view.component.html',
  styleUrls: ['./historic-view.component.css']
})
export class HistoricViewComponent {

  // Mon tableau de l'hystorique
  hystoric: ITodo[] = [];
  constructor(private historic: TasksService) {}
}
