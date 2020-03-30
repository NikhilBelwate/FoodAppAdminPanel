
    export interface DeliveryDetails {
        Address: string;
        email: string;
        fullName: string;
        lat: number;
        lon: number;
        mobileNo: string;
        pinCode: number;
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
        HotelID: string;
        DeliveryDetails: DeliveryDetails;
        OrderDetails: OrderDetails;
        Total_price: string;
        Status: string;
        Time: string;
    }

    export interface Data {
        orders: Order[];
    }
