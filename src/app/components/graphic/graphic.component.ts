import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { UserService } from 'src/app/service/user.service';
Chart.register(...registerables);

@Component({
  selector: 'graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.sass']
})
export class GraphicComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getItems().subscribe(data => {
      this.RenderChart(data);
    })
  }

  RenderChart(dataFromDatabase: any[]) {
    new Chart("dochart", {
      type: 'doughnut',

      data: {
        labels: dataFromDatabase.map(item => `${item.firstName} ${item.lastName}`),
        datasets: [{
          label: 'Participation',
          data: dataFromDatabase.map(item => item.participation),
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 28, 1)',
            'rgba(153, 88, 42, 1)',
            'rgba(255, 10, 84, 1)'
          ],
          borderWidth: 0,
        }]
      }
    });
  }

}
