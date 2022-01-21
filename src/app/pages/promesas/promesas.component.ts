import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(users => {
      console.log(users);
    });

    // const promesa = new Promise(( resolve, reject ) => {
      
    //   if(true) {
    //     resolve('Hola mundo');
    //   } else {
    //     reject('algo salió mal');
    //   }
        

    // });

    // promesa
    //   .then(( mensaje ) => {
    //     console.log(mensaje);
    //   })
    //   .catch(( mensaje ) => {
    //     console.log('Error ', mensaje);
    //   });

    // console.log('Fin del Init');
  }

  getUsuarios() {
    
    const promesa = new Promise( resolve =>
      {
        fetch('https://reqres.in/api/users')
          .then( resp => resp.json())
          .then( body => resolve(body.data) );
      })
      
      return promesa;
  };

}
