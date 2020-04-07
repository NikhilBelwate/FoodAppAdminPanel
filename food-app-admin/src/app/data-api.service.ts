import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Data, Order, Records } from './data-interfaces';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
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

  //getOrdersListUrl:string="http://foodapp.dx.am/FoodApp/foodAppAPI/getAllOrders.php";
  getOrdersListUrl:string="/FoodApp/foodAppAPI/getAllOrders.php";
  //getOrdersListUrl:string="http://www.mocky.io/v2/5e80c0ee3000004a006f9575"

  //getOrderDetailsUrl:string="http://foodapp.dx.am/FoodApp/foodAppAPI/getOrderDetails.php?orderID="; //append orderID in URL
  getOrderDetailsUrl:string="/FoodApp/foodAppAPI/getOrderDetails.php?orderID="; //append orderID in URL
  //getOrderDetailsUrl:string="http://www.mocky.io/v2/5e871293310000588b818581?orderID="; //append orderID in URL
  
  //getStatusRecordsUrl:string="http://foodapp.dx.am/FoodApp/foodAppAPI/getStatusHistory.php?orderID="; //append orderID in URL
  getStatusRecordsUrl:string="/FoodApp/foodAppAPI/getStatusHistory.php?orderID="; //append orderID in URL
  
  //getStatusRecordsUrl:string="http://www.mocky.io/v2/5e871a4231000011d88185de?orderID=";


  //submitStatusChangeUrl:string="http://foodapp.dx.am/FoodApp/foodAppAPI/changeStatus.php"
  submitStatusChangeUrl:string="/FoodApp/foodAppAPI/changeStatus.php"
  
  //submitStatusChangeUrl:string="http://www.mocky.io/v2/5e88c96d3100006000d39ab8";

  constructor(private _http:HttpClient) {
    this.httpOptions.headers =this.httpOptions.headers.set('Authorization', 'my-new-auth-token');
   }

//HTTP POST
public setNewStatusOnServer(valeset:HttpParams): Observable<string>{

  return this._http.post<string>(this.submitStatusChangeUrl,valeset,this.httpOptions).pipe(
    catchError(this.errorHandler)
  );//catch(this.errorHandler);


}



   //HTTP GET
  public getStatusHistoryRecords(orderID:number): Observable<Records>{

    return this._http.get<Records>(this.getStatusRecordsUrl+orderID).pipe(
      catchError(this.errorHandler)
    );//catch(this.errorHandler);


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
