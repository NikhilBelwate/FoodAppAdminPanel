import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { OrderTableComponent } from './order-table/order-table.component';

const routes: Routes = [
  { path: 'ordertable', component: OrderTableComponent },
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routedModules= [OrderTableComponent, LoginComponent];