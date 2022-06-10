import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  allForm:any=FormGroup ;
  constructor() { }

  ngOnInit(): void {
    this.allForm= new FormGroup({

    })
   
  }

}
