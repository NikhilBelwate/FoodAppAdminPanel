import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SubCategory } from 'src/model/SubCategory';
import { FormBuilder, Validators } from '@angular/forms';
import { DataApiService } from '../../data-api.service';
import { Router } from '@angular/router';
import { FishMeatcategory } from 'src/app/data-interfaces';

@Component({
  selector: 'app-add-fishmeat-subcategory-inventory',
  templateUrl: './add-fishmeat-subcategory-inventory.component.html',
  styleUrls: ['./add-fishmeat-subcategory-inventory.component.css']
})
export class AddFishmeatSubcategoryInventoryComponent implements OnInit {

  @Input() public subCategory:SubCategory;
  public categoryService:FishMeatcategory;
  public editFlag:boolean=false;
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
    this.editSubcategoryProfileForm.get('categoryName').setValue(this.subCategory.CategoryName);
  }

  getCategoryList() {
    this.dataServiceApi.getFishMeatCategoryDetailsApi().subscribe(
      data=>{
        this.categoryService = data;
        console.log(this.categoryService);
      }
    )
  }

  onSubmit(){
    // console.warn(this.userProfileForm.value);
    const categoryName = this.editSubcategoryProfileForm.get('categoryName').value;
    const categoryId = this.categoryService.categoryList.find(x=>x.CategoryName===categoryName).FishMeatCategoryId
    this.subCategory.CategoryId = categoryId;
      this.dataServiceApi.saveFishMeatSubCategoryDetailsApi(this.subCategory).subscribe(
       data =>{
         console.log(data);
         alert("Sub Category Records Updated Succesfully");
         this.editFlag = false;
         this.router.navigate(["/fishmeatsubCategory"]);
       },
       error => {
       }
       
     )
   }


}
