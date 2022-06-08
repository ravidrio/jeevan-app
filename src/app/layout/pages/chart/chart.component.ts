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
  public barChartLabels: Label[] = ['Reliance Retail', 'Vasanth&Co', 'sony', 'Dealer1', 'Dealer2', 'Dealer3', 'Dealer4','Dealer5','Dealer6'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 40, 1, 56, 55, 40,30,56], label: 'Sales'},
    { data: [28, 48, 40, 19, 6, 27, 10, 44,27], label: 'Service' }
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
// export class TableStripedComponent {

//   elements: any = [
//     {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
//     {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
//     {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
//   ];

//   headE = ['ID', 'First', 'Last', 'Handle'];

// }
export interface PeriodicElement {
 
}