import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
  ss:any=false;
  blur:boolean=false;
  constructor() { }

  ngOnInit(): void {
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

}
