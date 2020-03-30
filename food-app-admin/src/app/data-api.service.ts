import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Data } from './data-interfaces';
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
 
  getOrdersListUrl:string="http://www.mocky.io/v2/5e80c0ee3000004a006f9575"
  constructor(private _http:HttpClient) {
    this.httpOptions.headers =this.httpOptions.headers.set('Authorization', 'my-new-auth-token');
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
