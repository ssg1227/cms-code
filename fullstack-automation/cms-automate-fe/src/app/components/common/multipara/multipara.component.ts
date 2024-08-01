import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-multipara',
  templateUrl: './multipara.component.html',
  styleUrls: ['./multipara.component.css']
})
export class MultiparaComponent {

  @Input() entityName = "" ;
  @Input() passedTextList = ["none"];
  textLines = ["","","","","","",""] ;
  @Output() multiTextDone = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit(): void {
    if (this.passedTextList !== null && this.passedTextList[0] !== "none") {
      this.textLines = JSON.parse(JSON.stringify(this.passedTextList));
    }
  }
  addLine() {
    this.textLines.push("") ;
  }
  textLines1 = "";
  textLines2 = "";

  completed()
  {
    this.textLines.forEach((text:string,index) => {
      console.log(index) ;
      /* eslint-disable */
      let m = document.getElementById(`content-${index}`);
      let mo = document.getElementById('huu');
      console.log(`${m?.getAttribute("value")} ${m?.innerText}`);
      console.log(`${JSON.stringify(mo?.attributes)} ${this.textLines1}`);
    })
    this.multiTextDone.emit(this.textLines);
  }
  getId(lineIndex:any) {
    return `content-${lineIndex}`
  }
}
