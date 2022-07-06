import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/product';
import { ProductService } from "src/app/productservice";

@Component({
  selector: 'app-banner-management',
  templateUrl: './banner-management.component.html',
  styleUrls: ['./banner-management.component.scss']
})
export class BannerManagementComponent implements OnInit {
  products: Product[];
  blur1:boolean=false;
  displayStyle: string;
  addBanner: FormGroup;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService. getProductsSmall().then(data => (this.products = data));

    this.addBanner=new FormGroup({
      "banner_name":new FormControl(),
      "image":new FormControl(),
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
    console.log(this.addBanner.value);
    this.displayStyle= "none";
    this.blur1=false;

  }
}
