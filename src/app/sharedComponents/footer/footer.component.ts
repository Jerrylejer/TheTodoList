import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private router: Router) {}

  public url: string = '';

  ngOnInit() {
    this.url = this.router.url;
    console.log(this.url);
  }

  matchingUrls() {
    this.url = this.router.url;
    console.log(this.router.url);
    console.log(this.url);
  }

  // Changement couleurs des btn au click
  btnColorListing: string = '#88E7A1';
  btnColorAdd: string = '#1D2038';
  btnColorHistory: string = '#1D2038';

  switchBtnColors1() {
    this.btnColorListing = '#88E7A1';
    if (this.btnColorAdd == '#F3D24F' || this.btnColorHistory == '#E475F1') {
      this.btnColorAdd = '#1D2038';
      this.btnColorHistory = '#1D2038';
    }
    // if(this.url == '/') {
    //   this.btnColorListing = '#88E7A1';
    // } else {
    //   this.btnColorListing = '#1D2038';
    // }
  }
  switchBtnColors2() {
    this.btnColorAdd = '#F3D24F';
    if (
      this.btnColorListing == '#88E7A1' ||
      this.btnColorHistory == '#E475F1'
    ) {
      this.btnColorListing = '#1D2038';
      this.btnColorHistory = '#1D2038';
    }
    // if(this.url == '/myNewTask') {
    //   this.btnColorAdd = '#88E7A1';
    // } else {
    //   this.btnColorAdd = '#1D2038';
    // }
  }
  switchBtnColors3() {
    this.btnColorHistory = '#E475F1';
    if (this.btnColorListing == '#88E7A1' || this.btnColorAdd == '#F3D24F') {
      this.btnColorListing = '#1D2038';
      this.btnColorAdd = '#1D2038';
    }
    // if(this.url == '/myTaskHistory') {
    //   this.btnColorHistory = '#88E7A1';
    // } else {
    //   this.btnColorHistory = '#1D2038';
    // }
  }
}
