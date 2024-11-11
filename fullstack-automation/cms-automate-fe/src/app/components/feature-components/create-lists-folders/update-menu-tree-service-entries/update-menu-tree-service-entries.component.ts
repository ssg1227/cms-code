import { LookupValues } from '@utils//lookup-values';
import { Component, OnInit } from '@angular/core';
import { ListService } from '@services/list.service';
import { Input, Output, EventEmitter } from '@angular/core';
// NEW-CATEGORY-REFINE-11-2024
@Component({
  selector: 'app-update-menu-tree-service-entries',
  templateUrl: './update-menu-tree-service-entries.component.html',
  styleUrls: ['./update-menu-tree-service-entries.component.css']
})
export class UpdateMenuTreeServiceEntriesComponent {
  @Input() imageTreeMode = 'moveFiles';

  lookups: LookupValues = new LookupValues();
  destinationStart = this.lookups.rootImageDestinationFolder ;
  rootImageDestinationFolder = this.lookups.rootImageDestinationFolder ;
  currentParentFolder = this.lookups.rootImageDestinationFolder ;
  webAppRelativeFolderRoot = this.WebAppRoot;
  currentWebAppParentFolder =  this.WebAppRoot;
  level1Files = ["",""] ;
  level1Select = "";
  level1WebAppSelect = "";
  level2Files = ["",""] ;
  level2Select = "";
  level3Files = ["",""] ;
  level3Select = "";
  level4Files = ["",""] ;
  level4Select = "";
  level5Files = ["",""] ;
  level5Select = "";
  parentKey = "" ;//this.listService.MenuTreeParentKey ;
  get WebAppRoot() : string 
  {
    ;
    return this.currentParentFolder.substring(this.currentParentFolder.indexOf('asset') ) ;
  }
  constructor(private listService: ListService) { }

  ngOnInit(): void {
   
  }

  passImageFolders(imageFolders:string[]) {
    if (imageFolders && imageFolders.length > 0) {
      alert(imageFolders[0]);
      this.parentKey = imageFolders[0].split(`/`)[1];
    }
  }
  getImageSubFolder(event:any, level:number){
    switch(level) {
      case 1:  this.level1Select =  event.target.value;
              this.currentParentFolder = `${this.rootImageDestinationFolder}/${event.target.value}`;
              this.currentWebAppParentFolder  = `${this.webAppRelativeFolderRoot}${event.target.value}`
        break ;
      case 2:  this.level2Select =  event.target.value;
        this.currentParentFolder = `${this.rootImageDestinationFolder}/${this.level1Select}/${event.target.value}`;
        this.currentWebAppParentFolder  = `${this.webAppRelativeFolderRoot}${this.level1Select}${event.target.value}`;
        break ;
      case 3:  this.level3Select =  event.target.value;
        this.currentParentFolder = `${this.rootImageDestinationFolder}/${this.level1Select}/${this.level2Select}/${event.target.value}`;
        this.currentWebAppParentFolder  = `${this.webAppRelativeFolderRoot}${this.level1Select}${this.level2Select}/${event.target.value}`;
        break ;
        case 4:  this.level4Select =  event.target.value;
        this.currentParentFolder = `${this.rootImageDestinationFolder}/${this.level1Select}/${this.level2Select}/${this.level3Select}/${event.target.value}`;
        this.currentWebAppParentFolder  = `${this.webAppRelativeFolderRoot}${this.level1Select}${this.level2Select}/${this.level3Select}/${event.target.value}`;
        break ;
 
    }
     this.getImageFolders(this.currentParentFolder, level) ;
  }
  getParentKey(emitParentKey:string){
    this.parentKey = emitParentKey;
  }
  getImageFolders(parent:string, level:number)  {
    this.listService.getFolderContent(parent)// { fileName: "tedt",description:"hefhkf"})
   .subscribe(
     (response:any)=> { 
       switch(level) {
         case 1: 
         this.level1Files = ["select",...response] ; //this.level1Files = response ;
          //    this.level1Files.unshift("select");
           break ;
         case 2: 
         this.level2Files = ["select",...response] ; 
          //this.level2Files = response ;
          //    this.level1Files.unshift("select");
           break ;
         case 3:  
            this.level3Files = ["select",...response] ;
             // this.level3Files = response ;
             // this.level3Files.unshift("select");
           break ;
         case 4: this.level4Files = ["select",...response] ;
         //  this.level4Files = response ;
         //    this.level4Files.unshift("select");
             break ;
       }
      
     },
     (err:any)=>{ console.log(`ERROR ${err}`);  ; },
     () => { console.log('complete') ;   },
   )
 } 
}
