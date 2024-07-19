import { Injectable } from '@angular/core';

interface CartItem {
  image: string;
  name: string;
  unitPrice: number;
  unit: string;
  quantity: number;
}
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  cartItems: CartItem[] = [];
  constructor() { }
  
  async loadCartItems(): Promise<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        // Simulated data
        const data = this.cartItems;
        resolve(data);
      }, 2000); // Simulate a delay of 2 seconds (adjust as needed)
    });
  }
  loadCartItemsSYNC() {
    console.log(` CART OTEMS ${JSON.stringify(this.cartItems)}`);
    /*
    const items: CartItem[] = [
      { image: 'path/to/image1.jpg', name: 'Item 1', unitPrice: 10, unit: 'pcs', quantity: 2 },
      { image: 'path/to/image2.jpg', name: 'Item 2', unitPrice: 20, unit: 'pcs', quantity: 1 },
      // Add more items as needed
    ];
    */
    return this.cartItems ;
  }
  addCartItem(cartItem: CartItem){
    console.log(`cart Item ${JSON.stringify(cartItem)}`);
    let existingIndex = this.cartItems.findIndex((item:CartItem) => item.name === cartItem.name && item.unitPrice === cartItem.unitPrice);
    if (existingIndex >= 0) {
      this.cartItems[existingIndex].quantity += cartItem.quantity ;
    } else {
      this.cartItems.push(cartItem) ;
    }
  }
  deleteCartItem(item: CartItem){
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);}

}
