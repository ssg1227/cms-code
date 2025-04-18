import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { LookupValues } from '@utils/lookup-values';
import { ListService } from '@services/list.service';

@Component({
  selector: 'app-lists-folders',
  templateUrl: './lists-folders.component.html',
  styleUrls: ['./lists-folders.component.css']
})
export class ListsFoldersComponent implements OnInit {

  @Input() listsFolderMode = 'writeToFile';
  @Output() configFileFound = new EventEmitter<string[]>();
  lookups: LookupValues = new LookupValues();
  rootConfigFolder = this.lookups.rootConfigFolder ;
  configFileFolder = this.rootConfigFolder ;
  currentParentFolder =  this.rootConfigFolder;
  // DUPLICATE-11-2024
  currentImageFolder = this.listService.ImageRoot ;
  keys = this.lookups.keys;
  key = '';
  level1Files = ["",""] ;
  level1Select = "";
  level1WebAppSelect = "";
  level2Files = ["",""] ;
  level2Select = "";
  level3Files = ["",""] ;
  level3Select = "";
  level4Files = ["",""] ;
  level4Select = "";
  imageFileName="ee"

  listFolderName="";
  newlistFolderName="";
  listFileName= this.listService.ImageListFileName;
  listFileImport
   = `import { ${this.listService.ImageListClassName}} from '${this.getRelativePath( this.currentParentFolder,'src')}/${this.listService.ImageFolderName}.image.list';`
   listFilePush
   = `contentList.push( { contentFile:new ${this.listService.ImageListClassName}(),contentCategory:'${this.listService.ImageFolderName}', roles:${this.listService.ImageListRole},latest:true, reverseStack:'false'}) ;
       `
  imageFiles:string[]=[] ;
  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getImageFolders(this.rootConfigFolder, 1) ;
  }
  // get relative path 
  getRelativePath(absolutePath:string, patternForSubString:string):string {
    let relativePath ='';
    let subIndex = absolutePath.indexOf(patternForSubString);
    relativePath = absolutePath.substring(subIndex);
    return relativePath ;
  }
  // NEW-CATEGORY-REFINE-11-2024
  get FilteredListFileFrameLines(): string[] {
    let filteredLines =  [''];//JSON.parse(JSON.stringify(this.lookups.listFileFrameLines));
    this.lookups.listFileFrameLines.forEach((frameLine:string) =>{
      filteredLines.push( frameLine.replace(`<imageroot>`, `'${this.getRelativePath(this.listService.ImageRoot,'assets')}'`)
                  .replace(`<CLASSNAME>`, this.listService.ImageListClassName)
                  .replace(`<folderName>`, this.listService.ImageFolderName));
    })
    console.log(`FILERE GET ${JSON.stringify(this.lookups.listFileFrameLines)}`)
  return filteredLines;
  }
  getImageFolders(parent:string, level:number)  {
    this.listService.getFolderContent(parent)// { fileName: "tedt",description:"hefhkf"})
   .subscribe(
     (response:any)=> { 
       switch(level) {
         case 1:  this.level1Files = ["select",...response] ; //this.level1Files = response ;
         //    this.level1Files.unshift("select");this.level1Files = response ;
           break ;
         case 2:  this.level2Files = ["select",...response] ; //this.level1Files = response ;
         //    this.level1Files.unshift("select");this.level2Files = response ;
           break ;
         case 3:  this.level3Files = ["select",...response] ; //this.level1Files = response ;
         //    this.level1Files.unshift("select");this.level2Files = response ;
           break ;
           case 4:  this.level4Files = ["select",...response] ; //this.level1Files = response ;
           //    this.level1Files.unshift("select");this.level2Files = response ;
             break ;
       }
      
     },
     (err:any)=>{ console.log(`ERROR ${err}`);  ; },
     () => { console.log('complete') ;   },
   )
 } 

 getImageListSubFolder(event:any, level:number){
  switch(level) {
    case 1:  this.level1Select =  event.target.value;
            this.currentParentFolder = `${this.rootConfigFolder}/${event.target.value}`;
       break ;
    case 2:  this.level2Select =  event.target.value;
      this.currentParentFolder = `${this.rootConfigFolder}/${this.level1Select}/${event.target.value}`;
      break ;
    case 3:  this.level3Select =  event.target.value;
    alert(this.level3Select);
      this.currentParentFolder = `${this.rootConfigFolder}/${this.level1Select}/${this.level2Select}/${event.target.value}`;
      break ;
      case 4:   
      alert(event.target.value);
        this.currentParentFolder = `${this.rootConfigFolder}/${this.level1Select}/${this.level2Select}/${this.level3Select}/${event.target.value}`;
        break ;
  }
  this.currentParentFolder = this.currentParentFolder.replace(`//`,`/`).replace(`//`,'/').replace('(file)','');
  this.getImageFolders(this.currentParentFolder, level) ;
}
  verifyConfigLocation(duplicate = false) { // DUPLICATE-11-2024 optional param -->
    this.configFileFolder = this.currentParentFolder;
    let configFileFolderAndKeys = [ this.configFileFolder, this.key, 
        duplicate.toString() ]  // DUPLICATE-11-2024 optional param -->
    alert(JSON.stringify(configFileFolderAndKeys)) ;
    this.configFileFound.emit(configFileFolderAndKeys); 
  }
  // DUPLICATE-11-2024 -->
  duplicateListing = false ;
  dup() {
    this.duplicateListing = !this.duplicateListing 
      
  }
   // NEW-CATEGORY-REFINE-11-2024 .. if we are creating an image list folder hierarchu
  createListFolder() {
    let folderToCreate = `${this.currentParentFolder}/${this.listFolderName}`;
   
    let assetInd2 = folderToCreate.indexOf('asset') ;
    let imageRoot2 = `${folderToCreate.substring(assetInd2).replace(`//`,`/`)}/`;
      alert(imageRoot2);
    this.listService.ImageRoot = imageRoot2;
    this.listService.ImageFolderName = this.listFolderName ;
    //..// NEW-CATEGORY-REFINE-11-2024
    alert(`CREAT ${this.currentParentFolder}/${this.listFolderName}`);

    this.listService.createFolder( `${this.currentParentFolder}/${this.newlistFolderName}`).subscribe(
      (response:any)=> { 
        this.getImageFolders(this.rootConfigFolder, 1) ;
        console.log('success') ;
      },
      (err:any)=>console.log(`ERROR ${err}`),
      () => console.log('complete'),
    )

  }
   // NEW-CATEGORY-REFINE-11-2024
  createImageListFolder() {
    /*
    let folderToCreate = `${this.currentParentFolder}/${this.folderName}`;
    // NEW-CATEGORY-REFINE-11-2024
    let assetInd2 = folderToCreate.indexOf('asset') ;
    let imageRoot2 = `${folderToCreate.substring(assetInd2).replace(`//`,`/`)}/`;
      alert(imageRoot2);
    this.listService.ImageRoot = imageRoot2;
    this.listService.ImageFolderName = this.folderName ;
    //..// NEW-CATEGORY-REFINE-11-2024
    this.listService.createFolder( `${this.currentParentFolder}/${this.folderName}`).subscribe(
      (response:any)=> { 
        this.getImageFolders(this.rootImageDestinationFolder, 1) ;
        console.log('success') ;
      },
      (err:any)=>console.log(`ERROR ${err}`),
      () => console.log('complete'),
    )

    this.imageVersionsDone.emit([`${this.currentParentFolder}/${this.folderName}`]);
    */
  }
  // menu tree needs to be copied back here for leaf
  copyBackFromLiveToAutomate() {
    let copyDetail = {
      sourceFileName: this.lookups.menutreePath,
      destFileName: this.lookups.menutreeEditPath
    };
    this.copyFiles(copyDetail, "copied back successfully");
    
  }

  copyFiles(copyDetail: any, message: String) {
    this.listService.copyFile(copyDetail)
      .pipe(

    )
      .subscribe({
        next: (v: any) => { alert(message); },
        /* next:(v:any) => {
           //alert('1st copy');
           let copyDetail2 = {
             sourceFileName: this.lookups.menutreeFinalPath,  
             destFileName: this.lookups.menutreeTempPath
           }
           this.listService.copyFile(copyDetail2)
           .subscribe({
             next:(v2:any) => { console.log('2st copy');},
             error:(v3:any)  => { console.log(`2st err ${JSON.stringify(v3)}`);},
           });
           // this.listService.copyFile(copyDetail)
         },*/
        error: (v: any) => {
          alert(message);
          alert('error');
        }
      });

  }
  //..// NEW-CATEGORY-REFINE-11-2024
  // .. DUPLICATE-11-2024 -->
   createListFile(textLines:string[]) {
    textLines.unshift(`${this.currentParentFolder}/${this.listFileName}`);
    alert(JSON.stringify(textLines));
    this.listFileImport
   = `import { ${this.listService.ImageListClassName}} from '${this.getRelativePath( this.currentParentFolder,'src')}/${this.listService.ImageFolderName}.image.list';`
  
    this.listService.createFile(textLines).subscribe(
      (response:any)=> { 
        console.log('success') ;
      },
      (err:any)=>console.log(`ERROR ${err}`),
      () => console.log('complete'),
    );
   }
 }
