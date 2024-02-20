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
export class CardComponent implements OnInit  {
  @Input() cardIndex = 0 ;
  @Input() cardSelected = 0 ;
  @Input() imageDetail:any = null ;
  @Output() clickedIndex = new EventEmitter<number>() ;
  cardState = 'default';
  ngOnInit(): void {}
  toggleCardState() {
    this.cardState = this.cardState === 'default' ? 'hover' : 'default';
  }
  expand() {
    this.clickedIndex.emit(this.cardIndex);
  }
  toggleSize() { 
   return this.cardIndex === this.cardSelected?  'expand':'thumb';
  }
}
