import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  lastUpdate = new Date();

  appareils = [
    {
      name: 'Machine à laver',
      status: 'eteint'
    },
    {
      name: 'Télévision',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'eteint'
    },
  ];

  constructor() {
    setTimeout(() => {
      this.isAuth = true
    }, 4000);
  }
  onAllumer() {
    console.log('Onallume tout');
  }
}
