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
  // productDialog: boolean;


  // product: Product;

  // selectedProducts: Product[];

  // submitted: boolean;


  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService. getProductsSmall().then(data => (this.products = data));
  }
 
}



