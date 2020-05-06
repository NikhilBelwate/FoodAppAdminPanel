import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataApiService } from '../../data-api.service';
import { SubCategory } from 'src/model/SubCategory';

@Component({
  selector: 'app-delete-grocery-subcategory-inventory',
  templateUrl: './delete-grocery-subcategory-inventory.component.html',
  styleUrls: ['./delete-grocery-subcategory-inventory.component.css']
})
export class DeleteGrocerySubcategoryInventoryComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteGrocerySubcategoryInventoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private dataServiceApi:DataApiService) { }

  ngOnInit(): void {
    console.log(this.data);
  }
  confirmDelete(): void {
    console.log(this.data);
    this.dataServiceApi.deleteSubGroceryCategoryDetailsApi(this.data.subCategory.subCategoryId).subscribe(
      data =>{
        
      },
      error => {
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
