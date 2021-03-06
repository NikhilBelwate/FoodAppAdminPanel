import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SubCategory } from 'src/model/SubCategory';
import { FormBuilder, Validators } from '@angular/forms';
import { DataApiService } from '../../data-api.service';
import { Router } from '@angular/router';
import { Grocerycategory } from '../../data-interfaces';

@Component({
  selector: 'app-edit-grocery-subcategory',
  templateUrl: './edit-grocery-subcategory.component.html',
  styleUrls: ['./edit-grocery-subcategory.component.css']
})
export class EditGrocerySubcategoryComponent implements OnInit {

  @Input() public subCategory:SubCategory;
  public categoryService:Grocerycategory;
  public editFlag:boolean=false;
  public itemStateData;
  constructor(private fb:FormBuilder,private dataServiceApi:DataApiService,private router : Router) { }


  editSubcategoryProfileForm = this.fb.group({
    subCategoryId:[''],
    SubCategoryName:['',[Validators.required]],
    categoryId:[''],
    SubCategoryPrice:['',[Validators.required,Validators.pattern(/[0-9]/g)]],
    SubCategoryUrl:['',[Validators.required]],
    SubCategoryDesc:['',[Validators.required]],
    LocationId:[''],
    subCategoryTax:['',[Validators.required,Validators.pattern(/[0-9]/g)]],
    subCategoryUnit:['',[Validators.required]],
    CategoryName:['',[Validators.required]]
  })

  ngOnInit(): void {
    console.log(this.subCategory);
    this.getCategoryList();
    // set the value of dropdown
    this.itemStateData = this.dataServiceApi.getItemStateDetails();
    this.editSubcategoryProfileForm.get('CategoryName').setValue(this.subCategory.CategoryName);
  }

  getCategoryList() {
    this.dataServiceApi.getGroceryCategoryDetailsApi().subscribe(
      data=>{
        this.categoryService = data;
        console.log(this.categoryService);
      }
    )
  }
  // Message Event is used to change flag status from child component to parent component
  @Output() messageEvent = new EventEmitter<Boolean>();
  onSubmit(){
    // console.warn(this.userProfileForm.value);
    const categoryName = this.editSubcategoryProfileForm.get('CategoryName').value;
    const categoryId = this.categoryService.categoryList.find(x=>x.CategoryName===categoryName).GroceryCategoryId
    this.subCategory.CategoryId = categoryId;
      this.dataServiceApi.updateGrocerySubCategoryDetailsApi(this.subCategory).subscribe(
       data =>{
         console.log(data);
         alert("Sub Category Records Updated Succesfully");
         this.editFlag = false;
         this.messageEvent.emit(this.editFlag);
         this.router.navigate(["/subCategory"]);
       },
       error => {
       }
       
     )
   }
}
