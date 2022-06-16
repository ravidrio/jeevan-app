import { Component, OnInit } from '@angular/core';
// import {MatDatepickerModule,} from '@angular/material/datepicker';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.scss']
})
export class ServiceRequestComponent implements OnInit {
 
  blur:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  displayStyle = "none";
  displayStyle1 = "none";
  
  openPopup() {
    this.displayStyle = "block";
    this.blur=true;
  }
  closePopup() {
    this.displayStyle = "none";
    this.blur=false;
  }
  openPopup1() {
    this.displayStyle1 = "block";
    this.blur=true;
  }
  closePopup1() {
    this.displayStyle1 = "none";
    this.blur=false;
  }

}
export class DatepickerOverviewExample {}
