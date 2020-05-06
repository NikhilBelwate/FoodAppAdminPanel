import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/model/Category';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataApiService } from '../../data-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editgroceryinventory',
  templateUrl: './editgroceryinventory.component.html',
  styleUrls: ['./editgroceryinventory.component.css']
})
export class EditgroceryinventoryComponent implements OnInit {

  @Input() public category:Category;
  public editFlag:boolean=false;
  constructor(private fb:FormBuilder,private dataServiceApi:DataApiService,private router : Router) {

  }
    userProfileForm = this.fb.group({
      categoryId:[''],
      categoryName:['',Validators.required],
      categoryUrl:['']
    })

    @Output() messageEvent = new EventEmitter<Boolean>();
    onSubmit(){
     // console.warn(this.userProfileForm.value);
       this.dataServiceApi.saveGroceryCategoryDetailsApi(this.category).subscribe(
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
