import { Component, Input, OnInit } from '@angular/core';

import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
interface ItemUnitPrice {
  unitPrice: number;
  unit: string;
}

@Component({
  selector: 'app-unit-price-selector',
  templateUrl: './unit-price-selector.component.html',
  styleUrls: ['./unit-price-selector.component.css']
})
export class UnitPriceSelectorComponent implements OnInit {
  @Input() itemUnitPrice: ItemUnitPrice[] = [];
  @Input() itemName: string = 'unnammed bakery item';

  selectedUnit: string = 'select';
  selectedPrice: number = 0 ;

  constructor( private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {}
  
  onUnitChangeOld(unit: string): void {
    this.selectedUnit = unit;
    const selectedItem = this.itemUnitPrice.find(item => item.unit === unit);
    this.selectedPrice = selectedItem ? selectedItem.unitPrice : 0;
  }
  onUnitChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const unit = selectElement.value;
    this.selectedUnit = unit;
    const selectedItem = this.itemUnitPrice.find(item => item.unit === unit);
    this.selectedPrice = selectedItem ? selectedItem.unitPrice : 0;
  }
  addToWishlist(): void {
    // Implement the logic for adding to wishlist
    let cartItem =
    {
      image: '',

      name:this.itemName,
      unitPrice: this.selectedPrice,
      unit: this.selectedUnit,
      quantity: 1,
    }
 
    this.shoppingCartService.addCartItem(cartItem);
    console.log(`Added to wishlist: ${this.selectedUnit} - ${this.selectedPrice}`);
  }
}
