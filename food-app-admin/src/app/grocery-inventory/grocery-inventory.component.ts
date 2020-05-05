import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../data-api.service';
import { Category } from 'src/model/Category';
import { MatTableDataSource } from '@angular/material/table';
import { Grocerycategory } from '../data-interfaces';
import { EditgroceryinventoryComponent } from '../editgroceryinventory/editgroceryinventory.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteGroceryCategoryInventoryComponent } from '../delete-grocery-category-inventory/delete-grocery-category-inventory.component';
import { findIndex } from 'rxjs/operators';


@Component({
  selector: 'app-grocery-inventory',
  templateUrl: './grocery-inventory.component.html',
  styleUrls: ['./grocery-inventory.component.css']
})
export class GroceryInventoryComponent implements OnInit{

  public categoryService:Grocerycategory;
  errormsg:string;
  public categoryList:any;
  index: number;
  id: number;
  public editFlag=false;
  public addFlag=false;
  public category;
  public categoryNameTemp:String;
  public categoryArray:any;
  @ViewChild(EditgroceryinventoryComponent) editGroceryComponentChild;

  
  constructor(private router : Router,private dataServiceApi:DataApiService, public dialog: MatDialog) { 

  }
  displayedColumns = ['categoryId', 'categoryName', 'categoryImgUrl','actions'];

  
  ngOnInit(){
    this.editFlag=false;
    this.addFlag=false;
    this.getCategoryDetails();
  }
  getCategoryDetails() {
    this.dataServiceApi.getGroceryCategoryDetailsApi().subscribe(
      data =>{
        console.log(data);
        this.categoryService=data;
        this.categoryArray = this.categoryService.categoryList;
        this.categoryList = this.categoryService.categoryList;
        const matTable =  new MatTableDataSource(this.categoryList);
        
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

  showDetails(inventoryName){
    this.editFlag=false;
    this.addFlag=false;
    if(inventoryName=='Grocery'){
      this.router.navigate(["/grocery"]);
    }
    else if(inventoryName=='Food'){
      alert(inventoryName);
      this.router.navigate(["/subCategory"]);
    }
  }

  addNew() {
    this.category = new Category(0,"","");
    this.addFlag = true;
    };

  startEdit(i: number, categoryId: number, categoryName: string, categoryUrl: string) {
    this.id = categoryId;
    this.category = new Category(categoryId,categoryName,categoryUrl);
    //this.category.categoryId = categoryId;
    //this.category.categoryName = categoryName;
    //this.category.categoryImgUrl = categoryUrl; 
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(categoryName);
    this.editFlag = true;
}

deleteItem(i: number, categoryId: number, categoryName: string, categoryUrl: string) {
  this.category = new Category(categoryId,categoryName,categoryUrl);
  console.log(this.category);
  const dialogRef = this.dialog.open(DeleteGroceryCategoryInventoryComponent, {
    data: {category:this.category}
  });
  dialogRef.afterClosed().subscribe(result => {
    this.getCategoryDetails();
  });
}


}
