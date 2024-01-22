import { Component, OnInit } from '@angular/core';
import { TechDetail } from './detail-list';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-technical-detail',
  templateUrl: './technical-detail.component.html',
  styleUrls: ['./technical-detail.component.css']
})
export class TechnicalDetailComponent implements OnInit {
  headerList = 'overview';
  selectedHeader = TechDetail[0].content;
  selectedId = 'summary0';
  constructor() { }

  /* properties */
  get Today():string {
    return new Date().toLocaleDateString() ;
  }
  ngOnInit(): void {
    let techAspects = TechDetail ;
    console.log('tech');
    let headerDiv = document.getElementById('headers') ;
    if (headerDiv) {
      let ulHdr = document.createElement("ul");
      headerDiv.appendChild(ulHdr);
      let me = this; 
      techAspects.forEach((techAspect:any, index) =>  {
        if (techAspect.header && techAspect.key) {
          let li = document.createElement("li");
          li.setAttribute("id", `summary${index}`);
          index === 0 ? 
          li.setAttribute("style", "padding:2px; background:darkslateblue;color:white;fontWeight:bold; border: 2px inset cyan; width:250px"):
          li.setAttribute("style", "padding:2px; background:beige; border: 2px outset yellow; width:250px");
          li.appendChild(document.createTextNode(techAspect.header));
          li.addEventListener("click", function() { me.stopBubble(e, techAspect.key, `summary${index}`)});
          ulHdr.appendChild(li);
        }

      });
      
      let e:Event;
     
    }
  }
 
  stopBubble(e:Event, key:string, id:string) {
   let newSelected = document.getElementById(id) ;
   if (newSelected && id !== this.selectedId){
    let oldSelected = document.getElementById(this.selectedId);
    newSelected.setAttribute("style", "padding:2px; background:darkslateblue;color:white;fontWeight:bold; border: 2px inset cyan; width:250px");
    if (oldSelected)
      oldSelected.setAttribute("style", "padding:2px; background:beige; border: 2px outset yellow; width:250px");
    this.selectedId  = id;    
   }
   let foundContent = TechDetail.find(detail => detail.key === key);
   if (foundContent) {
    this.selectedHeader = foundContent.content ;
   }
  }
}
