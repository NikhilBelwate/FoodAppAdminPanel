import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SubCategory } from 'src/model/SubCategory';
import { Grocerycategory } from '../../data-interfaces';
import { FormBuilder } from '@angular/forms';
import { DataApiService } from '../../data-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-grocery-subcategory-inventory',
  templateUrl: './add-grocery-subcategory-inventory.component.html',
  styleUrls: ['./add-grocery-subcategory-inventory.component.css']
})
export class AddGrocerySubcategoryInventoryComponent implements OnInit {

  @Input() public subCategory:SubCategory;
  public categoryService:Grocerycategory;
  public editFlag:boolean=false;
  @Output() messageEventAdd = new EventEmitter<Boolean>();
  constructor(private fb:FormBuilder,private dataServiceApi:DataApiService,private router : Router) { }


  editSubcategoryProfileForm = this.fb.group({
    subCategoryId:[''],
    subCategoryName:[''],
    categoryId:[''],
    subCategoryPrice:[''],
    subCategoryUrl:[''],
    subCategoryDesc:[''],
    locationId:[''],
    subCategoryTax:[''],
    subCategoryUnit:[''],
    categoryName:['']
  })

  ngOnInit(): void {
    console.log(this.subCategory);
    this.getCategoryList();
    this.editSubcategoryProfileForm.get('categoryName').setValue(this.subCategory.categoryName);
  }

  getCategoryList() {
    this.dataServiceApi.getGroceryCategoryDetailsApi().subscribe(
      data=>{
        this.categoryService = data;
        console.log(this.categoryService);
      }
    )
  }

  onSubmit(){
    // console.warn(this.userProfileForm.value);
    const categoryName = this.editSubcategoryProfileForm.get('categoryName').value;
    const categoryId = this.categoryService.categoryList.find(x=>x.categoryName===categoryName).categoryId
    this.subCategory.categoryId = categoryId;
      this.dataServiceApi.saveGrocerySubCategoryDetailsApi(this.subCategory).subscribe(
       data =>{
         console.log(data);
         alert("Sub Category Records Updated Succesfully");
         this.editFlag = false;
         this.router.navigate(["/subCategory"]);
       },
       error => {
       }
       
     )
   }

}
