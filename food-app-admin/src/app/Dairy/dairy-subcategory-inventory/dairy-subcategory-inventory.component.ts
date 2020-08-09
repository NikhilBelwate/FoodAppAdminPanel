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
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  constructor(private dataServiceApi:DataApiService,private router : Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.editFlag=false;
    this.addFlag=false;
    this.getCategoryList();
    this.getSubCategoryDetails();
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
    this.dataServiceApi.getDairySubCategoryDetailsApi().subscribe(
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

sendit(data){
    data = data.toLowerCase();
    this.dataSource = this.filterSubCategoryList.filter((subCat:SubCategory)=>{
    const objData = (subCat.SubCategoryName+subCat.SubCategoryPrice+subCat.SubCategoryUrl+subCat.Unit+subCat.CategoryName+subCat.SubCategoryDesc+subCat.LocationId+subCat.SubCategoryPrice+subCat.SubCategoryId).toLowerCase();
    return objData.includes(data);
   });
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
  if(inventoryName=='DairyCategory'){
    this.router.navigate(["/dairy"]);
  }
  else if(inventoryName=='DairySubCategory'){
    alert(inventoryName);
    this.router.navigate(["/dairysubCategory"]);
  }

}

}
