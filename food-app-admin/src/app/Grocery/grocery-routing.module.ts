import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroceryInventoryComponent } from './grocery-inventory/grocery-inventory.component';
import { GrocerySubcategoryInventoryComponent } from './grocery-subcategory-inventory/grocery-subcategory-inventory.component';

const routes: Routes = [
  {path : 'grocery', component : GroceryInventoryComponent},
  {path : 'subCategory', component : GrocerySubcategoryInventoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroceryRoutingModule { }