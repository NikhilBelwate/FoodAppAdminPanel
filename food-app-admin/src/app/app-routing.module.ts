import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { ShowOrderDetailsComponent } from './show-order-details/show-order-details.component';

const routes: Routes = [
  { path: 'ordertable', component: OrderTableComponent },
  { path: 'login', component: LoginComponent },
  { path: 'details/:orderID', component:ShowOrderDetailsComponent},
  {path : '', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routedModules= [OrderTableComponent, LoginComponent, ShowOrderDetailsComponent];