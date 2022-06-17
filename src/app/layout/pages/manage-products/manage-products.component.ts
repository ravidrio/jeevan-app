import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
declare var $:any
@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
  addproducts:any=FormGroup;
  ss:boolean=false;
  blur:boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.addproducts=new FormGroup({
      "product_name":new FormControl(),
      "brand_name":new FormControl(),
      "Image":new FormControl(),
      "Description":new FormControl(),
      "fixed_price":new FormControl(),
      "offer_price":new FormControl(),

  })
  }
change(){
    this.ss=false;
  }
changeone(){
    this.ss=true;
  }
  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
    this.blur=true;
    // console.log("blur")
    //   $("blur").addClass("modal-backdrop fade show");
      // if(this.displayStyle){
      //   e.target.parentElement.classList.addClass("modal-backdrop fade show")
      // }
      // else{
      //   e.target.parentElement.classList.removeClass("toggle")
      // }
      // console.log(e.target.parentElement.classList)

  }
  closePopup() {
    this.displayStyle = "none";
    this.blur=false;
    // $("blur").removeClass("modal-backdrop fade show"); 
  }
  submit(){
    console.log(this.addproducts.value);
  }
}
