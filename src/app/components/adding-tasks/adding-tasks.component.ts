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

  // Ma propriété qui qui va stocker les données du formulaire
  //! Je ne parviens pas à récupérer mes catégories distinctes via [(ngModel)] => voir Manon
  todos: ITodo = {
    id: 1,
    content: '',
    category: ['bills', 'cleaning', 'health', 'other', 'shopping', 'work'],
    isUrgent: false,
    doneDate: null,
  };

  onInit() {
    //! Cela ne me retourne rien ...
    console.log(this.todos.category[0])
  }

  // Je capte mon Formulaire pour utiliser le reset() et vider les inputs
  @ViewChild('myForm') todoForm!: NgForm;

  // J'utilise mon service et intègre sa méthodez addTodos(en paramètre la props todos qui capte les valeurs d'inputs)
  addTodo(todos: ITodo) {
    this.todo.addTodos(todos);
  }

  // Soumission du formulaire
  onSubmit() {
    // Je lis ma tâche
    console.log(this.todos);
    // J'ajoute la tache au localStore
    this.addTodo(this.todos);
    // Je reset les champs du formulaire
    this.todoForm.reset();
    // Je retourne à la page d'accueil
    return this.route.navigate(['/']);
  }

  // Couleurs btn au clic
  btnColor1: string = '#1D2038';
  btnColor2: string = '#1D2038';
  btnColor3: string = '#1D2038';
  btnColor4: string = '#1D2038';
  btnColor5: string = '#1D2038';

  switchBtnColors1() {
    this.btnColor1 = '#F3D24F';
    if (
      this.btnColor2 == '#F3D24F' ||
      this.btnColor3 == '#F3D24F' ||
      this.btnColor4 == '#F3D24F' ||
      this.btnColor5 == '#F3D24F'
    ) {
      this.btnColor2 = '#1D2038';
      this.btnColor3 = '#1D2038';
      this.btnColor4 = '#1D2038';
      this.btnColor5 = '#1D2038';
    }
  }
  switchBtnColors2() {
    this.btnColor2 = '#F3D24F';
    if (
      this.btnColor1 == '#F3D24F' ||
      this.btnColor3 == '#F3D24F' ||
      this.btnColor4 == '#F3D24F' ||
      this.btnColor5 == '#F3D24F'
    ) {
      this.btnColor1 = '#1D2038';
      this.btnColor3 = '#1D2038';
      this.btnColor4 = '#1D2038';
      this.btnColor5 = '#1D2038';
    }
  }
  switchBtnColors3() {
    this.btnColor3 = '#F3D24F';
    if (
      this.btnColor1 == '#F3D24F' ||
      this.btnColor2 == '#F3D24F' ||
      this.btnColor4 == '#F3D24F' ||
      this.btnColor5 == '#F3D24F'
    ) {
      this.btnColor1 = '#1D2038';
      this.btnColor2 = '#1D2038';
      this.btnColor4 = '#1D2038';
      this.btnColor5 = '#1D2038';
    }
  }

  switchBtnColors4() {
    this.btnColor4 = '#F3D24F';
    if (
      this.btnColor1 == '#F3D24F' ||
      this.btnColor2 == '#F3D24F' ||
      this.btnColor3 == '#F3D24F' ||
      this.btnColor5 == '#F3D24F'
    ) {
      this.btnColor1 = '#1D2038';
      this.btnColor2 = '#1D2038';
      this.btnColor3 = '#1D2038';
      this.btnColor5 = '#1D2038';
    }
  }
  switchBtnColors5() {
    this.btnColor5 = '#F3D24F';
    if (
      this.btnColor1 == '#F3D24F' ||
      this.btnColor2 == '#F3D24F' ||
      this.btnColor3 == '#F3D24F' ||
      this.btnColor4 == '#F3D24F'
    ) {
      this.btnColor1 = '#1D2038';
      this.btnColor2 = '#1D2038';
      this.btnColor3 = '#1D2038';
      this.btnColor4 = '#1D2038';
    }
  }
}
