import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';




@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent  {
  public barChartOptions: ChartOptions= {
    responsive: true,
  };
  inpData=[
    { body:"03/11/0222",body1:"120"},
    {body:"05/0/2006",body1:"56"},
  
  ]
  inpData1:any=[
    { a:"Date",b:"Total Orders"},
  
  ]
  public barChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 40, 1, 56, 55, 40,30,56,45,89,59], label: 'Sales'},
    { data: [28, 48, 40, 19, 6, 27, 10, 44,27,56,89,100], label: 'Service' }
  ];
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Order', 'Placed'], ['Order', 'Delivered'], ['Service','Placed'],['Pending','service'],['pending','order'],['completed','service'],];
  public pieChartData: SingleDataSet = [200, 150, 100,54,50,46];
  public pieChartType: ChartType = 'doughnut';
  public pieChartLegend = true;
  public pieChartPlugins = [];


  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();

  }
  

  ngOnInit() {
  }

}

export class NgbdProgressbarLabels {
}

export interface PeriodicElement {
 
}