import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-origin',
  templateUrl: './material-origin.component.html',
  styleUrls: ['./material-origin.component.css']
})
export class MaterialOriginComponent implements OnInit {

  lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);
  constructor() { }

  ngOnInit(): void {
   

  }

}
