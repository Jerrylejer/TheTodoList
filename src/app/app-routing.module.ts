import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksHistoryComponent } from './pages/tasks-history/tasks-history.component';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';
import { TasksNewComponent } from './pages/tasks-new/tasks-new.component';

const routes: Routes = [
  {
    path: '',
    component: TasksListComponent
  },
  {
    path: 'myNewTask',
    component: TasksNewComponent
  },
  {
    path: 'myTaskHistory',
    component: TasksHistoryComponent
  },
  // Dans l'attente d'une vraie 404
  // {
  //   path: '**',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
