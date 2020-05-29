import { Offer } from './Offer';

export class DBJson
{

    ItemID:number = 0;
    sectionName:string = "";
    NewStatus:string="";
    offer:Offer;

    constructor(ItemID:number, sectionName:string){
        this.ItemID = ItemID;
        this.sectionName = sectionName;
    }


}