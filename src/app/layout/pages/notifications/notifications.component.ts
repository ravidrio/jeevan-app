import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  toggleTarget: boolean = false;
  notificationForm:any=FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.notificationForm = new FormGroup({
      Notification_title:new FormControl(),
      exampleNotification_Text:new FormControl(),
      exampleURL:new FormControl(),
      examplename:new FormControl(),
      Target:new FormControl(),
      exampleTarg:new FormControl(),
      examplename1:new FormControl(),
      exampleligible:new FormControl(),
      exampleeluser:new FormControl(),
      goalmetric:new FormControl(),
      analyticalLabel:new FormControl(),
      analyticalLabel2:new FormControl(),
      exampleKey:new FormControl(),
      examplevalue:new FormControl(),
      sound:new FormControl(),

    })
  }
  Target(){
    this.toggleTarget = !this.toggleTarget
    // this.toggleTarget = false;
  }

}
