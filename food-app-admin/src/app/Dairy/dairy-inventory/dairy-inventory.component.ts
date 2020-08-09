import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../../data-api.service';
import { DairyCategoryModel } from 'src/model/DairyCategoryModel';
import { MatTableDataSource } from '@angular/material/table';
import { Dairycategory } from '../../data-interfaces';
import { MatDialog } from '@angular/material/dialog';
import { findIndex } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-dairy-inventory',
  templateUrl: './dairy-inventory.component.html',
  styleUrls: ['./dairy-inventory.component.css']
})
export class DairyInventoryComponent implements OnInit {

  public categoryService:Dairycategory;
  errormsg:string;
  public categoryList:any;
  index: number;
  id: number;
  public editFlag=false;
  public addFlag=false;
  public category:DairyCategoryModel;
  public categoryNameTemp:String;
  public categoryArray:any;
  dataSource = new MatTableDataSource();
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
  }

  ngAfterViewInit(){
    
  }
  getCategoryDetails() {
    this.dataServiceApi.getDairyCategoryDetailsApi().subscribe(
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

  addNew() {
    this.category = new DairyCategoryModel(0,"","");
    this.addFlag = true;
    };

  startEdit(i: number, categoryId: number, categoryName: string, categoryUrl: string) {
    this.id = categoryId;
    this.category = new DairyCategoryModel(categoryId,categoryName,categoryUrl);
    //this.category.categoryId = categoryId;
    //this.category.categoryName = categoryName;
    //this.category.categoryImgUrl = categoryUrl; 
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(categoryName);
    this.editFlag = true;
}

deleteItem(i: number, categoryId: number, categoryName: string, categoryUrl: string) {
  this.category = new DairyCategoryModel(categoryId,categoryName,categoryUrl);
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