import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataApiService } from 'src/app/data-api.service';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { BakeryCategoryModel } from 'src/model/BakeryCategoryModel';

@Component({
  selector: 'app-add-bakery-category-inventory',
  templateUrl: './add-bakery-category-inventory.component.html',
  styleUrls: ['./add-bakery-category-inventory.component.css']
})
export class AddBakeryCategoryInventoryComponent implements OnInit {

  @Input() public category:BakeryCategoryModel;
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
       this.dataServiceApi.saveBakeryCategoryDetailsApi(this.category).subscribe(
        data =>{
          //console.log(data);
          alert("Category Records Updated Succesfully");
          this.addFlag = false;
          this.messageEventAdd.emit(this.addFlag);
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
