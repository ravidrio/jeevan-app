import { Component, OnInit } from '@angular/core';
import { ProductService } from "src/app/productservice";
import { Product } from "src/app/product";
// import {MatDatepickerModule,} from '@angular/material/datepicker';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.scss']
})
export class ServiceRequestComponent implements OnInit {
  products: Product[];
  tabview:boolean=false;
  blur:boolean=false;
  selectedProducts: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService. getProductsSmall().then(data => (this.products = data));
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
  closePopup1() {
    this.displayStyle1 = "none";
    this.blur=false;
  }

}
export class DatepickerOverviewExample {}
