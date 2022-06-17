import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any=FormGroup ;

  constructor() { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      "form3Example3":new FormControl(),
      "form3Example4":new FormControl()
    })


  }
  submit(){
    console.log(this.loginForm.value);
  }
}
 