import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routedModules } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroceryInventoryComponent } from './Grocery/grocery-inventory/grocery-inventory.component';
import { EditgroceryinventoryComponent } from './Grocery/editgroceryinventory/editgroceryinventory.component';
import { DeleteGroceryCategoryInventoryComponent } from './Grocery/delete-grocery-category-inventory/delete-grocery-category-inventory.component';
import { AddGroceryInventoryComponent } from './Grocery/add-grocery-inventory/add-grocery-inventory.component';
import { GrocerySubcategoryInventoryComponent } from './Grocery/grocery-subcategory-inventory/grocery-subcategory-inventory.component';
import { EditGrocerySubcategoryComponent } from './Grocery/edit-grocery-subcategory/edit-grocery-subcategory.component';
import { DeleteGrocerySubcategoryInventoryComponent } from './Grocery/delete-grocery-subcategory-inventory/delete-grocery-subcategory-inventory.component';
import { AddGrocerySubcategoryInventoryComponent } from './Grocery/add-grocery-subcategory-inventory/add-grocery-subcategory-inventory.component';
import { GroceryRoutingModule } from './Grocery/grocery-routing.module';
import { DairyRoutingModule } from './Dairy/dairy-routing.module';

import { CustomHttpInterceptor } from './CustomHttpInterceptor';
import { DairyInventoryComponent } from './Dairy/dairy-inventory/dairy-inventory.component';
import { DairySubcategoryInventoryComponent } from './Dairy/dairy-subcategory-inventory/dairy-subcategory-inventory.component';
import { AddDairyInventoryComponent } from './Dairy/add-dairy-inventory/add-dairy-inventory.component';
import { AddDairySubcategoryInventoryComponent } from './Dairy/add-dairy-subcategory-inventory/add-dairy-subcategory-inventory.component';
import { EditDairyInventoryComponent } from './Dairy/edit-dairy-inventory/edit-dairy-inventory.component';
import { EditDairySubcategoryComponent } from './Dairy/edit-dairy-subcategory/edit-dairy-subcategory.component';
import { FishmeatInventoryComponent } from './FishMeat/fishmeat-inventory/fishmeat-inventory.component';
import { FishmeatSubcategoryInventoryComponent } from './FishMeat/fishmeat-subcategory-inventory/fishmeat-subcategory-inventory.component';
import { AddFishmeatInventoryComponent } from './FishMeat/add-fishmeat-inventory/add-fishmeat-inventory.component';
import { AddFishmeatSubcategoryInventoryComponent } from './FishMeat/add-fishmeat-subcategory-inventory/add-fishmeat-subcategory-inventory.component';
import { EditFishmeatSubcategoryInventoryComponent } from './FishMeat/edit-fishmeat-subcategory-inventory/edit-fishmeat-subcategory-inventory.component';
import { EditFishmeatInventoryComponent } from './FishMeat/edit-fishmeat-inventory/edit-fishmeat-inventory.component';
import { FishMeatRoutingModule } from './FishMeat/fishmeat-routing-module';
import { HeaderComponent } from './header/header.component';
import { OfferComponent } from './offer/offer.component';

@NgModule({
  declarations: [
    AppComponent,
    routedModules,
    GroceryInventoryComponent,
    EditgroceryinventoryComponent,
    DeleteGroceryCategoryInventoryComponent,
    AddGroceryInventoryComponent,
    GrocerySubcategoryInventoryComponent,
    EditGrocerySubcategoryComponent,
    DeleteGrocerySubcategoryInventoryComponent,
    AddGrocerySubcategoryInventoryComponent,
    DairyInventoryComponent,
    DairySubcategoryInventoryComponent,
    AddDairyInventoryComponent,
    AddDairySubcategoryInventoryComponent,
    EditDairyInventoryComponent,
    EditDairySubcategoryComponent,
    FishmeatInventoryComponent,
    FishmeatSubcategoryInventoryComponent,
    AddFishmeatInventoryComponent,
    AddFishmeatSubcategoryInventoryComponent,
    EditFishmeatSubcategoryInventoryComponent,
    EditFishmeatInventoryComponent,
    HeaderComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    GroceryRoutingModule,
    DairyRoutingModule,
    FishMeatRoutingModule,
        BrowserAnimationsModule
    ],
    exports: [
        MaterialModule
    ],
  providers: [FormsModule],
  // For calling the interceptor class
 // providers: [FormsModule,{provide:HTTP_INTERCEPTORS,useClass:CustomHttpInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
