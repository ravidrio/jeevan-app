import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './layout/pages/dashboard/dashboard.component';
import { TablesComponent } from './layout/tables/tables.component';
import {LoginComponent} from'./login/login.component';
import { ProductsManagementComponent } from './layout/pages/products-management/products-management.component';
import { OrgtableComponent } from './layout/pages/orgtable/orgtable.component';
import { ServiceRequestComponent } from './layout/pages/service-request/service-request.component';
import { ManageProductsComponent } from './layout/pages/manage-products/manage-products.component';
import { NotificationsComponent } from './layout/pages/notifications/notifications.component';
import { PaymentsComponent } from './layout/pages/payments/payments.component';
import { PrimengComponent } from 'src/app/primeng/primeng.component';
const routes: Routes = [
  {
    path:'',
  component:LoginComponent,

  // DashboardComponent,

  
},
{
  path:'login',
component:LoginComponent,

// DashboardComponent,


},
{
  path:'layout',
  component:LayoutComponent,
children:[{
  path:'',
  redirectTo:'dashboard',
  pathMatch:'full'
},

  {
    path:'dashboard',
  component:DashboardComponent,
  
  },
{
  path:'tablescomponent',
component:TablesComponent,

},
{
  path:'OrgtableComponent',
component:OrgtableComponent,

},
{
  path:'ProductsManagementComponent',
component:ProductsManagementComponent,

},
{
  path:'ServiceRequestComponent',
component:ServiceRequestComponent,

},
{
path:'ManageProductsComponent',
component:ManageProductsComponent,

},
{
  path:'NotificationsComponent',
  component:NotificationsComponent,
  
  },
  {
    path:'PaymentsComponent',
    component:PaymentsComponent,
    
    },
    {
      path:'PrimengComponent',
      component:PrimengComponent,
      
      },
]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
