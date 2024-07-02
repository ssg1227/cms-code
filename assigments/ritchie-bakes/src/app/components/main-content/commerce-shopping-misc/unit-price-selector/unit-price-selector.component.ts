import { Component, Input, OnInit } from '@angular/core';
import { ItemPrice, ItemUnitPrice } from '@settings-and-models/commerce';
import { ShoppingListService } from 'src/app/services//shopping-list.service';


@Component({
  selector: 'app-unit-price-selector',
  templateUrl: './unit-price-selector.component.html',
  styleUrls: ['./unit-price-selector.component.css']
})
export class UnitPriceSelectorComponent {
  @Input() itemPrice: any= null;
  @Input() itemUnitPrice: ItemUnitPrice[] = this.itemPrice !== null? this.itemPrice.itemUnitPrice:[];

 @Input() itemName: string = 'unnammed bakery item';

  selectedUnit: string = 'select';
  selectedUnitName: string = 'select';
  
  selectedPrice: number = 0 ;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {}
  
  FilteredItemUnit(item:ItemUnitPrice):string
  {
    let unit = item.unit ;
    if (item.unit.indexOf('#') > 0 ) {
      let unitNameAndQty = item.unit.split('#');
      if (unitNameAndQty.length  > 0) {
        unit = unitNameAndQty[0];
      }
    }
    return unit ;
  }
  onUnitChangeOld(unit: string): void {
    this.selectedUnit = unit;
    const selectedItem = this.itemUnitPrice.find(item => item.unit === unit);
    this.selectedPrice = selectedItem ? selectedItem.unitPrice : 0;
  }
  onUnitChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const unit = selectElement.value;
    this.selectedUnit = unit;
    this.selectedUnitName = unit;
    
    const selectedItem = this.itemUnitPrice.find(item => item.unit === unit);
    if (selectedItem?.itemClass !== '') {
      // @ts-ignore: Object is possibly 'null'.
      this.selectedUnitName = selectedItem.itemClass
    }
    this.selectedPrice = selectedItem ? selectedItem.unitPrice : 0;
  }
  CommaSeoparate(unit:string):string {
      let returnUnit = unit;
      if (unit.indexOf(',')>0) {
        returnUnit = unit.split(',')[1];
      }
      return returnUnit;
  }
  addToWishlist(): void {
    // Implement the logic for adding to wishlist
    let cartItem =
    {
      image: '',

      name: this.selectedUnitName, //this.itemName,
      unitPrice: this.selectedPrice,
      unit: this.CommaSeoparate(this.selectedUnit),
      quantity: 1,
    }
 
    // coming soon 
    this.shoppingListService.addCartItem(cartItem);
    console.log(`Added to wishlist: ${this.selectedUnit} - ${this.selectedPrice}`);
  }
}
