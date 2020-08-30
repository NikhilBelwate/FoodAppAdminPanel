import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DairyCategoryModel } from 'src/model/DairyCategoryModel';
import { FormBuilder, Validators } from '@angular/forms';
import { DataApiService } from 'src/app/data-api.service';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { BakeryCategoryModel } from 'src/model/BakeryCategoryModel';

@Component({
  selector: 'app-edit-bakery-category-inventory',
  templateUrl: './edit-bakery-category-inventory.component.html',
  styleUrls: ['./edit-bakery-category-inventory.component.css']
})
export class EditBakeryCategoryInventoryComponent implements OnInit {

  @Input() public category:BakeryCategoryModel;
  public editFlag:boolean=false;
  public isValidLogin;
  constructor(private fb:FormBuilder, private dataServiceApi:DataApiService,private router : Router) {

  }
    userProfileForm = this.fb.group({
      categoryId:[''],
      categoryName:['',[Validators.required,Validators.pattern(/[^0-9]/g)]],
      categoryUrl:['',Validators.required]
    })

    @Output() messageEvent = new EventEmitter<Boolean>();
    onSubmit(){
     // console.warn(this.userProfileForm.value);
       this.dataServiceApi.updateBakeryCategoryDetailsApi(this.category).subscribe(
        data =>{
          console.log(data);
          alert("Category Records Updated Succesfully");
          this.editFlag = false;
          this.messageEvent.emit(this.editFlag);
          this.router.navigate(["/bakery"]);
        },
        error => {
        }
        
      )
    }
  //public category:Category;
 
  ngOnInit(): void {
    console.log(this.category);
    this.isValidLogin = LoginComponent.validLogin;
  }

}
