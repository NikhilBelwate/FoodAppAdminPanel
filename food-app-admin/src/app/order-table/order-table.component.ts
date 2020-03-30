import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../data-api.service';
import { Data, Order } from '../data-interfaces';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {

  displayedColumns: string[] = ['OrderID', 'UserID', 'HotelID', 'Total_price', 'Status'];
  public ordersData:Data;
  public orderList:Order[];
  errormsg:string;
  constructor(private _dataApiService:DataApiService) { }

  ngOnInit(): void {
    this._dataApiService.getOrdersListDataJsonp().subscribe(
      data => {
          this.ordersData=data;
          this.orderList=this.ordersData.orders;
      },
      error => {
        this.errormsg=error.message;
        
      }
    );
  }

}
