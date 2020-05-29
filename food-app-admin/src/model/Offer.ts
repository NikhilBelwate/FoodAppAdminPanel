export class Offer{
    validTill:number=0;
    offerPrice:number=0.0;
    offerText:string="New offer";
    constructor(validTill:number, offerPrice:number, offerText:string){
        this.validTill = validTill;
        this.offerPrice = offerPrice;
        this.offerText = offerText;
    }
    
}