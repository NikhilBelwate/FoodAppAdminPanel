import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DairyInventoryComponent } from './dairy-inventory/dairy-inventory.component'
import { DairySubcategoryInventoryComponent } from './dairy-subcategory-inventory/dairy-subcategory-inventory.component';

const routes: Routes = [
  {path : 'dairy', component : DairyInventoryComponent},
  {path : 'dairysubCategory', component : DairySubcategoryInventoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DairyRoutingModule { }