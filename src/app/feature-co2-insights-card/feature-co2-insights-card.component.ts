import {Component, OnInit} from '@angular/core';
import { Chart, registerables  } from 'chart.js';
import * as ChartAnnotation from 'chartjs-plugin-annotation';


Chart.register(...registerables);

@Component({
  selector: 'app-feature-co2-insights-card',
  templateUrl: './feature-co2-insights-card.component.html',
  styleUrls: ['./feature-co2-insights-card.component.css']
})
export class FeatureCo2InsightsCardComponent implements OnInit {


  ngOnInit() {
    // @ts-ignore
    var co2Chart = new Chart("co2Chart",{
      type: 'line',
      data :{
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }],

    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
      plugins: {
       annotation: {
        annotations: [{
          type: 'line',
          scaleID: 'y-axis-0',
          value: 5,
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 4,
          label: {
            content: 'Test label'
          }
        }]
      }}
    }})
  }


}
