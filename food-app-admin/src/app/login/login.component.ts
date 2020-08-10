import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Roles } from '../data-interfaces';
import { DataApiService } from '../data-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  roleList:Roles[];
  public static validLogin = false;
  constructor(private router: Router, private _dataApiService:DataApiService) { }

  ngOnInit(): void {
    this._dataApiService.getMasterRolesDetails().subscribe(
      data => {
        this.roleList = data;
      }
    )
  }
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
      LoginComponent.validLogin = true;
     this.router.navigate(["ordertable"]);
    }else {
      LoginComponent.validLogin = false;
      alert("Invalid credentials");
    }
  }

}
