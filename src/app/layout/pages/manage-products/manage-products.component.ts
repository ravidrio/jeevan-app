import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/product';
import { ProductService } from "src/app/productservice";
declare var $:any
@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
  products: Product[];
  tabview:boolean=false;
  addproducts:any=FormGroup;
  ss:boolean=false;
  blur:boolean=false;
  constructor(private productService: ProductService) {}



  ngOnInit(): void {
    this.productService. getProductsSmall().then(data => (this.products = data));
    this.addproducts=new FormGroup({
      "product_name":new FormControl(),
      "brand_name":new FormControl(),
      "Image":new FormControl(),
      "Description":new FormControl(),
      "fixed_price":new FormControl(),
      "offer_price":new FormControl(),

  })
  }
  displayStyle = "none";
  displayStyle1 = "none";
  changeview(){
    this.tabview=true;
  }
  changeview1(){
    this.tabview=false;
  }
change(){
    this.ss=false;
  }
changeone(){
    this.ss=true;
  }

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
  submit(){
    console.log(this.addproducts.value);
  }
  closeSave(){
    console.log(this.addproducts.value);
    this.displayStyle1 = "none";
    this.blur=false;

  }
}
