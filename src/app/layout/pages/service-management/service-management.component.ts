import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Product } from 'src/app/product';
import { ProductService } from "src/app/productservice";

@Component({
  selector: 'app-service-management',
  templateUrl: './service-management.component.html',
  styleUrls: ['./service-management.component.scss']
})
export class ServiceManagementComponent implements OnInit {
 
  products: Product[];
  blur1:boolean=false;
  displayStyle: string;
  Services: any;
  toggleTarget: boolean=false;
  toggleTarget1: boolean=false;
  contacts: any;
  FormControl1: any;



  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.productService. getProductsSmall().then(data => (this.products = data));
    this.Services=new FormGroup({
      "banner_name":new FormControl(),
      "Image":new FormControl(),
      "status":new FormControl(),

  })

  
  }

  openPopup() {
    this.displayStyle = "block";
    this.blur1=true;
  }
  closePopup() {
    this.displayStyle = "none";
    this.blur1=false;
  }
  closeSave(){
    console.log(this.Services.value);
    this.displayStyle= "none";
    this.blur1=false;

  }

  Target(){
    this.toggleTarget = !this.toggleTarget
    // this.toggleTarget = false;
  }
  Target1(){
    this.toggleTarget1 = !this.toggleTarget1
    // this.toggleTarget = false;
  }

}
