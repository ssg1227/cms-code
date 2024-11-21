import { LookupValues } from '../../utils/lookup-values';
import { Component, OnInit } from '@angular/core';
import { ListService } from '../../../services/list.service';

@Component({
  selector: 'app-add-images',
  templateUrl: './add-images.component.html',
  styleUrls: ['./add-images.component.css']
})
export class AddImagesComponent implements OnInit {
  imageList:string[] = [] ;
  imagesMoved = true ;
  jsonListingFile =""
  jsonListing:string[] = [] ;
  showFinalEdit = false ;
  lookupValues = new LookupValues();
  constructor(private listService: ListService, ) { }

  ngOnInit(): void {
  }
  /* NEW INTERFACE - Tabbed */
  currentTab = 'move-file'
  toggleFinalEdit() {
    this.showFinalEdit = !this.showFinalEdit ;
  }
  
  selectTab(tabname:string) {
    this.currentTab = tabname ;
  }
  /* END */
  passImageFolders(imageFolders:string[]) {
    this.imageList = imageFolders ;
    this.imagesMoved = true ;
    console.log(`passImageFolders ${JSON.stringify(imageFolders)}`);
  }
  duplicateEntry = 'false';
  jsonFileToUpdate(configFileFolderAndKeys:string[]) {
    this.jsonListingFile = configFileFolderAndKeys[0] ;
    this.duplicateEntry = configFileFolderAndKeys[2];
  } 
  jsonToUpdate(jsonStrings:string[]) {
    console.log(`jsonToUpdate ${jsonStrings}`);
    this.jsonListing =   jsonStrings;
  //  this.jsonListing = this.duplicateEntry === 'false' ? 
  //    jsonStrings: this.filterJSONStrings(jsonStrings) ; r
 
  }
  editJSONListing(textLines:string[]) {
    this.jsonListing =   textLines;
  }
  filterJSONStrings(jStrings: string[]) { // DUPLICATE-11-2024 to substitute
    let lImageRoot = this.listService.ImageRoot ;
    jStrings.forEach((s:string) => {
        s = s.replace(`duplicate:  'false'`,`duplicate:  'true'`);
        s =  s.replace(/\${imageRoot}/g, lImageRoot);
    });
    alert(JSON.stringify(jStrings))
    return jStrings ;
  }
  // Getters, Styling etc
  componentDivStyle = {padding: '3px', background: 'aliceblue', margin:'3px', border: '3px inset blue'};
  get ComponentDivStyle()  :any {
    return  this.componentDivStyle ;
  }
  displayToggle(id:any, show = true )  {
    let m = document.getElementById(id) ;
   if (m) {
      show == true ? m.style.display = 'block':m.style.display = 'none';
   }
  }
  showComponent(whichDiv:any)  {
   
  }
  reset() {
    this.imageList = [];
    this.imagesMoved = false;
    this.jsonListing = [] ;
    this.jsonListingFile = '';
    
  }
  isPostDataReady() {
    return this.jsonListing.length === 0 || this.jsonListingFile === '';
  }
  postJSONUpdate() {
    console.log(`POSTJSONUPDATE: ${JSON.stringify(this.jsonListing)} ${this.jsonListingFile}`) ;
    if(this.duplicateEntry === 'true') { // DUPLICATE-11-2024 to substitute
      // old loop, circle around to use forEach
      for (let i = 0; i < this.jsonListing.length;i++) {  this.jsonListing[i] =  this.jsonListing[i].replace('false','true'); }
      for (let i = 0; i < this.jsonListing.length;i++) {  this.jsonListing[i] =  this.jsonListing[i].replace('${this.imageRoot}',this.listService.ImageRoot);  }
    }
    this.listService.updateListFile(this.jsonListing, this.jsonListingFile)
     .subscribe(
      (response:any)=> { 
        console.log('success') ;
        this.imageList = [""];
      },
      (err:any)=> { 
         console.log(`ERROR ${err}`)
      },
      () => {
        if (confirm("Data Submitted; clear it?")) this.reset() ;
        console.log('complete');      
      }
    )
  }

  albumEntryTextList=[this.lookupValues.albumsInsertTextFile,"","","",""];
  addAlbumEntry(textLines:string[]) {
    this.listService.addAlbumEntry(textLines)
     .subscribe(
      (response:any)=> { 
        console.log('success') ;
        this.imageList = [""];
      },
      (err:any)=> { 
         console.log(`ERROR ${err}`)
      },
      () => {
        if (confirm("Data Submitted; clear it?")) this.reset() ;
        console.log('complete');      
      }
    )
  }
}
