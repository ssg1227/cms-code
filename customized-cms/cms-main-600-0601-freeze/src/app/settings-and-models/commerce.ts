
export const IsCommerce = 'false';
export interface CartItem {
    image: string;
    name: string;
    unitPrice: number;
    unit: string;
    quantity: number;
  }
export interface ItemUnitPrice {
  unitPrice:number;
  unit:string;
  itemClass:string;
}
export interface ItemPrice {
    category:string;
    unitPrice?:number;
    unit?:string;
    itemUnitPrice?:ItemUnitPrice[];
}