import { Component, OnInit, ViewChild } from '@angular/core';
import { DataApiService } from '../data-api.service';
import { Data, Order } from '../data-interfaces';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {

  displayedColumns: string[] = ['OrderID', 'UserID', 'HotelID','mobileNo', 'DeliveryDetails','Total_price', 'Status'];
  public ordersData:Data;
  public orderList;
  public foodOrderData:Order;
  public dataSource;

  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  
  errormsg:string;
  constructor(private _dataApiService:DataApiService, private router: Router) { }

  ngOnInit(): void {
    this._dataApiService.getOrdersListData().subscribe(
      data => {
          this.ordersData=data;
          this.orderList=this.ordersData.orders;
          console.log(this.orderList);
          this.dataSource=new MatTableDataSource(this.ordersData.orders);
          //For sorting of table data
          this.dataSource.sort= this.sort;
          this.dataSource.paginator=this.paginator;
      },
      error => {
        this.errormsg=error.message;
        
      }
    );

   
  }
  showDetails(row){
    alert(JSON.stringify(row));
    this.foodOrderData = row;
    console.log(this.foodOrderData);
    this._dataApiService.getFoodOrderResult(this.foodOrderData);
    this.router.navigate(["/details",row.OrderID]);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
// First Approach of Filtering

 /* sendit(data){
    data = data.toLowerCase();
    this.dataSource = this.orderList.filter((order:Order)=>{
    const objData = (order.OrderID+order.UserID+order.HotelID+order.USER_PHONE+order.DeliveryDetails+order.Total_price+order.Status).toLowerCase();
    return objData.includes(data);
   });
}*/

// Second Approach of Filtering
sendit(data){
  data = data.trim(); // Remove whitespace
  data = data.toLowerCase(); // Datasource defaults to lowercase matches
  this.dataSource.filter = data;
}
  
}
