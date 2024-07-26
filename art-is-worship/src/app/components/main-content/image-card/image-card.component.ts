import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css'],
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
export class ImageCardComponent {
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
    if(localStorage.getItem("key") !== null) {
      // @ts-ignore: Object is possibly 'null'.
      this.key = localStorage.getItem('key')|'';
    }
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
  get ToolTip():string {
    let sansHTMLtag = '';
    sansHTMLtag = this.imageDetail.imageList[0].description.replace(/<[^>]*>/g,'');
    return sansHTMLtag ;
  }
  get ImageLabel():string {
    if (this.imageDetail.imageList[0].summaryLabel && this.imageDetail.imageList[0].summaryLabel.trim !== '') {
      
      return this.imageDetail.imageList[0].summaryLabel
    }
    let aInd =   this.imageDetail.imageList[0].description.trim().replace(`\n`,'').replace('<ul>','')
    .replace('<li>','').trim() ;

    aInd = aInd.substring(0, aInd.search('</li>') ) ;
    return aInd ;

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
  getCardCSS() { 
    // move chosing card style logic to core content service 
    if (this.imageDetail !== null && this.imageDetail.imageList[0].cardStyle && this.imageDetail.imageList[0].cardStyle.outer) {
      return this.imageDetail.imageList[0].cardStyle.outer;
    }

    // below redundant code 
    let returnCardCSS = 'card-default';
     
    if (this.imageDetail !== null) {
      if(this.imageDetail.imageList[0].description.toLowerCase().indexOf('black and white') >= 0||
         this.imageDetail.imageList[0].description.toLowerCase().indexOf('black-white') >= 0) {
            returnCardCSS = 'card-default card-mono'
      } else if (this.imageDetail.imageList[0].description.toLowerCase().indexOf('watercolor') >= 0 || 
      this.imageDetail.imageList[0].description.toLowerCase().indexOf('water color') >= 0){
        returnCardCSS = 'card-default card-watercolor'
      } else  if (this.imageDetail.imageList[0].description.toLowerCase().indexOf('combination of color') >= 0){
        returnCardCSS = 'card-default card-mix'
      }
      returnCardCSS = `${returnCardCSS} card-image-modifier` ;// image label height:auto
    }
    
    returnCardCSS = this.isLarge === true ? `${returnCardCSS} expand` :  `${returnCardCSS} thumb`
    return returnCardCSS ;
  }

  selectImageBorder() { 
    // move chosing card style logic to core content service 
    if (this.imageDetail.imageList[0].cardStyle && this.imageDetail.imageList[0].cardStyle.image) {
      return this.imageDetail.imageList[0].cardStyle.image ;

    }
    // below redundant code 
    let returnCardImageCSS = 'card-image';
    
    if (this.imageDetail !== null) {
    //  console.log(`${JSON.stringify(this.imageDetail)}`);
      if(this.imageDetail.imageList[0].description.toLowerCase().indexOf('black and white') >= 0||
         this.imageDetail.imageList[0].description.toLowerCase().indexOf('black-white') >= 0) {
            returnCardImageCSS = 'card-image card-image-mono'
      } else if (this.imageDetail.imageList[0].description.toLowerCase().indexOf('watercolor') >= 0 || 
      this.imageDetail.imageList[0].description.toLowerCase().indexOf('water color') >= 0){
        returnCardImageCSS = 'card-image card-image-watercolor'
      } else  if (this.imageDetail.imageList[0].description.toLowerCase().indexOf('combination of color') >= 0){
        returnCardImageCSS = 'card-image card-image-mix'
      } else  if (this.imageDetail.imageList[0].description.toLowerCase().indexOf('crayon') >= 0){
        returnCardImageCSS = 'card-image card-image-crayon'
      }
      if (this.imageDetail.imageList[0].description.toLowerCase().indexOf('soft copy only') >= 0 ){
        returnCardImageCSS = `${returnCardImageCSS} card-image-softcopy`
      }
      if (this.imageDetail.imageList[0].description.toLowerCase().indexOf('content: other') >= 0 ){
        returnCardImageCSS = `${returnCardImageCSS} card-other`
      }
    }
    return returnCardImageCSS ;
   return this.imageDetail.imageList[0].description.toLowerCase().indexOf('black and white') >= 0 ?
    'card-image-mono': 'card-image';
  }
  toggleImageSize() { 
    
    return this.cardIndex === this.cardSelected?  'image-expand':'image-thumb';
   }
 
}
