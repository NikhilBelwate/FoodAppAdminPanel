import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { DataApiService } from 'src/app/data-api.service';
import { FishMeatcategory } from 'src/app/data-interfaces';
import { SubCategory } from 'src/model/SubCategory';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-fishmeat-subcategory-inventory',
  templateUrl: './edit-fishmeat-subcategory-inventory.component.html',
  styleUrls: ['./edit-fishmeat-subcategory-inventory.component.css']
})
export class EditFishmeatSubcategoryInventoryComponent implements OnInit {

  @Input() public subCategory:SubCategory;
  public categoryService:FishMeatcategory;
  public editFlag:boolean=false;
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
    this.editSubcategoryProfileForm.get('CategoryName').setValue(this.subCategory.CategoryName);
  }

  getCategoryList() {
    this.dataServiceApi.getFishMeatCategoryDetailsApi().subscribe(
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
    const categoryId = this.categoryService.categoryList.find(x=>x.CategoryName===categoryName).FishMeatCategoryId
    this.subCategory.CategoryId = categoryId;
      this.dataServiceApi.updateFishMeatSubCategoryDetailsApi(this.subCategory).subscribe(
       data =>{
         console.log(data);
         alert("Sub Category Records Updated Succesfully");
         this.editFlag = false;
         this.messageEvent.emit(this.editFlag);
         this.router.navigate(["/fishmeatsubCategory"]);
       },
       error => {
       }
       
     )
   }


}
