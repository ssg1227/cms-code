import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiline',
  templateUrl: './multiline.component.html',
  styleUrls: ['./multiline.component.css']
})
export class MultilineComponent implements OnInit, OnChanges {
  @Input() entityName = "" ;
  @Input() passedTextList:string[] = [];
  textLines = ["","","","","","",""] ;
  @Output() multiTextDone = new EventEmitter<string[]>();
  
  constructor() { }

  ngOnInit(): void {
    if (this.passedTextList !== null && this.passedTextList[0] !== "none") {
      this.textLines = JSON.parse(JSON.stringify(this.passedTextList));
    }
  }
  // This lifecycle hook will detect changes to the input property
  ngOnChanges(changes: SimpleChanges): void {
    this.textLines = JSON.parse(JSON.stringify(changes['passedTextList'].currentValue));
    if (changes['passedTextList']) {
      console.log('Input changed:', changes['passedTextList'].currentValue);
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
