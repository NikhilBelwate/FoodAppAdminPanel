import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['@angular/material/prebuilt-themes/purple-green.css','./app.component.css']
})
export class AppComponent {
  title = 'food-app-admin';

  loginStatus:string="Logout";

  constructor(private router : Router){

  }

  logout(){
    if(this.loginStatus==="Login"){
        this.loginStatus="Logout";
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
