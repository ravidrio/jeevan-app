import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { DashboardComponent } from './layout/pages/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { ChartComponent } from './layout/pages/chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule} from "angular-progress-bar";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TablesComponent } from './layout/tables/tables.component';
import { LoginComponent } from './login/login.component';
import { ProductsManagementComponent } from './layout/pages/products-management/products-management.component';
import { OrgtableComponent } from './layout/pages/orgtable/orgtable.component';
import { ServiceRequestComponent } from './layout/pages/service-request/service-request.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageProductsComponent } from './layout/pages/manage-products/manage-products.component';
import { NotificationsComponent } from './layout/pages/notifications/notifications.component';
import { PaymentsComponent } from './layout/pages/payments/payments.component';
import { ProductService } from './productservice';
import {PrimengComponent} from './primeng/primeng.component';
import { TableModule } from 'primeng/table';







import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    LayoutComponent,
    ChartComponent,
    TablesComponent,
    LoginComponent,
    ProductsManagementComponent,
    OrgtableComponent,
    ServiceRequestComponent,
    ManageProductsComponent,
    NotificationsComponent,
    PaymentsComponent,PrimengComponent



  ],
imports: [
   BrowserModule,
  AppRoutingModule,
  ChartsModule,
  FormsModule,
  ProgressBarModule,
  NgbModule,
  BrowserAnimationsModule,
  HttpClientModule,

   

 ],
 
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
