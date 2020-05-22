import { ActivatedRoute} from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { DataApiService } from '../data-api.service';
import { Order, Records, Record } from '../data-interfaces';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DeleteGroceryCategoryInventoryComponent } from '../Grocery/delete-grocery-category-inventory/delete-grocery-category-inventory.component';

@Component({
  selector: 'app-show-order-details',
  templateUrl: './show-order-details.component.html',
  styleUrls: ['./show-order-details.component.css']
})
export class ShowOrderDetailsComponent implements OnInit {

  newStatus:string;
  orderID:number;
  orderInfo:Order;
  orderInfo1:Order;
  errormsg:string;
  statusRecord:Record[];
  options: FormGroup;
  colorControl = new FormControl('primary');
  foodStatus = ["Order has been Placed","Order Confirmed","Food Out for delivery","Order Cancelled by the Hotel"];
  otherStatus = ["Order has been Placed","Order Out for delivery","Order Cancelled"];
  url;
  @Input() public foodOrderData:Order;
  constructor(private route:ActivatedRoute, private _dataApiService:DataApiService,public dialog: MatDialog) { 

    
  }
  
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  sendNotification(title,msg,token){
    this.url="http://zazafood.epizy.com/foodAppAPI/send_notification.php?title="+title+"&msg="+msg+"&token="+token;
    window.open(this.url, '_blank').focus();
  }
  updateStatus(orderId,token){
      /*const dialogRef = this.dialog.open(DeleteGroceryCategoryInventoryComponent, {
        
      });*/
      alert(this.orderInfo1.Token);
      this.sendNotification("Welcome User","Hello",this.orderInfo1.Token);
  }
  ngOnInit(): void {
    
    //this.orderID= parseInt(this.route.snapshot.paramMap.get("orderID"));
    this._dataApiService.foodOrder$.subscribe(
      order => {
        this.orderInfo=order;
        //this.newStatus = this.orderInfo1.Status
        console.log(this.orderInfo1);
      },
      error=>{
        this.errormsg=error.message;
      }
    );
      this._dataApiService.getOrderDetails(this.orderID).subscribe(
        data=>{
          this.orderInfo1=data;
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
  const httpParams = new HttpParams().set('orderID', this.orderInfo.OrderID.toString())
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
