import { Component } from '@angular/core';

@Component({
    selector: 'AngularHelloWorld',
    template: `
    <h1 [style.color]="foreColor" (click)="btnChange_Click()">{{ title }}</h1>
  `
})
export class AngularHelloWorldComponent {
    title: string = "앵귤러 헬로월드";
    foreColor = 'red';
    btnChange_Click(): void {
      this.foreColor = (this.foreColor === 'red') ? 'blue': 'red'; 
    }
}
