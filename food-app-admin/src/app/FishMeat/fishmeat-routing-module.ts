import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FishmeatInventoryComponent } from './fishmeat-inventory/fishmeat-inventory.component';
import { FishmeatSubcategoryInventoryComponent } from './fishmeat-subcategory-inventory/fishmeat-subcategory-inventory.component';

const routes: Routes = [
  {path : 'fishmeat', component : FishmeatInventoryComponent},
  {path : 'fishmeatsubCategory', component : FishmeatSubcategoryInventoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FishMeatRoutingModule { }