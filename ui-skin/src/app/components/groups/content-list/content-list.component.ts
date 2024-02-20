import { Component } from '@angular/core';
import { GaneshPreQ42021ImageList} from '../../../../assets/images-with-listing/pre-q4-2021ganesh/ganesh-pre-q4-2021.image.list';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
  currentImageList = new GaneshPreQ42021ImageList() ;
  currentCellSelected=0 ;
  
  compareSelected(value:number, i:number) {
    this.currentCellSelected = value  ;
  }
}
