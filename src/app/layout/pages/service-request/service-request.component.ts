import { Component, OnInit } from '@angular/core';
// import {MatDatepickerModule,} from '@angular/material/datepicker';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.scss']
})
export class ServiceRequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayStyle = "none";
  displayStyle1 = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  openPopup1() {
    this.displayStyle1 = "block";
  }
  closePopup1() {
    this.displayStyle1 = "none";
  }

}
export class DatepickerOverviewExample {}
