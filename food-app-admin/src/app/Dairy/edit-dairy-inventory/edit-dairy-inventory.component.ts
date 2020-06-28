import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DairyCategoryModel } from 'src/model/DairyCategoryModel';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataApiService } from '../../data-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-dairy-inventory',
  templateUrl: './edit-dairy-inventory.component.html',
  styleUrls: ['./edit-dairy-inventory.component.css']
})
export class EditDairyInventoryComponent implements OnInit {

  
  @Input() public category:DairyCategoryModel;
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
       this.dataServiceApi.updateDairyCategoryDetailsApi(this.category).subscribe(
        data =>{
          //console.log(data);
          alert("Category Records Updated Succesfully");
          this.editFlag = false;
          this.messageEvent.emit(this.editFlag);
          this.router.navigate(["/dairy"]);
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
