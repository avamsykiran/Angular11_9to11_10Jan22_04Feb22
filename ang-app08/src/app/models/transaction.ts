export interface Transaction {
    id?:number;
    header:string;
    amount:number;
    type:string;
    userId:number;
    isEditable?:boolean;
}
