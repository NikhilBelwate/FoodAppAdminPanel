import { Component, OnInit, ViewChild } from '@angular/core';
import { DataApiService } from '../../data-api.service';
import { SubCategory } from 'src/model/SubCategory';
import { MatTableDataSource } from '@angular/material/table';
import { DairyCategoryModel } from 'src/model/DairyCategoryModel';
import { Dairycategory, DairySubCategory } from '../../data-interfaces';
import { Router } from '@angular/router';
//import { DeleteGrocerySubcategoryInventoryComponent } from '../delete-grocery-subcategory-inventory/delete-grocery-subcategory-inventory.component';
import { MatDialog } from '@angular/material/dialog';
import { EditDairySubcategoryComponent } from '../edit-dairy-subcategory/edit-dairy-subcategory.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { LoginComponent } from 'src/app/login/login.component';



@Component({
  selector: 'app-dairy-subcategory-inventory',
  templateUrl: './dairy-subcategory-inventory.component.html',
  styleUrls: ['./dairy-subcategory-inventory.component.css']
})
export class DairySubcategoryInventoryComponent implements OnInit {

  subCategoryList:SubCategory[];
  filterSubCategoryList:SubCategory[];
  public edit:EditDairySubcategoryComponent;
  public categoryService:Dairycategory;
  public subCategory:SubCategory;
  public editFlag=false;
  public addFlag=false;
  public dataSource;
  public isValidLogin;
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  constructor(private dataServiceApi:DataApiService,private router : Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.editFlag=false;
    this.addFlag=false;
    this.getCategoryList();
    this.getSubCategoryDetails();
    this.isValidLogin = LoginComponent.validLogin;
  }
  getCategoryList() {
    this.dataServiceApi.getDairyCategoryDetailsApi().subscribe(
      data=>{
        this.categoryService = data;
      }
    )
  }

  displayedColumns = ['SubCategoryId', 'SubCategoryName', 'categoryName','SubcategoryPrice','SubCategoryURL','SubCategoryDesc','LocationId','SubCategoryTax','actions'];

  getSubCategoryDetails() {
    this.dataServiceApi.getDairySubCategoryDetailsApi().subscribe(
      data =>{
        this.subCategoryList=data.items;
        this.dataSource=new MatTableDataSource(data.items);
        this.dataSource.paginator = this.paginator;
        this.filterSubCategoryList = this.subCategoryList;
        // Getting the name of the category from the category Id and mapping it in the Sub Category List
        this.subCategoryList.map(x=>{
          x.CategoryName=this.categoryService.categoryList.find(y=>y.DairyCategoryId===x.CategoryId).CategoryName
        });
       this.subCategoryList.filter(x=>this.categoryService.categoryList.find(y=>y.DairyCategoryId===x.CategoryId))
       
        const matTable =  new MatTableDataSource(this.subCategoryList);
        
        //this.dataServiceApi.dataChange.value.push(this.categoryArray);
        //console.log(this.dataServiceApi.dataChange.value.length);
      },
      error => {
        //this.errormsg=error.message;
      }
      
    )
  }

  addNew() {
    this.subCategory = new SubCategory();
    this.addFlag = true;
    };

  startEdit(subCategory:SubCategory) {
    this.subCategory = new SubCategory();
    this.subCategory = subCategory;
    this.editFlag = true;
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
deleteItem(subCategory:SubCategory) {
  this.subCategory = new SubCategory();
  this.subCategory = subCategory;
 // console.log(this.subCategory);
  /*const dialogRef = this.dialog.open(DeleteGrocerySubcategoryInventoryComponent, {
    data: {subCategory:this.subCategory}
  });
  dialogRef.afterClosed().subscribe(result => {
    this.subCategoryList = this.subCategoryList.filter((x)=>x.SubCategoryId!=this.subCategory.SubCategoryId);
  });*/
}
receiveMessage($event) {
  this.editFlag = $event;
  this.getSubCategoryDetails();
}
receiveMessageAdd($event){
  this.addFlag  = $event;
  this.getSubCategoryDetails();
}
showDetails(inventoryName){
  this.editFlag=false;
  this.addFlag=false;
  if(inventoryName=='DairyCategory'){
    this.router.navigate(["/dairy"]);
  }
  else if(inventoryName=='DairySubCategory'){
    this.router.navigate(["/dairysubCategory"]);
  }

}

}
