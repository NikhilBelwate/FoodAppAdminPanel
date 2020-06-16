import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GroceryCategoryModel } from 'src/model/GroceryCategoryModel';
import { FormBuilder, Validators } from '@angular/forms';
import { DataApiService } from '../../data-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-grocery-inventory',
  templateUrl: './add-grocery-inventory.component.html',
  styleUrls: ['./add-grocery-inventory.component.css']
})
export class AddGroceryInventoryComponent implements OnInit {

  @Input() public category:GroceryCategoryModel;
  public addFlag:boolean=false;
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
       this.dataServiceApi.saveGroceryCategoryDetailsApi(this.category).subscribe(
        data =>{
          //console.log(data);
          alert("Category Records Updated Succesfully");
          this.addFlag = false;
          this.messageEventAdd.emit(this.addFlag);
          this.router.navigate(["/grocery"]);
        },
        error => {
        }
        
      )
    }
  //public category:Category;
 
  ngOnInit(): void {
    console.log(this.category);
  }


}
