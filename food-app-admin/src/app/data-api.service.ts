import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpParams, HttpClient } from '@angular/common/http';
import { Observable, from, BehaviorSubject, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Data, Order, Records, Grocerycategory, Roles, GrocerySubCategory } from './data-interfaces';
import { GroceryCategoryModel } from 'src/model/GroceryCategoryModel';
import { SubCategory } from 'src/model/SubCategory';
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

  //getOrderDetailsUrl:string="http://foodapp.dx.am/FoodApp/foodAppAPI/getOrderDetails.php?orderID="; //append orderID in URL
  getOrderDetailsUrl:string="http://www.mocky.io/v2/5e871293310000588b818581?orderID="; //append orderID in URL
  
  //getStatusRecordsUrl:string="http://foodapp.dx.am/FoodApp/foodAppAPI/getStatusHistory.php?orderID="; //append orderID in URL
  getStatusRecordsUrl:string="http://www.mocky.io/v2/5e871a4231000011d88185de?orderID=";


  //submitStatusChangeUrl:string="http://foodapp.dx.am/FoodApp/foodAppAPI/changeStatus.php"
  submitStatusChangeUrl:string="http://www.mocky.io/v2/5e88c96d3100006000d39ab8";

  //getGroceryCategoryDetails:string="http://localhost:8080/authenticate";

  getGroceryCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/GroceryCategory.php";

  getSubGroceryCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/grocerySubCategory.php";

  saveGroceryCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/insertGrocery.php";

  updateGroceryCategoryDetails:string="http://foodapp.dx.am/FoodApp/foodAppAPI/updateGrocery.php";

  saveGrocerySubCategoryDetails:string="http://localhost:8080/saveSubCategoryDetails";

  deleteCategoryDetails:string="http://localhost:8080/deleteCategoryDetails";

  deleteSubCategoryDetails:string = "http://localhost:8080/deleteSubCategoryDetails";

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
    this.url = this.deleteCategoryDetails + "/" + id;
    console.log(this.url);
    return this._http.delete<Grocerycategory>(this.url).pipe(
     catchError(this.errorHandler)
   );
 }

 public deleteSubGroceryCategoryDetailsApi(id:number){
  console.log(id);
  this.url = this.deleteSubCategoryDetails + "/" + id;
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

 public saveGroceryCategoryDetailsApi(category:GroceryCategoryModel){
  console.log(JSON.stringify(category));
  return  this._http.post(this.saveGroceryCategoryDetails,category).pipe(
    catchError(this.errorHandler)
  );
}

public updateGroceryCategoryDetailsApi(category:GroceryCategoryModel){
  console.log(JSON.stringify(category));
  return  this._http.put(this.updateGroceryCategoryDetails,category).pipe(
    catchError(this.errorHandler)
  );
}

  public getGroceryCategoryDetailsApi():Observable<Grocerycategory>{
    
    return this._http.get<Grocerycategory>(this.getGroceryCategoryDetails).pipe(
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
