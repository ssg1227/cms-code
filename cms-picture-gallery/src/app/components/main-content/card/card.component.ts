import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardState', [
      state('default', style({
        transform: 'scale(1)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      })),
      state('hover', style({
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
      })),
      transition('default => hover', animate('300ms ease-in')),
      transition('hover => default', animate('200ms ease-out'))
    ])
  ]
})
/* March 5 2024 start of re-use this for max + readonly size vs small and clickable 
  - one more input parameter @isLarge
*/
export class CardComponent {
  @Input() cardIndex = 0 ;
  @Input() cardSelected = 0 ;
  @Input() imageDetail:any = null ;
  @Input() isLarge:boolean = false ;
  @Output() clickedIndex = new EventEmitter<string>() ;

  cardState = 'default';
  _viewLink = `/view`;
  get ViewLink():string {
    return this._viewLink;
  }
  ngOnInit(): void {
    console.log(JSON.stringify(this.imageDetail.imageList))
  }
  toggleCardState() {
    this.cardState = this.cardState === 'default' ? 'hover' : 'default';
  }
  get FlattenedImage():string {
    return JSON.stringify(this.imageDetail.imageList);
  }
  get CardSelected():boolean {
    return this.cardIndex === this.cardSelected;
  }
  expand() {
    if (this.isLarge === true) {
      return ;
    }
    localStorage.setItem("isParentLeaf", this.imageDetail.isLeafParent.toString());
   // this,this.imageDetail.isLeafParent === true?
   //   this.clickedIndex.emit(this.cardIndex.toString()):
      this.clickedIndex.emit(this.imageDetail.key);
  }
  
  toggleCardSize() { 
   return this.isLarge === true ?  'expand':'thumb';
  }
  toggleImageSize() { 
    
    return this.cardIndex === this.cardSelected?  'image-expand':'image-thumb';
   }
 
}
