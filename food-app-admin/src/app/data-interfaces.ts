import { GroceryCategoryModel } from 'src/model/GroceryCategoryModel';
import { SubCategory } from 'src/model/SubCategory';

export interface DeliveryDetails {
        Address: string;
        email: string;
        fullName: string;
        lat: number;
        lon: number;
        mobileNo: string;
        pinCode: number;

    }

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
        HotelID: number;
        DeliveryDetails: DeliveryDetails;
        OrderDetails: OrderDetails;
        Total_price: string;
        Status: string;
        Time: string;
        Token:string;
    }

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