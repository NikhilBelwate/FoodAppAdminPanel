import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FishMeatCategoryModel } from 'src/model/FishMeatCategoryModel';
import { FormBuilder, Validators } from '@angular/forms';
import { DataApiService } from 'src/app/data-api.service';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-add-fishmeat-inventory',
  templateUrl: './add-fishmeat-inventory.component.html',
  styleUrls: ['./add-fishmeat-inventory.component.css']
})
export class AddFishmeatInventoryComponent implements OnInit {

  @Input() public category:FishMeatCategoryModel;
  public addFlag:boolean=false;
  public isValidLogin;
  constructor(private fb:FormBuilder,private dataServiceApi:DataApiService,private router : Router) {

  }
    userProfileForm = this.fb.group({
      categoryId:[''],
      categoryName:['',Validators.required],
      categoryUrl:['']
    })

    @Output() messageEventAdd = new EventEmitter<Boolean>();
    onSubmit(){
     // console.warn(this.userProfileForm.value);
       this.dataServiceApi.saveFishMeatCategoryDetailsApi(this.category).subscribe(
        data =>{
          //console.log(data);
          alert("Category Records Added Succesfully");
          this.addFlag = false;
          this.messageEventAdd.emit(this.addFlag);
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
