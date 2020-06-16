export class GroceryCategoryModel
{

    GroceryCategoryId:number = 0;
    CategoryName:string = "";
    CategoryImage:string="";
    Type:string="";
    ShopId:number =0 ;

    constructor(categoryId:number, categoryName:string, categoryImgUrl:string){
        this.GroceryCategoryId = categoryId;
        this.CategoryName = categoryName;
        this.CategoryImage = categoryImgUrl;
    }

}