export class DairyCategoryModel{
    
    DairyCategoryId:number = 0;
    CategoryName:string = "";
    CategoryImage:string="";
    Type:string="";
    ShopId:number =0;

    constructor(categoryId:number, categoryName:string, categoryImgUrl:string){
        this.DairyCategoryId = categoryId;
        this.CategoryName = categoryName;
        this.CategoryImage = categoryImgUrl;
    }
}