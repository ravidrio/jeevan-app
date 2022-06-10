// import { Component, Input } from "@angular/core";
// import { ProductService } from "src/app/productservice";
// import { Product, Product1 } from "src/app/product";

// @Component({
//     selector: 'app-primeng',
//        templateUrl: './primeng.component.html',
//        styleUrls: ['./primeng.component.scss']
// })
// export class PrimengComponent {
//     @Input() inp:any
//     @Input() type="tablescomponent";
//     products: Product[];
//     products1: Product1[];

//     constructor(private productService: ProductService) {}
  
//     ngOnInit() {
//       this.productService.getProductsSmall().then(data => (this.products = data));
//       this.productService.getProductsLarge().then(TabData1 => (this.products1 = TabData1));

//     }
//   }
  



  import { Component } from "@angular/core";
  import { ProductService } from "src/app/productservice";
  import { Product } from "src/app/product";
  
  @Component({
    selector: 'app-primeng',
     templateUrl: './primeng.component.html',
        styleUrls: ['./primeng.component.scss']
  })
  export class PrimengComponent {
    products: Product[];
  
    constructor(private productService: ProductService) {}
  
    ngOnInit() {
      this.productService.getProductsSmall().then(data => (this.products = data));
    }
  }





