import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["ordertable"]);
    }else {
      alert("Invalid credentials");
    }
  }

}
