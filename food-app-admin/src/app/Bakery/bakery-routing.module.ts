import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BakeryInventoryComponent } from './bakery-inventory/bakery-inventory.component';
import { BakerySubcategoryInventoryComponent } from './bakery-subcategory-inventory/bakery-subcategory-inventory.component';

const routes: Routes = [
  {path : 'bakery', component : BakeryInventoryComponent},
  {path : 'bakerysubCategory', component : BakerySubcategoryInventoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BakeryRoutingModule { }