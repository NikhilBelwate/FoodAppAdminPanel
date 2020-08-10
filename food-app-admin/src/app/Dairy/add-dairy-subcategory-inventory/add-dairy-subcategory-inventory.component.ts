import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { SubCategory } from 'src/model/SubCategory';
import { FormBuilder, Validators } from '@angular/forms';
import { DataApiService } from '../../data-api.service';
import { Router } from '@angular/router';
import { Dairycategory } from 'src/app/data-interfaces';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-add-dairy-subcategory-inventory',
  templateUrl: './add-dairy-subcategory-inventory.component.html',
  styleUrls: ['./add-dairy-subcategory-inventory.component.css']
})
export class AddDairySubcategoryInventoryComponent implements OnInit {

  @Input() public subCategory:SubCategory;
  public categoryService:Dairycategory;
  public editFlag:boolean=false;
  public isValidLogin;
  @Output() messageEventAdd = new EventEmitter<Boolean>();
  constructor(private fb:FormBuilder,private dataServiceApi:DataApiService,private router : Router) { }


  editSubcategoryProfileForm = this.fb.group({
    subCategoryId:[''],
    subCategoryName:['',[Validators.required]],
    categoryId:[''],
    subCategoryPrice:['',[Validators.required,Validators.pattern(/[0-9]/g)]],
    subCategoryUrl:['',[Validators.required]],
    subCategoryDesc:['',[Validators.required]],
    locationId:[''],
    subCategoryTax:['',[Validators.required,Validators.pattern(/[0-9]/g)]],
    subCategoryUnit:['',[Validators.required]],
    categoryName:['']
  })

  ngOnInit(): void {
    console.log(this.subCategory);
    this.getCategoryList();
    this.isValidLogin = LoginComponent.validLogin;
    this.editSubcategoryProfileForm.get('categoryName').setValue(this.subCategory.CategoryName);
  }

  getCategoryList() {
    this.dataServiceApi.getDairyCategoryDetailsApi().subscribe(
      data=>{
        this.categoryService = data;
        console.log(this.categoryService);
      }
    )
  }

  onSubmit(){
    // console.warn(this.userProfileForm.value);
    const categoryName = this.editSubcategoryProfileForm.get('categoryName').value;
    const categoryId = this.categoryService.categoryList.find(x=>x.CategoryName===categoryName).DairyCategoryId
    this.subCategory.CategoryId = categoryId;
      this.dataServiceApi.saveDairySubCategoryDetailsApi(this.subCategory).subscribe(
       data =>{
         console.log(data);
         alert("Sub Category Records Updated Succesfully");
         this.editFlag = false;
         this.router.navigate(["/dairysubCategory"]);
       },
       error => {
       }
       
     )
   }

}
