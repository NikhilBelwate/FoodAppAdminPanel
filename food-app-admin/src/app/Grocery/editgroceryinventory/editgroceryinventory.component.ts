import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GroceryCategoryModel } from 'src/model/GroceryCategoryModel';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataApiService } from '../../data-api.service';
import { Router } from '@angular/router';
import { Grocerycategory } from 'src/app/data-interfaces';

@Component({
  selector: 'app-editgroceryinventory',
  templateUrl: './editgroceryinventory.component.html',
  styleUrls: ['./editgroceryinventory.component.css']
})
export class EditgroceryinventoryComponent implements OnInit {

  @Input() public category:GroceryCategoryModel;
  public editFlag:boolean=false;
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
       this.dataServiceApi.updateGroceryCategoryDetailsApi(this.category).subscribe(
        data =>{
          //console.log(data);
          alert("Category Records Updated Succesfully");
          this.editFlag = false;
          this.messageEvent.emit(this.editFlag);
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
