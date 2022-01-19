import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})

export class Grafica1Component {

  public labels1: string[] = [ 'Download', 'In-Store', 'Mail-Order' ];
  public data1 = [ 100, 100, 300 ];
  public color1 = ['#1111E6', '#777FEE', '#F33333'];
  
  public labels2: string[] = [ 'Tacos', 'Tortas', 'Quesadillas' ];
  public data2 = [ 130, 80, 150 ];
  public color2 = ['#8887E6', '#589FFF', '#F89739'];

  public labels3: string[] = [ 'Soccer', 'Americano', 'Tenis' ];
  public data3 = [ 50, 35, 15 ];
  public color3 = ['#8266E6', '#670FEE', '#F49940'];

}
