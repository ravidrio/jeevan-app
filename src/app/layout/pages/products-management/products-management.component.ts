import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-products-management',
  templateUrl: './products-management.component.html',
  styleUrls: ['./products-management.component.scss']
})
export class ProductsManagementComponent implements OnInit {
  tabview:boolean=false;
  blur1:boolean=false;
  editDetails:any=FormGroup;

  TabData1:any=[
    { a:"S.No",b:"Product Name",email:"Brand Name",status:"Order Status",seen:"Payment Status", mob:"Payment Method",
    action:"Delivery Charge", total:"Total Amount", name:"Name",phn:"Phone Number",date:"Date",time:"Time", add:"Address",act:"Action"},
  
  ]

  constructor() { }

  ngOnInit(): void {
    this.editDetails=new FormGroup({
      "Product_Name" : new FormControl(),
      "Payment_Status" : new FormControl(),
      "Payment_Method" : new FormControl(),
    })
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
  submit(){
    console.log(this.editDetails.value);
    this.displayStyle1 = "none";
    this.blur1=false;
  }
}
