import { Component, Input } from "@angular/core";
import { ProductService } from "src/app/productservice";
import { Product, Product1 } from "src/app/product";

@Component({
    selector: 'app-primeng',
       templateUrl: './primeng.component.html',
       styleUrls: ['./primeng.component.scss']
})
export class PrimengComponent {
    @Input() inp:any
    @Input() type="tablescomponent";
    products: Product[];
    products1: Product1[];

    constructor(private productService: ProductService) {}
  
    ngOnInit() {
      this.productService.getProductsSmall().then(data => (this.products = data));
      this.productService.getProductsLarge().then(TabData1 => (this.products1 = TabData1));

    }
  }
  




// import { Component, ViewChild } from "@angular/core";
// import { Customer, Representative } from "src/app/product";
// import { ProductService } from "src/app/productservice";
// import { MessageService } from "primeng/api";

// @Component({
//   selector: 'app-primeng',
//         templateUrl: './primeng.component.html',
//          styleUrls: ['./primeng.component.scss']
// })
// export class PrimengComponent {
//   customers: Customer[];

//   representatives: Representative[];

//   statuses: any[];

//   loading: boolean = true;

//   activityValues: number[] = [0, 100];

//   constructor(private ProductService: ProductService) {}

//   ngOnInit() {
//     this.ProductService.getCustomersLarge().then(customers => {
//       this.customers = customers;
//       this.loading = false;

//       this.customers.forEach(
//         customer => (customer.date = new Date(customer.date))
//       );
//     });

//     this.representatives = [
//       { name: "Amy Elsner", image: "amyelsner.png" },
//       { name: "Anna Fali", image: "annafali.png" },
//       { name: "Asiya Javayant", image: "asiyajavayant.png" },
//       { name: "Bernardo Dominic", image: "bernardodominic.png" },
//       { name: "Elwin Sharvill", image: "elwinsharvill.png" },
//       { name: "Ioni Bowcher", image: "ionibowcher.png" },
//       { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
//       { name: "Onyama Limba", image: "onyamalimba.png" },
//       { name: "Stephen Shaw", image: "stephenshaw.png" },
//       { name: "XuXue Feng", image: "xuxuefeng.png" }
//     ];

//     this.statuses = [
//       { label: "Unqualified", value: "unqualified" },
//       { label: "Qualified", value: "qualified" },
//       { label: "New", value: "new" },
//       { label: "Negotiation", value: "negotiation" },
//       { label: "Renewal", value: "renewal" },
//       { label: "Proposal", value: "proposal" }
//     ];
//   }
// }





