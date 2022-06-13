import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products-management',
  templateUrl: './products-management.component.html',
  styleUrls: ['./products-management.component.scss']
})
export class ProductsManagementComponent implements OnInit {
  tabview:boolean=false;

  TabData1:any=[
    { a:"S.No",b:"Product Name",email:"Brand Name",status:"Order Status",seen:"Payment Status", mob:"Payment Method",
    action:"Delivery Charge", total:"Total Amount", name:"Name",phn:"Phone Number",date:"Date",time:"Time", add:"Address",act:"Action"},
  
  ]

  constructor() { }

  ngOnInit(): void {
  }
 changeview(){
    this.tabview=true;
  }
  changeview1(){
    this.tabview=false;
  }
  displayStyle = "none";
  displayStyle1 = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  openPopup1() {
    this.displayStyle1 = "block";
  }
  closePopup1() {
    this.displayStyle1 = "none";
  }
 
  
}
