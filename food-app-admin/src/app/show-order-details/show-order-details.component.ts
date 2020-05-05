import { ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../data-api.service';
import { Order, Records, Record } from '../data-interfaces';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-show-order-details',
  templateUrl: './show-order-details.component.html',
  styleUrls: ['./show-order-details.component.css']
})
export class ShowOrderDetailsComponent implements OnInit {

  newStatus:string;
  orderID:number;
  orderInfo:Order;
  errormsg:string;
  statusRecord:Record[];
  options: FormGroup;
  colorControl = new FormControl('primary');
  foods = ["Ronak","Nikhil","Rahul"];
  constructor(private route:ActivatedRoute, private _dataApiService:DataApiService) { 

    
  }
  
  ngOnInit(): void {
    this.orderID= parseInt(this.route.snapshot.paramMap.get("orderID"));
    this._dataApiService.getOrderDetails(this.orderID).subscribe(
      data=>{
        this.orderInfo=data;
      },
      error=>{
        this.errormsg=error.message;
      }
    );
  
  //To get status changes record
  this._dataApiService.getStatusHistoryRecords(this.orderID).subscribe(
    data=>{
      this.statusRecord=data.records;

    },
    error=>{
      this.errormsg=error.message;
    }
  );
}

changeStatus(){
 // alert(this.orderInfo.OrderID+" "+ this.newStatus+ " "+new Date().getTime());

  /*const valueset={
    orderID:this.orderInfo.OrderID,
    status:this.newStatus,
    time:new Date().getTime()
  }*/
  const httpParams = new HttpParams().set('orderID', this.orderInfo.OrderID)
  .set('status', this.newStatus).set('time', new Date().getTime().toString());
  //To get status changes record
  this._dataApiService.setNewStatusOnServer(httpParams).subscribe(
    data=>{
     // this.statusRecord=data.records;
      alert(JSON.stringify(data));
    },
    error=>{
      this.errormsg=error.message;
    }
  );
}
}
