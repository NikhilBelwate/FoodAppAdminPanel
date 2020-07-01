import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routedModules } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { MAT_LABEL_GLOBAL_OPTIONS, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
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
    EditFishmeatInventoryComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    GroceryRoutingModule,
    DairyRoutingModule,
    FishMeatRoutingModule,
    MatAutocompleteModule,
        MatBadgeModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        MatNativeDateModule,
        BrowserAnimationsModule
    ],
    exports: [
        MatAutocompleteModule,
        MatBadgeModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        MatNativeDateModule
    ],
  providers: [FormsModule],
  // For calling the interceptor class
 // providers: [FormsModule,{provide:HTTP_INTERCEPTORS,useClass:CustomHttpInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
