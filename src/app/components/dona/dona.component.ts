import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit{
  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: this.dataNueva,
          backgroundColor: this.colorNuevo
        }
      ]
    };
  }

  @Input() title = 'Sin título';
  @Input('data') dataNueva = [ 350, 450, 100 ];
  @Input('color') colorNuevo: string[] = ['#6857E6', '#009FEE', '#F02059'];

  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> ={
    labels: this.doughnutChartLabels,
      datasets: [
        { data: this.dataNueva,
          backgroundColor: this.colorNuevo
        }
      ]
    };
  
  public doughnutChartType: ChartType = 'doughnut';
}
