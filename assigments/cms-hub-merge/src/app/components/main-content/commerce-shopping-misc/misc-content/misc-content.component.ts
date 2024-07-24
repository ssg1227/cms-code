import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-misc-content',
  templateUrl: './misc-content.component.html',
  styleUrls: ['./misc-content.component.css']
})
export class MiscContentComponent {
  @Input() bulkContent = '' ;
  

}
