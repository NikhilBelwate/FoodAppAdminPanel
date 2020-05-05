export class Category
{

    categoryId:number = 0;
    categoryName:string = "";
    categoryImgUrl:string="";

    constructor(categoryId:number, categoryName:string, categoryImgUrl:string){
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.categoryImgUrl = categoryImgUrl;
    }

}