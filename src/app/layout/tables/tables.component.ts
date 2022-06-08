import { Component, OnInit, } from '@angular/core';



@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
 
  TabData1:any=[
    { a:"S.No",b:"Product Name",email:"Brand Name",status:"Order Status",seen:"Payment Status", mob:"Payment Method",
    action:"Delivery Charge", total:"Total Amount", name:"Name",phn:"Phone Number",date:"Date",time:"Time", add:"Address",act:"Action"},
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}