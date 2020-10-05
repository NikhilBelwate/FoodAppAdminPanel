import { Component, OnInit, ViewChild } from '@angular/core';
import { SubCategory } from 'src/model/SubCategory';
import { EditDairySubcategoryComponent } from 'src/app/Dairy/edit-dairy-subcategory/edit-dairy-subcategory.component';
import { Dairycategory } from 'src/app/data-interfaces';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { DataApiService } from 'src/app/data-api.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/login/login.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-bakery-subcategory-inventory',
  templateUrl: './bakery-subcategory-inventory.component.html',
  styleUrls: ['./bakery-subcategory-inventory.component.css']
})
export class BakerySubcategoryInventoryComponent implements OnInit {

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
        console.log(this.categoryService);
      }
    )
  }

  displayedColumns = ['SubCategoryId', 'SubCategoryName', 'categoryName','SubcategoryPrice','SubCategoryURL','SubCategoryDesc','LocationId','SubCategoryTax','actions'];

  getSubCategoryDetails() {
    this.dataServiceApi.getBakerySubCategoryDetailsApi().subscribe(
      data =>{
        console.log(data);
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
        console.log(this.dataServiceApi.dataChange.value.length);
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
  console.log(this.subCategory);
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
  if(inventoryName=='BakeryCategory'){
    this.router.navigate(["/bakery"]);
  }
  else if(inventoryName=='BakerySubCategory'){
    this.router.navigate(["/bakerysubCategory"]);
  }

}

}
