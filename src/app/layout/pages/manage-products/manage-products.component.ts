import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
  ss:any=false;
  constructor() { }

  ngOnInit(): void {
  }
change(){
    this.ss=false;
  }
changeone(){
    this.ss=true;
  }
}
