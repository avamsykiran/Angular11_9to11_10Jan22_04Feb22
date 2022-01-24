export interface Transaction {
    id:number;
    header:string;
    amount:number;
    type:string;
    isEditable?:boolean;
}
