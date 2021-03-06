import { Component, OnInit, ViewChild } from '@angular/core';
import { FishMeatcategory } from 'src/app/data-interfaces';
import { FishMeatCategoryModel } from 'src/model/FishMeatCategoryModel';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { DataApiService } from 'src/app/data-api.service';
import { MatDialog } from '@angular/material/dialog';
import { DairyCategoryModel } from 'src/model/DairyCategoryModel';

@Component({
  selector: 'app-fishmeat-inventory',
  templateUrl: './fishmeat-inventory.component.html',
  styleUrls: ['./fishmeat-inventory.component.css']
})
export class FishmeatInventoryComponent implements OnInit {

  public categoryService:FishMeatcategory;
  errormsg:string;
  public categoryList:any;
  index: number;
  id: number;
  public editFlag=false;
  public addFlag=false;
  public category:FishMeatCategoryModel;
  public categoryNameTemp:String;
  public categoryArray:any;
  public dataSource;
//  @ViewChild(EditgroceryinventoryComponent) editGroceryComponentChild;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  
  constructor(private router : Router,private dataServiceApi:DataApiService, public dialog: MatDialog) { 

  }
  displayedColumns = ['categoryId', 'categoryName', 'categoryImgUrl','actions'];

  
  ngOnInit(){
    this.editFlag=false;
    this.addFlag=false;
    this.getCategoryDetails();
  }

  ngAfterViewInit(){
    
  }
  getCategoryDetails() {
    this.dataServiceApi.getFishMeatCategoryDetailsApi().subscribe(
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
    if(inventoryName=='FishMeatCategory'){
      this.router.navigate(["/fishmeat"]);
    }
    else if(inventoryName=='FishMeatSubCategory'){
      //alert(inventoryName);
      this.router.navigate(["/fishmeatsubCategory"]);
    }
  }

  addNew() {
    this.category = new FishMeatCategoryModel(0,"","");
    this.addFlag = true;
    };

  startEdit(i: number, categoryId: number, categoryName: string, categoryUrl: string) {
    this.id = categoryId;
    this.category = new FishMeatCategoryModel(categoryId,categoryName,categoryUrl);
    //this.category.categoryId = categoryId;
    //this.category.categoryName = categoryName;
    //this.category.categoryImgUrl = categoryUrl; 
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(categoryName);
    this.editFlag = true;
}

deleteItem(i: number, categoryId: number, categoryName: string, categoryUrl: string) {
  this.category = new FishMeatCategoryModel(categoryId,categoryName,categoryUrl);
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
