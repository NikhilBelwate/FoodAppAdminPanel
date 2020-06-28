import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DairyCategoryModel } from 'src/model/DairyCategoryModel';
import { FormBuilder, Validators } from '@angular/forms';
import { DataApiService } from '../../data-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-dairy-inventory',
  templateUrl: './add-dairy-inventory.component.html',
  styleUrls: ['./add-dairy-inventory.component.css']
})
export class AddDairyInventoryComponent implements OnInit {
  @Input() public category:DairyCategoryModel;
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
       this.dataServiceApi.saveDairyCategoryDetailsApi(this.category).subscribe(
        data =>{
          //console.log(data);
          alert("Category Records Updated Succesfully");
          this.addFlag = false;
          this.messageEventAdd.emit(this.addFlag);
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
