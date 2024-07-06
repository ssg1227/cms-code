
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { destinationEmail,destinationCCEmail } from '@settings-and-models/static-text-other-constants';
import { ShoppingListService } from 'src/app/services/shopping-list.service'; 

interface CartItem {
  image: string;
  name: string;
  unitPrice: number;
  unit: string;
  quantity: number;
}

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  cartItems: CartItem[] = [];
  pageIndex = 0;
  pageSize = 5;
  senderEmail=''
  constructor(  private shoppingListService: ShoppingListService,private http: HttpClient) {
   
      // @ts-ignore: Object is possibly 'null'.
  }
  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.shoppingListService.loadCartItems();
  }

  updateCart(item: CartItem) {
    // Logic to update the cart item, e.g., save changes to a server
  }

  deleteItem(item: CartItem) {
    this.shoppingListService.deleteCartItem(item);
    this.cartItems = this.shoppingListService.loadCartItems();
  }

  getTotalCost() {
    return this.cartItems.map(t => t.unitPrice * t.quantity).reduce((acc, value) => acc + value, 0);
  }

  submitCart() {
    let emailBody = 'Items selected:\n' ;
    emailBody = `${emailBody} ${this.cartItems.map(item =>
      `Name: ${item.name}, Unit Price: ${item.unitPrice}, Unit: ${item.unit},Quantity: ${item.quantity}, Total: ${item.unitPrice * item.quantity}`
    ).join('\n')}`;
    emailBody = `${emailBody}\n TOTAL: ${this.getTotalCost()}`;
    window.location.href = `mailto:${destinationEmail}?cc=${destinationCCEmail}&subject=Shopping List&body=${encodeURIComponent(emailBody)}`;
  }
  submitCartServer() {
  const emailBody = this.cartItems.map(item =>
    `Name: ${item.name}, Unit Price: ${item.unitPrice}, Quantity: ${item.quantity}, Total: ${item.unitPrice * item.quantity}`
  ).join('\n');

  const emailData = {
    subject: 'Shopping List',
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