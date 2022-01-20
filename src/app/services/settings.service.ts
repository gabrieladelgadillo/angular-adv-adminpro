import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private lickTheme = document.querySelector('#theme');

  constructor() {
    const url = localStorage.getItem('theme') || './assets/css/colors/blue-dark.css';
    this.lickTheme?.setAttribute('href', url);
   }

   changeTheme( theme: string ) {
    const url = `./assets/css/colors/${ theme }.css`;

    this.lickTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');

    links.forEach( elem => {

      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme')
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.lickTheme?.getAttribute('href');

      if (btnThemeUrl === currentTheme)
      {
        elem.classList.add('working');
      }
    });
  }

}
