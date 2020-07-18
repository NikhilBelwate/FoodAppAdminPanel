import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpParams, HttpClient } from '@angular/common/http';
import { Observable, from, BehaviorSubject, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Data, Order, Records, Grocerycategory,DairySubCategory,Dairycategory, Roles, GrocerySubCategory, FishMeatcategory, FishMeatSubCategory } from './data-interfaces';
import { GroceryCategoryModel } from 'src/model/GroceryCategoryModel';
import { SubCategory } from 'src/model/SubCategory';
import { DairyCategoryModel } from 'src/model/DairyCategoryModel';
import { FishMeatCategoryModel } from 'src/model/FishMeatCategoryModel';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  url:string;
  postData={
    id:854,
    name:'drt'
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  dataChange: BehaviorSubject<Grocerycategory[]> = new BehaviorSubject<Grocerycategory[]>([]);
  private getFoodOrderSource = new BehaviorSubject<Order>(null);
  foodOrder$ = this.getFoodOrderSource.asObservable();

  getFoodOrderResult(order:Order){
    this.getFoodOrderSource.next(order);
  }
  getOrdersListUrl:string="http://foodapp.dx.am/FoodApp/foodAppAPI/getAllOrders.php";
  //getOrdersListUrl:string="http://www.json-generator.com/api/json/get/bQZMmVNZVe?indent=2"

  getOrderDetailsUrl:string="http://foodapp.dx.am/FoodApp/foodAppAPI/getOrderDetails.php?orderID="; //append orderID in URL
  //getOrderDetailsUrl:string="http://www.mocky.io/v2/5e871293310000588b818581?orderID="; //append orderID in URL
  
  //getStatusRecordsUrl:string="http://foodapp.dx.am/FoodApp/foodAppAPI/getStatusHistory.php?orderID="; //append orderID in URL
  getStatusRecordsUrl:string="http://www.mocky.io/v2/5e871a4231000011d88185de?orderID=";


  //submitStatusChangeUrl:string="http://foodapp.dx.am/FoodApp/foodAppAPI/changeStatus.php"
  submitStatusChangeUrl:string="http://www.mocky.io/v2/5e88c96d3100006000d39ab8";

  //getGroceryCategoryDetails:string="http://localhost:8080/authenticate";

  getGroceryCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/GroceryCategory.php";

  getSubGroceryCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/grocerySubCategory.php";

  getDairyCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/dairyCategory.php";

  getFishMeatCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/fishMeatCategory.php";

  getSubDairyCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/dairySubCategory.php";

  getSubFishMeatCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/fishMeatSubCategory.php";

  saveGroceryCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/insertGrocery.php";

  saveDairyCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/insertDairy.php";

  saveFishMeatCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/insertFishMeat.php";

  updateGroceryCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/updateGrocery.php";

  updateDairyCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/updateDairy.php";

  updateFishMeatCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/updateFishMeat.php";

  updateGrocerySubCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/updateGrocerySubcategory.php";

  updateDairySubCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/updateDairySubCategory.php";

  updateFishMeatSubCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/updateFishMeatSubCategory.php";

  //saveGrocerySubCategoryDetails:string="http://localhost:8080/saveSubCategoryDetails";

  saveGrocerySubCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/insertGrocerySubcategory.php";

  saveDairySubCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/insertDairySubCategory.php";

  saveFishMeatSubCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/insertFishMeatSubCategory.php";
  //deleteCategoryDetails:string="http://localhost:8080/deleteCategoryDetails";

  deleteCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/deleteGroceryCategory.php";

  //deleteSubCategoryDetails:string = "http://localhost:8080/deleteSubCategoryDetails";

  deleteSubCategoryDetails:string = "http://foodapp.dx.am/FoodApp/foodAppAPI/deleteGrocerySubCategory.php";

  getMasterRoles:string = "http://localhost:8080/getMasterRoles";

  updateAdminStatusUrl ="http://foodapp.dx.am/FoodApp/foodAppAPI/changeStatus.php";

  constructor(private _http:HttpClient) {
    this.httpOptions.headers =this.httpOptions.headers.set('Authorization', 'my-new-auth-token');
   }

//HTTP POST
public setNewStatusOnServer(orderDetails:Order): Observable<string>{

  return this._http.post<string>(this.updateAdminStatusUrl,orderDetails).pipe(
    catchError(this.errorHandler)
  );//catch(this.errorHandler);


}

  public getMasterRolesDetails():Observable<Roles[]>{
    return this._http.get<Roles[]>(this.getMasterRoles).pipe(
      catchError(this.errorHandler)
    );
  }

   //HTTP GET
  public getStatusHistoryRecords(orderID:number): Observable<Records>{

    return this._http.get<Records>(this.getStatusRecordsUrl+orderID).pipe(
      catchError(this.errorHandler)
    );//catch(this.errorHandler);


  }

  public deleteGroceryCategoryDetailsApi(id:number){
    console.log(id);
    this.url = this.deleteCategoryDetails + "?" + "categoryId="+id;
    console.log(this.url);
    return this._http.delete<Grocerycategory>(this.url).pipe(
     catchError(this.errorHandler)
   );
 }

 public deleteSubGroceryCategoryDetailsApi(id:number){
  console.log(id);
  this.url = this.deleteSubCategoryDetails + "?" + "subCategoryId=" + id;
  console.log(this.url);
  return this._http.delete<SubCategory>(this.url).pipe(
   catchError(this.errorHandler)
 );
  }

 public saveGrocerySubCategoryDetailsApi(subCategory:SubCategory){
  console.log(JSON.stringify(subCategory));
  return  this._http.post(this.saveGrocerySubCategoryDetails,subCategory).pipe(
    catchError(this.errorHandler)
  );
}
public saveDairySubCategoryDetailsApi(subCategory:SubCategory){
  console.log(JSON.stringify(subCategory));
  return  this._http.post(this.saveDairySubCategoryDetails,subCategory).pipe(
    catchError(this.errorHandler)
  );
}
public saveFishMeatSubCategoryDetailsApi(subCategory:SubCategory){
  console.log(JSON.stringify(subCategory));
  return  this._http.post(this.saveFishMeatSubCategoryDetails,subCategory).pipe(
    catchError(this.errorHandler)
  );
}
 public saveGroceryCategoryDetailsApi(category:GroceryCategoryModel){
  console.log(JSON.stringify(category));
  return  this._http.post(this.saveGroceryCategoryDetails,category).pipe(
    catchError(this.errorHandler)
  );
}
public saveDairyCategoryDetailsApi(category:DairyCategoryModel){
  console.log(JSON.stringify(category));
  return  this._http.post(this.saveDairyCategoryDetails,category).pipe(
    catchError(this.errorHandler)
  );
}

public saveFishMeatCategoryDetailsApi(category:FishMeatCategoryModel){
  console.log(JSON.stringify(category));
  return  this._http.post(this.saveFishMeatCategoryDetails,category).pipe(
    catchError(this.errorHandler)
  );
}

public updateGroceryCategoryDetailsApi(category:GroceryCategoryModel){
  console.log(JSON.stringify(category));
  return  this._http.put(this.updateGroceryCategoryDetails,category).pipe(
    catchError(this.errorHandler)
  );
}
public updateDairyCategoryDetailsApi(category:DairyCategoryModel){
  console.log(JSON.stringify(category));
  return  this._http.put(this.updateDairyCategoryDetails,category).pipe(
    catchError(this.errorHandler)
  );
}

public updateFishMeatCategoryDetailsApi(category:FishMeatCategoryModel){
  console.log(JSON.stringify(category));
  return  this._http.put(this.updateFishMeatCategoryDetails,category).pipe(
    catchError(this.errorHandler)
  );
}

public updateGrocerySubCategoryDetailsApi(subCategory:SubCategory){
  //console.log(JSON.stringify(category));
  return  this._http.put(this.updateGrocerySubCategoryDetails,subCategory).pipe(
    catchError(this.errorHandler)
  );
}
public updateDairySubCategoryDetailsApi(subCategory:SubCategory){
  //console.log(JSON.stringify(category));
  return  this._http.put(this.updateDairySubCategoryDetails,subCategory).pipe(
    catchError(this.errorHandler)
  );
}
public updateFishMeatSubCategoryDetailsApi(subCategory:SubCategory){
  //console.log(JSON.stringify(category));
  return  this._http.put(this.updateFishMeatSubCategoryDetails,subCategory).pipe(
    catchError(this.errorHandler)
  );
}

  public getGroceryCategoryDetailsApi():Observable<Grocerycategory>{
    
    return this._http.get<Grocerycategory>(this.getGroceryCategoryDetails).pipe(
      catchError(this.errorHandler)
    );
  }

  public getDairyCategoryDetailsApi():Observable<Dairycategory>{
    
    return this._http.get<Dairycategory>(this.getDairyCategoryDetails).pipe(
      catchError(this.errorHandler)
    );
  }
  public getFishMeatCategoryDetailsApi():Observable<FishMeatcategory>{
    
    return this._http.get<FishMeatcategory>(this.getFishMeatCategoryDetails).pipe(
      catchError(this.errorHandler)
    );
  }

  public authenticate():Observable<string>{
    
    return this._http.post<string>(this.getGroceryCategoryDetails,{"username":"foo","password":"foo"}).pipe(
      catchError(this.errorHandler)
    );
  }
  public getGrocerySubCategoryDetailsApi():Observable<GrocerySubCategory>{
    return this._http.get<GrocerySubCategory>(this.getSubGroceryCategoryDetails).pipe(
      catchError(this.errorHandler)
    );
  }
  public getDairySubCategoryDetailsApi():Observable<DairySubCategory>{
    return this._http.get<DairySubCategory>(this.getSubDairyCategoryDetails).pipe(
      catchError(this.errorHandler)
    );
  }
  public getFishMeatSubCategoryDetailsApi():Observable<FishMeatSubCategory>{
    return this._http.get<FishMeatSubCategory>(this.getSubFishMeatCategoryDetails).pipe(
      catchError(this.errorHandler)
    );
  }
   //HTTP GET
  public getOrderDetails(orderID:number): Observable<Order>{

    return this._http.get<Order>(this.getOrderDetailsUrl+orderID).pipe(
      catchError(this.errorHandler)
    );//catch(this.errorHandler);


  }
   //HTTP GET
  public getOrdersListData(): Observable<Data>{

    return this._http.get<Data>(this.getOrdersListUrl).pipe(
      catchError(this.errorHandler)
    );//catch(this.errorHandler);


  }
//HTTP POST
  public getOrdersListDataPost(): Observable<Data>{

    return this._http.post<Data>(this.getOrdersListUrl,this.postData,this.httpOptions).pipe(
      catchError(this.errorHandler)
    );//catch(this.errorHandler);


  }

  public getOrdersListDataJsonp(): Observable<Data>{
    return this._http.jsonp<Data>(this.getOrdersListUrl,'callback').pipe(
      catchError(this.errorHandler)
    );//catch(this.errorHandler);
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }

  

}
