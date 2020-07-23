import { GroceryCategoryModel } from 'src/model/GroceryCategoryModel';
import { DairyCategoryModel } from 'src/model/DairyCategoryModel';
import { SubCategory } from 'src/model/SubCategory';
import { FishMeatCategoryModel } from 'src/model/FishMeatCategoryModel';

export interface Record{
    OrderID:number;
    Old_status:string;
    New_status:string;
    Time: string;
}

export interface Records{
    records: Record[];
}
export interface FoodList {
    foodId: number;
    foodImage: string;
    foodName: string;
    foodPrice: number;
    hotelId: number;
    qty: number;
}

/*
export interface DeliveryDetails {
        Address: string;
        email: string;
        fullName: string;
        lat: number;
        lon: number;
        mobileNo: string;
        pinCode: number;

    }

    

    export interface OrderDetails {
        OrderId: number;
        cgst: number;
        delivaryCharge: number;
        foodList: FoodList[];
        grandTotal: number;
        sgst: number;
        totalPrice: number;
    }

    export interface Order {
        OrderID: string;
        UserID: string;
        USER_NAME: string;
        USER_Email: string;
        USER_PHONE:string;
        USER_ADDRESS:string;
        USER_PINCODE:string;
        USER_CITY:string;
        USER_STATE:string;
        HotelID: number;
        DeliveryDetails: DeliveryDetails;
        OrderDetails: OrderDetails;
        Total_price: string;
        Status: string;
        Time: string;
        Token:string;
    }
*/
    export interface Roles {
        roleId: number;
        roleName: String;
    }

    export interface Data {
        orders: Order[];
    }

    export interface Grocerycategory {
        categoryList: GroceryCategoryModel[];
    }

    export interface GrocerySubCategory {
        items: SubCategory[];
    }

    export interface Dairycategory {
        categoryList: DairyCategoryModel[];
    }

    export interface DairySubCategory {
        items: SubCategory[];
    }

    export interface FishMeatcategory {
        categoryList: FishMeatCategoryModel[];
    }

    export interface FishMeatSubCategory {
        items: SubCategory[];
    }

    export interface DeliveryDetails {
        addressName: string;
        addressText: string;
        id: number;
        lat: number;
        lon: number;
        pinCode: number;
        deliveryContact:string;
        state: string;
    }

    export interface ItemList {
        CategoryId: number;
        CategoryImage: string;
        CategoryName: string;
        LocationId: number;
        qty: number;
        ShopId: number;
        Status: string;
        SubCategoryId: number;
        SubCategoryName: string;
        SubCategoryPrice: number;
        SubCategoryTax: number;
        SubCategoryUrl: string;
        Type: string;
        Unit: string;
    }

    export interface OrderDetails {
        cgst: number;
        grandTotal: number;
        itemList: ItemList[];
        foodList: FoodList[];
        sgst: number;
        totalPrice: number;
        delivaryCharge:number;
    }

    export interface OrderStatusHistory {
        Old_status: string;
        New_status: string;
        admin_msg: string;
        Time: string;
    }

    export interface Order {
        OrderID: number;
        UserID: string;
        HotelID: number;
        DeliveryDetails: DeliveryDetails;
        OrderDetails: OrderDetails;
        Total_price: string;
        Status: string;
        Time: string;
        USER_ID: string;
        USER_NAME: string;
        USER_Email: string;
        USER_PHONE: string;
        USER_PASSWORD: string;  
        USER_ADDRESS: string;
        USER_PINCODE: string;
        USER_CITY: string;
        USER_STATE: string;
        USER_TYPE: string;
        USER_STATUS: string;
        Token: string;
        OrderStatusHistory: OrderStatusHistory[];
    }
    export class OrderUpdate {
        public OrderID: number;
        public Status: string;
        public Time:number;
        public AdminMsg: string;        
    }
