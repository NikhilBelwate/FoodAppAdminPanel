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

  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  
  errormsg:string;
  constructor(private _dataApiService:DataApiService, private router: Router) { }

  ngOnInit(): void {
    this._dataApiService.getOrdersListData().subscribe(
      data => {
          this.ordersData=data;
          this.orderList=new MatTableDataSource(this.ordersData.orders);
          //For sorting of table data
          this.orderList.sort= this.sort;
          this.orderList.paginator=this.paginator;
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

  applyFilter(searchdata:string){


    this.orderList.filterPredicate = function(data, filter: string): boolean {
      if(JSON.stringify(data).toLowerCase().includes(filter)||data.DeliveryDetails.mobileNo.toLowerCase().includes(filter) || data.DeliveryDetails.Address.toLowerCase().includes(filter) ){
        return true;
      }else{

        return false;
      }
    }
    this.orderList.filter=searchdata.trim().toLowerCase();
  }

  
}
