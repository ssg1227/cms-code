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
  @Input() cardInfo:any = null ;
  @Input() imageDetail:any = null ;
  @Input() isLarge:boolean = false ;
  @Output() clickedIndex = new EventEmitter<string>() ;

  cardState = 'default';
  _viewLink = `/view`;
  get ViewLink():string {
    return this._viewLink;
  }
  ngOnInit(): void {
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
    // separation of logic for branch.. 
    if (this.cardInfo!== null ) {
      localStorage.setItem("isLeafParent", this.cardInfo.isLeafParent.toString());
      localStorage.setItem("key", this.cardInfo.key);
      localStorage.setItem("isCompiledList", `false`);
      if(this.cardInfo.isLeafParent===true && this.cardInfo.isCompiledList===true) {
        localStorage.setItem("isCompiledList", this.cardInfo.isCompiledList.toString());
      } 
      this.clickedIndex.emit(this.cardInfo.key);
    }
    //... AND for leaf (actual pic listing)
    if (this.imageDetail !== null)
      this.clickedIndex.emit(this.cardIndex.toString());
   // this,this.imageDetail.isLeafParent === true?
   //  
    
  }
  
  toggleCardSize() { 
    let returnClass = this.imageDetail !== null && this.imageDetail.imageList[0].description.toLowerCase().indexOf('black and white') >= 0 ? 
      'card-mono': 'card';
    returnClass = this.isLarge === true ? `${returnClass} expand` :  `${returnClass} thumb`
  // return this.isLarge === true ?  'expand':'thumb';
    return returnClass;
  }
  selectImageBorder() {
   return this.imageDetail.imageList[0].description.toLowerCase().indexOf('black and white') >= 0 ?
    'card-image-mono': 'card-image';
  }
  toggleImageSize() { 
    
    return this.cardIndex === this.cardSelected?  'image-expand':'image-thumb';
   }
 
}
