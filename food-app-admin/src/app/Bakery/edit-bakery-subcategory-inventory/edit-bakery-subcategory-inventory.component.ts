import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SubCategory } from 'src/model/SubCategory';
import { Dairycategory, Bakerycategory } from 'src/app/data-interfaces';
import { FormBuilder, Validators } from '@angular/forms';
import { DataApiService } from 'src/app/data-api.service';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-edit-bakery-subcategory-inventory',
  templateUrl: './edit-bakery-subcategory-inventory.component.html',
  styleUrls: ['./edit-bakery-subcategory-inventory.component.css']
})
export class EditBakerySubcategoryInventoryComponent implements OnInit {

  @Input() public subCategory:SubCategory;
  public categoryService:Bakerycategory;
  public editFlag:boolean=false;
  public isValidLogin;
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
    this.isValidLogin = LoginComponent.validLogin;
    // set the value of dropdown
    this.editSubcategoryProfileForm.get('CategoryName').setValue(this.subCategory.CategoryName);
  }

  getCategoryList() {
    this.dataServiceApi.getBakeryCategoryDetailsApi().subscribe(
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
    const categoryId = this.categoryService.categoryList.find(x=>x.CategoryName===categoryName).BakeryCategoryId
    this.subCategory.CategoryId = categoryId;
      this.dataServiceApi.updateBakerySubCategoryDetailsApi(this.subCategory).subscribe(
       data =>{
         console.log(data);
         alert("Sub Category Records Updated Succesfully");
         this.editFlag = false;
         this.messageEvent.emit(this.editFlag);
         this.router.navigate(["/bakerysubCategory"]);
       },
       error => {
       }
       
     )
   }

}
