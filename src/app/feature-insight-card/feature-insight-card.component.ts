import {Component, OnInit, ViewChild} from '@angular/core';
import DevExpress from "devextreme";
import data = DevExpress.data;
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-feature-insight-card',
  templateUrl: './feature-insight-card.component.html',
  styleUrls: ['./feature-insight-card.component.css']
})

export class FeatureInsightCardComponent implements OnInit{

  constructor() {
  }
  ngOnInit() {



    // @ts-ignore
    var myChart = new Chart("myChart", {
      type: 'doughnut',
      data: {
        labels: ['grocery', 'restaurants', 'fixed expenses', 'savings', 'not categorized', 'other'],
        datasets: [{
          label: "Expenses",
          data: [100, 190, 250, 1500, 200, 300],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
        }]
      },
      options:{
        elements:{
          arc:{
            hoverOffset:45
          },
          line:{
            tension:0
          }
        },
        responsive: true,
        aspectRatio: 1|1,
        scales: {
          y: {
            display: false,
            beginAtZero: true,
            ticks:{
              display: false
            },
            grid:{
              display:false
            },
          },
          x: {
            display: false,
            beginAtZero: true,
            ticks:{
              display: false
            },
            grid:{
              display:false
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Expenses'
          }
        }
      }
    });

  }


}



