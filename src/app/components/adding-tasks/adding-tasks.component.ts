import { Component } from '@angular/core';

@Component({
  selector: 'app-adding-tasks',
  templateUrl: './adding-tasks.component.html',
  styleUrls: ['./adding-tasks.component.css'],
})
export class AddingTasksComponent {
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
