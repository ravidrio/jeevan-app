import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toogleSetting:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  setting(){
    this.toogleSetting=!this.toogleSetting;

  }

}
