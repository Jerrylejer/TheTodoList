import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // Changement couleurs des btn au click
  btnColorListing: string = '#1D2038';
  btnColorAdd: string = '#1D2038';
  btnColorHistory: string = '#1D2038';

  switchBtnColors1() {
    this.btnColorListing = '#88E7A1';
    if(this.btnColorAdd == '#F3D24F' || this.btnColorHistory == '#E475F1') {
      this.btnColorAdd = '#1D2038';
      this.btnColorHistory ='#1D2038';
    }
  }
  switchBtnColors2() {
    this.btnColorAdd = '#F3D24F';
    if(this.btnColorListing == '#88E7A1' || this.btnColorHistory == '#E475F1') {
      this.btnColorListing = '#1D2038';
      this.btnColorHistory = '#1D2038';
    }
  }
  switchBtnColors3() {
    this.btnColorHistory = '#E475F1';
    if(this.btnColorListing == '#88E7A1' || this.btnColorAdd == '#F3D24F') {
      this.btnColorListing = '#1D2038';
      this.btnColorAdd = '#1D2038';
    }
  }
}
