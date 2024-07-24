
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
  dataLoaded = 'false' ;
  constructor(  private shoppingListService: ShoppingListService,private http: HttpClient) {
   
      // @ts-ignore: Object is possibly 'null'.
  }
  ngOnInit() {
   // this.loadCart();
    this.loadCartAsync();
  }
  async loadCartAsync() {
    try {
      this.cartItems =  await this.shoppingListService.loadCartItems();
      this.dataLoaded = 'true' ;
      // Further processing of data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  loadCart() {
    this.cartItems =  this.shoppingListService.loadCartItemsSYNC();
  }

  updateCart(item: CartItem) {
    // Logic to update the cart item, e.g., save changes to a server
  }

  deleteItem(item: CartItem) {
    this.shoppingListService.deleteCartItem(item);
    this.cartItems = this.shoppingListService.loadCartItemsSYNC();
  }

  getTotalCost() {
    return this.cartItems.map(t => t.unitPrice * t.quantity).reduce((acc, value) => acc + value, 0);
  }

  submitCart() {
    let emailBody = 'Items selected:\n-----------------------------\n\n' ;
    emailBody = `${emailBody} ${this.cartItems.map((item:any, index:number) =>
      `${index+1}) Name: ${item.name}, Unit Price: ${item.unitPrice}, Unit: ${item.unit},Quantity: ${item.quantity}, Total: ${item.unitPrice * item.quantity}`
    ).join('\n')}`;
    emailBody = `${emailBody}\n\n TOTAL: ${this.getTotalCost()}`;
    emailBody = `${emailBody} \nPlease give: \n Desired Date of Delivery = Date/Month/Year (I will try to meet this),: \n\n  Postal address:\n\n\n\n\n\n  for any clarification sought, or if you need some additional changes, please write what you want below, OR text me at 9820848489\n Sincerely,\n Marisa\n`
  
    window.location.href = `mailto:${destinationEmail}?cc=${destinationCCEmail}&subject=Shopping List&body=${encodeURIComponent(emailBody)}`;
  }
  submitCartServer() {
  let emailBody = this.cartItems.map(item =>
    `Name: ${item.name}, Unit Price: ${item.unitPrice}, Quantity: ${item.quantity},      Total: ${item.unitPrice * item.quantity}`
  ).join('\n');
  emailBody = `${emailBody} \n\n Desired Date of Delivery = Date/Month/Year (I will try to meet this),: \n Postal address:\n\n\n\n\n For any clarification sought, or if you need some additional changes, please write what you want below, OR text me at 9820848489\n\n Sincerely,\n Marisa\n`
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