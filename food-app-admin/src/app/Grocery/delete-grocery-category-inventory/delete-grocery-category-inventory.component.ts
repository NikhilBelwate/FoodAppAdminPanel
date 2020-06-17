import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataApiService } from '../../data-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-grocery-category-inventory',
  templateUrl: './delete-grocery-category-inventory.component.html',
  styleUrls: ['./delete-grocery-category-inventory.component.css']
})
export class DeleteGroceryCategoryInventoryComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteGroceryCategoryInventoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private dataServiceApi:DataApiService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  confirmDelete(): void {
    this.dataServiceApi.deleteGroceryCategoryDetailsApi(this.data.category.GroceryCategoryId).subscribe(
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
