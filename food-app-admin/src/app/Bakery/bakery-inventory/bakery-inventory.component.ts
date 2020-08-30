import { Component, OnInit, ViewChild } from '@angular/core';
import { Bakerycategory } from 'src/app/data-interfaces';
import { BakeryCategoryModel } from 'src/model/BakeryCategoryModel';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DataApiService } from 'src/app/data-api.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/login/login.component';
import { DairyCategoryModel } from 'src/model/DairyCategoryModel';

@Component({
  selector: 'app-bakery-inventory',
  templateUrl: './bakery-inventory.component.html',
  styleUrls: ['./bakery-inventory.component.css']
})
export class BakeryInventoryComponent implements OnInit {

  public categoryService:Bakerycategory;
  errormsg:string;
  public categoryList:any;
  index: number;
  id: number;
  public editFlag=false;
  public addFlag=false;
  public category:BakeryCategoryModel;
  public categoryNameTemp:String;
  public categoryArray:any;
  dataSource = new MatTableDataSource();
  public isValidLogin;
//  @ViewChild(EditgroceryinventoryComponent) editGroceryComponentChild;
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  
  constructor(private router : Router,private dataServiceApi:DataApiService, public dialog: MatDialog) { 

  }
  displayedColumns = ['categoryId', 'categoryName', 'categoryImgUrl','actions'];

  
  ngOnInit(){
    this.editFlag=false;
    this.addFlag=false;
    this.getCategoryDetails();
    this.isValidLogin = LoginComponent.validLogin;
  }

  ngAfterViewInit(){
    
  }
  getCategoryDetails() {
    this.dataServiceApi.getBakeryCategoryDetailsApi().subscribe(
      data =>{
        console.log(data);
        this.categoryService=data;
        this.categoryArray = this.categoryService.categoryList;
        this.categoryList = this.categoryService.categoryList;
        this.dataSource=new MatTableDataSource(this.categoryService.categoryList);
        this.dataSource.paginator = this.paginator;
        this.dataServiceApi.dataChange.value.push(this.categoryArray);
        console.log(this.dataServiceApi.dataChange.value.length);
      },
      error => {
        this.errormsg=error.message;
      }
      
    )
  }
  receiveMessageAdd($event){
    this.addFlag = $event;
    this.getCategoryDetails();
  }
  receiveMessage($event) {
    this.editFlag = $event;
    this.getCategoryDetails();
  }

  /* sendit(data){
    data = data.toLowerCase();
    this.dataSource = this.orderList.filter((order:Order)=>{
    const objData = (order.OrderID+order.UserID+order.HotelID+order.USER_PHONE+order.DeliveryDetails+order.Total_price+order.Status).toLowerCase();
    return objData.includes(data);
   });
}*/

// Second Approach of Filtering
sendit(data){
  data = data.trim(); // Remove whitespace
  data = data.toLowerCase(); // Datasource defaults to lowercase matches
  this.dataSource.filter = data;
}
  showDetails(inventoryName){
    this.editFlag=false;
    this.addFlag=false;
    if(inventoryName=='BakeryCategory'){
      this.router.navigate(["/bakery"]);
    }
    else if(inventoryName=='BakerySubCategory'){
      alert(inventoryName);
      this.router.navigate(["/bakerysubCategory"]);
    }
  }

  addNew() {
    this.category = new BakeryCategoryModel(0,"","");
    this.addFlag = true;
    };

  startEdit(i: number, categoryId: number, categoryName: string, categoryUrl: string) {
    this.id = categoryId;
    this.category = new BakeryCategoryModel(categoryId,categoryName,categoryUrl);
    //this.category.categoryId = categoryId;
    //this.category.categoryName = categoryName;
    //this.category.categoryImgUrl = categoryUrl; 
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(categoryName);
    this.editFlag = true;
}

deleteItem(i: number, categoryId: number, categoryName: string, categoryUrl: string) {
  this.category = new BakeryCategoryModel(categoryId,categoryName,categoryUrl);
  console.log(this.category);
  /*const dialogRef = this.dialog.open(DeleteGroceryCategoryInventoryComponent, {
    data: {category:this.category}
  });
  dialogRef.afterClosed().subscribe(result => {
    alert("hello");
    this.dataSource.data = this.categoryService.categoryList.filter((x)=>x.DairyCategoryId==this.category.DairyCategoryId)
  });*/
}



}
