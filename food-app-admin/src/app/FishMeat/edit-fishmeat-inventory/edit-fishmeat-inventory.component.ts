import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FishMeatCategoryModel } from 'src/model/FishMeatCategoryModel';
import { FormBuilder, Validators } from '@angular/forms';
import { DataApiService } from 'src/app/data-api.service';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-edit-fishmeat-inventory',
  templateUrl: './edit-fishmeat-inventory.component.html',
  styleUrls: ['./edit-fishmeat-inventory.component.css']
})
export class EditFishmeatInventoryComponent implements OnInit {

  @Input() public category:FishMeatCategoryModel;
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
       this.dataServiceApi.updateFishMeatCategoryDetailsApi(this.category).subscribe(
        data =>{
          console.log(data);
          alert("Category Records Updated Succesfully");
          this.editFlag = false;
          this.messageEvent.emit(this.editFlag);
          this.router.navigate(["/fishmeat"]);
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
