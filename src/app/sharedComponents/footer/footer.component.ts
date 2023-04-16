import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.router.url);
    // this.colorButton();
    this.buttonColorOnChange();
  }
  // Changement couleurs des btn au click
  btnColorListing!: string;
  btnColorAdd!: string;
  btnColorHistory!: string;

  // Utilisation d'un observable qui utilise la méthode events et surveille le succès de chargement d'une l'url
  buttonColorOnChange() {
    this.router.events.subscribe((event) => {
      // Si l'évènement est une instance de l'évènement "NavigationEnd" => Url chargée et page loadée avec succès
      // An event triggered when a navigation ends successfully.
      // @see — NavigationStart
      // @see — NavigationCancel
      // @see — NavigationError
      if (event instanceof NavigationEnd) {
        const url = event.url;
        if (url === '/') {
          this.btnColorListing = '#88E7A1';
          console.log('home');
        } else {
          this.btnColorListing = '#1D2038';
        }
        if (url === '/myNewTask') {
          this.btnColorAdd = '#F3D24F';
          console.log('newTask');
        } else {
          this.btnColorAdd = '#1D2038';
        }
        if (url === '/myTaskHistory') {
          this.btnColorHistory = '#E475F1';
          console.log('history');
        } else {
          this.btnColorHistory = '#1D2038';
        }
      }
    });
  }

  // NE MARCHAIT QUE AU CLICK SUR LE BTN !!! Ici pour le souvenir +

  // switchBtnColors1() {
  //   this.btnColorListing = '#88E7A1';
  //   if (this.btnColorAdd == '#F3D24F' || this.btnColorHistory == '#E475F1') {
  //     this.btnColorAdd = '#1D2038';
  //     this.btnColorHistory = '#1D2038';
  //   }
  // }
  // switchBtnColors2() {
  //   this.btnColorAdd = '#F3D24F';
  //   if (
  //     this.btnColorListing == '#88E7A1' ||
  //     this.btnColorHistory == '#E475F1'
  //   ) {
  //     this.btnColorListing = '#1D2038';
  //     this.btnColorHistory = '#1D2038';
  //   }
  // }
  // switchBtnColors3() {
  //   this.btnColorHistory = '#E475F1';
  //   if (this.btnColorListing == '#88E7A1' || this.btnColorAdd == '#F3D24F') {
  //     this.btnColorListing = '#1D2038';
  //     this.btnColorAdd = '#1D2038';
  //   }
  // }
}
