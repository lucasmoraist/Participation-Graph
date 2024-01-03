import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.sass']
})
export class GraphicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.RenderChart();
  }

  RenderChart() {
    new Chart("dochart", {
      type: 'doughnut',
      
      data: {
        labels: ['Carlos Moura', 'Fernanda Oliveira', 'Hugo Silva', 'Eliza Souza', 'Anderson Santos'],
        datasets: [{
          label: 'Participation',
          data: [5, 15, 20, 20, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 0,
        }]
      },
    });
  }

}
