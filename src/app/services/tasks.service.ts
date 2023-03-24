import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/myTask';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  // Ma propriété qui qui va stocker les données du formulaire
  todos: ITodo = {
    id: 1,
    content: '',
    category: '',
    isUrgent: false,
    doneDate: null,
  };

  //TODO MES METHODES POUR LA LISTE DES TACHES
  // Création du localStorage
  createTodosStore() {
    const myTodo: ITodo[] = [];
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
    console.log('Ma todoList :', todoList);
  }

  // Ajouter une tache au LS (pas de vérification pour commencer)
  addTodos(todos: ITodo) {
    // Je récupère ma liste de tâche ou j'en créé une
    const storage = this.getTodos();
    // Je push ma tache dans le tableau
    storage.push(todos);
    localStorage.setItem('todo', JSON.stringify(storage));
  }

  // Supprimer une tâche de la liste
  deleteOneTask(id: number) {
    // Je récupère ma liste des tâches
    const storage = this.getTodos();
    // Le findIndex renvoie l'index de chaque objet DU TABLEAU STORAGE
    const itemIndex = storage.findIndex((item: ITodo) => item.id === id)
    // Méthode splice qui prend en compte l'itemIndex (1er arg) et supprime le nombre d'éléments à patir de celui-ci (2ème arg)
    //! La dernière tâche qui reste ne s'efface pas de la liste
    storage.splice(itemIndex, 1);
    // Je renvoie dans le LS le nouveau tableau des todos mis à jour
    localStorage.setItem('todo', JSON.stringify(storage));
  }

  // Création de l'index dynamique pour la tâche (todos.id)
  addNewId(): number {
    // Je récupère ma liste de tâche ou j'en créé une
    const storage = this.getTodos();
    // Je récupère mon champ todos.id dans une prop
    let myId: number = this.todos.id;
    // Je créé un index égale à la longueur du tableau des taches
    myId = storage.length;
    //  Je retourne ma props
    return myId;
  }

  //TODO MES METHODES POUR MON HISTORIQUE
  // Création de l'espace historique dans le LS
  createTodosHystory() {
    const myHystoric: [] = [];
    const stringifyMyHystoric = JSON.stringify(myHystoric);
    localStorage.setItem('hystory', stringifyMyHystoric);
  }

  // Récupération la liste de l'historique ou création dans LS
  getHistory() {
    const hystoryList = localStorage.getItem('hystory');
    if (hystoryList) {
      return JSON.parse(hystoryList);
    } else {
      this.createTodosHystory();
      this.getHistory();
    }
    console.log('Ma liste historique :', hystoryList);
  }

  // Ajouter une tache à l'historique
  addToHystory(hystoric: ITodo) {
    // Je récupère ma liste de tâche ou j'en créé une
    const storage = this.getHistory();
    // Push des données dans mon tableau d'historique
    storage.push(hystoric);
    localStorage.setItem('hystory', JSON.stringify(storage));
  }
}
