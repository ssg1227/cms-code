
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service'; 

interface CartItem {
  image: string;
  name: string;
  unitPrice: number;
  unit: string;
  quantity: number;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: CartItem[] = [];
  pageIndex = 0;
  pageSize = 5;
  senderEmail=''
  constructor(  private shoppingCartService: ShoppingCartService,private http: HttpClient) {
   
      // @ts-ignore: Object is possibly 'null'.
  }
  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    

    this.cartItems = this.shoppingCartService.loadCartItems();
  }

  updateCart(item: CartItem) {
    // Logic to update the cart item, e.g., save changes to a server
  }

  deleteItem(item: CartItem) {
    this.shoppingCartService.deleteCartItem(item);
    this.cartItems = this.shoppingCartService.loadCartItems();
  }

  getTotalCost() {
    return this.cartItems.map(t => t.unitPrice * t.quantity).reduce((acc, value) => acc + value, 0);
  }

  submitCart() {
    const emailBody = this.cartItems.map(item =>
      `Name: ${item.name}, Unit Price: ${item.unitPrice}, Quantity: ${item.quantity}, Total: ${item.unitPrice * item.quantity}`
    ).join('\n');
    window.location.href = `mailto:shangads@gmail.com?subject=Shopping Cart&body=${encodeURIComponent(emailBody)}`;
  }
  submitCartServer() {
  const emailBody = this.cartItems.map(item =>
    `Name: ${item.name}, Unit Price: ${item.unitPrice}, Quantity: ${item.quantity}, Total: ${item.unitPrice * item.quantity}`
  ).join('\n');

  const emailData = {
    subject: 'Shopping Cart',
    text: emailBody
  };

  this.http.post('http://localhost:3000/send-email', emailData).subscribe((response:any) => {
    console.log('Email sent successfully');
  }, (error:any) => {
    console.error('Error sending email', error);
  });
}
  prevPage() {
    if (this.pageIndex > 0) {
      this.pageIndex--;
    }
  }

  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.cartItems.length) {
      this.pageIndex++;
    }
  }
}