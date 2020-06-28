import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['@angular/material/prebuilt-themes/purple-green.css','./app.component.css']
})
export class AppComponent {
  title = 'food-app-admin';

  constructor(private router : Router){

  }
  showDetails(inventoryName){
    if(inventoryName=='Grocery'){
      this.router.navigate(["/grocery"]);
    }
    else if(inventoryName=='Food'){
      this.router.navigate(["/ordertable"]);
    }else if(inventoryName=='Dairy'){
      this.router.navigate(["/dairy"]);
    }
  }
}
