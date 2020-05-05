import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../data-api.service';
import { SubCategory } from 'src/model/SubCategory';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/model/Category';
import { Grocerycategory } from '../data-interfaces';
import { Router } from '@angular/router';
import { DeleteGrocerySubcategoryInventoryComponent } from '../delete-grocery-subcategory-inventory/delete-grocery-subcategory-inventory.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-grocery-subcategory-inventory',
  templateUrl: './grocery-subcategory-inventory.component.html',
  styleUrls: ['./grocery-subcategory-inventory.component.css']
})
export class GrocerySubcategoryInventoryComponent implements OnInit {

  subCategoryList:SubCategory[];
  filterSubCategoryList:SubCategory[];
  public categoryService:Grocerycategory;
  public subCategory:SubCategory;
  public editFlag=false;
  public addFlag=false;
  constructor(private dataServiceApi:DataApiService,private router : Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.editFlag=false;
    this.addFlag=false;
    this.getCategoryList();
    this.getSubCategoryDetails();
  }
  getCategoryList() {
    this.dataServiceApi.getGroceryCategoryDetailsApi().subscribe(
      data=>{
        this.categoryService = data;
        console.log(this.categoryService);
      }
    )
  }

  displayedColumns = ['SubCategoryId', 'SubCategoryName', 'categoryName','SubcategoryPrice','SubCategoryURL','SubCategoryDesc','LocationId','actions'];

  getSubCategoryDetails() {
    this.dataServiceApi.getGrocerySubCategoryDetailsApi().subscribe(
      data =>{
        console.log(data);
        this.subCategoryList=data;
        this.filterSubCategoryList = this.subCategoryList;
        // Getting the name of the category from the category Id and mapping it in the Sub Category List
        this.subCategoryList.map(x=>{
          x.categoryName=this.categoryService.categoryList.find(y=>y.categoryId===x.categoryId).categoryName
        });
       this.subCategoryList.filter(x=>this.categoryService.categoryList.find(y=>y.categoryId===x.categoryId))
       
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

sendit(data){
    data = data.toLowerCase();
    this.subCategoryList = this.filterSubCategoryList.filter((subCat:SubCategory)=>{
    const objData = (subCat.subCategoryName+subCat.subCategoryPrice+subCat.subCategoryUrl+subCat.Unit+subCat.categoryName+subCat.subCategoryDesc+subCat.locationId+subCat.subCategoryPrice+subCat.subCategoryTax+subCat.subCategoryId).toLowerCase();
    return objData.includes(data);
   });
}
deleteItem(subCategory:SubCategory) {
  this.subCategory = new SubCategory();
  this.subCategory = subCategory;
  console.log(this.subCategory);
  const dialogRef = this.dialog.open(DeleteGrocerySubcategoryInventoryComponent, {
    data: {subCategory:this.subCategory}
  });
  dialogRef.afterClosed().subscribe(result => {
    this.getSubCategoryDetails();
  });
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
  if(inventoryName=='Grocery'){
    this.router.navigate(["/grocery"]);
  }
  else if(inventoryName=='Food'){
    alert(inventoryName);
    this.router.navigate(["/subCategory"]);
  }
}

}
