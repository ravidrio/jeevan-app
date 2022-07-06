import { Component, OnInit } from '@angular/core';
import { ProductService } from "src/app/productservice";
import { Product } from "src/app/product";
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
// import {MatDatepickerModule,} from '@angular/material/datepicker';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.scss']
})
export class ServiceRequestComponent implements OnInit {
  model: NgbDateStruct;
  products: Product[];
  tabview:boolean=false;
  blur:boolean=false;
  selectedProducts: Product[];
  name: any;
  pno: any; address:any;
  clr: boolean=false;
  editServicedetails: any;


  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService. getProductsSmall().then(data => (this.products = data));
    this.editServicedetails=new FormGroup({
      "Booking_Date" : new FormControl(),
      "Request_Status" : new FormControl(),
    })
  }
  changeview(){
    this.tabview=true;
    this.clr = !this.clr;
  }
  changeview1(){
    this.tabview=false;
    this.clr = !this.clr;
  }
  displayStyle = "none";
  displayStyle1 = "none";
  displayStyle2= "none";
  
  openPopup(item:any) {
    console.log(item)
    this.displayStyle = "block";
    this.name=item.name;
    this.pno=item.pno;
    this.address=item.address;
    this.blur=true;
  
  }
  closePopup() {
    this.displayStyle = "none";
    this.blur=false;
  }
  openPopup1() {

    this.displayStyle1 = "block";
    this.blur=true;
  }
  openInfo() {

    this.displayStyle2 = "block";
    this.blur=true;
  }
  closeInfo() {
    this.displayStyle2 = "none";
    this.blur=false;
  }
  closePopup1() {
    this.displayStyle1 = "none";
    this.blur=false;
  }
  submit(){
    console.log(this.editServicedetails.value);
    this.displayStyle1 = "none";
    this.blur=false;
  }
}
export class DatepickerOverviewExample {}
