import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products-management',
  templateUrl: './products-management.component.html',
  styleUrls: ['./products-management.component.scss']
})
export class ProductsManagementComponent implements OnInit {
  tabview:boolean=false;
  blur1:boolean=false;

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
    this.blur1=true;
  }
  closePopup() {
    this.displayStyle = "none";
    this.blur1=false;
  }
  openPopup1() {
    this.displayStyle1 = "block";
    this.blur1=true;

  }
  closePopup1() {
    this.displayStyle1 = "none";
    this.blur1=false;
  }

}
