import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'food-app-admin';

  loginStatus:string="Logout";

  isValidLogin;

  selectedTab = "showOrders";
  constructor(private router : Router){

  }
  ngOnInit(): void {
  }

  logout(){
    if(this.loginStatus==="Login"){
        this.loginStatus="Logout";
        this.isValidLogin = LoginComponent.validLogin;
    }else{
      this.loginStatus="Login";
    }
    this.router.navigate(["/"]);
  }
  showOrders(){
    this.router.navigate(["/ordertable"]);
  }
  showDetails(inventoryName){
    this.loginStatus="Logout";
    if(inventoryName=='Grocery'){
      this.selectedTab = inventoryName;
      this.router.navigate(["/grocery"]);
    }
    else if(inventoryName=='Food'){
      this.router.navigate(["/ordertable"]);
    }else if(inventoryName=='Dairy'){
      this.router.navigate(["/dairy"]);
    }
    else if(inventoryName=='FishMeat'){
      this.router.navigate(["/fishmeat"]);
    }
  }

}
