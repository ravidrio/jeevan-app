import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/product';
import { ProductService } from "src/app/productservice";
declare var $: any
@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
  model: NgbDateStruct;
  products: Product[];
  tabview: boolean = false;
  addproducts: any = FormGroup;
  ss: boolean = false;
  blur: boolean = false;
  clr: boolean = false;
  constructor(private productService: ProductService) { }



  ngOnInit(): void {
    this.productService.getProductsSmall().then(data => (this.products = data));
    this.addproducts = new FormGroup({
      "product_name": new FormControl(),
      "brand_name": new FormControl(),
      "Image": new FormControl(),
      "Description": new FormControl(),
      "fixed_price": new FormControl(),
      "offer_price": new FormControl(),

    })
  }
  displayStyle = "none";
  displayStyle1 = "none";
  displayStyleedit = "none";
  displayStyleinfo = "none";
  changeview() {
    this.tabview = true;
    this.clr = !this.clr;
  }
  changeview1() {
    this.tabview = false;
    this.clr = !this.clr;
  }
  change() {
    this.ss = false;
  }
  changeone() {
    this.ss = true;
  }

  openPopup() {
    this.displayStyle = "block";
    this.blur = true;
  }
  openPopupedit() {
    this.displayStyleedit = "block";
    this.blur = true;
  }
  closePopupedit() {
    this.displayStyleedit = "none";
    this.blur = false;
  }
  opendisplayStyleinfo() {
    this.displayStyleinfo = "block";
    this.blur = true;
  }
  closedisplayStyleinfo() {
    this.displayStyleinfo = "none";
    this.blur = false;
  }
  closePopup() {
    this.displayStyle = "none";
    this.blur = false;
  }
  openPopup1() {
    this.displayStyle1 = "block";
    this.blur = true;
  }
  closePopup1() {
    this.displayStyle1 = "none";
    this.blur = false;
  }
  submit() {
    console.log(this.addproducts.value);
  }
  closeSave() {
    console.log(this.addproducts.value);
    this.displayStyle1 = "none";
    this.blur = false;

  }
  // bg(){
  //    this.clr=false;
  // }
  // bg1(){
  //   this.clr=true;
  // }
}
