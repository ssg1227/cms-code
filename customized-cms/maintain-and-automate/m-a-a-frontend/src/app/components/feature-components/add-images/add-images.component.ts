import { LookupValues } from '../../utils/lookup-values';
import { Component, OnInit } from '@angular/core';
import { ListService } from '../../../services/list.service';

@Component({
  selector: 'app-add-images',
  templateUrl: './add-images.component.html',
  styleUrls: ['./add-images.component.css']
})
export class AddImagesComponent implements OnInit {
  fileToUpdate = '';
  test = false ;
  imageList:string[] = [] ;
  imagesMoved = true ;
  jsonListingFile =""
  jsonListing:string[] = [] ;
  showFinalEdit = false ;
  lookupValues = new LookupValues();
   // June 2025 C&O o oneclick automation for   'changers' and later on 'best' 
  changerYearOptions:any = this.lookupValues.changerYearOptions;
  changersFolder = this.lookupValues.changerYearFolder;
  changerFileToUpdate = this.lookupValues.changerYearOptions[0].value;
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
    return this.test === false ?  this.jsonListing.length === 0 || this.jsonListingFile === '': false;
  }


  showConfirm = false;
  // Called when user clicks Update File
  requestConfirmation() {
    this.showConfirm = true;
  }

  confirmUpdate() {
    console.log('Confirmed update for:', this.fileToUpdate);
    this.postJSONUpdate('changers');

    this.showConfirm = false;
    // Add your actual update logic here
  }
   cancelUpdate() {
    this.showConfirm = false;
  }
  postJSONUpdate(fileType='regular') { 
    // June 2025 C&O optional fileType. oneclick automation for 'most recent uploads', 'changers' and later on 'best'
    // also look at the switch... Changers file is selected from drop down and prepended with patj
    console.log(`POSTJSONUPDATE: ${JSON.stringify(this.jsonListing)} ${this.jsonListingFile}`) ;
    if(this.duplicateEntry === 'true' // DUPLICATE-11-2024 to substitute
          || fileType === 'recent uploads' || fileType === 'changers') {   // June 2025 C&O optional fileType will require path + duplicate true
      // old loop, circle around to use forEach
      for (let i = 0; i < this.jsonListing.length;i++) {  this.jsonListing[i] =  this.jsonListing[i].replace('false','true'); }
      for (let i = 0; i < this.jsonListing.length;i++) {  this.jsonListing[i] =  this.jsonListing[i].replace('${this.imageRoot}',this.listService.ImageRoot);  }
    }
    switch(fileType){
      case 'recent uploads':
        this.fileToUpdate = this.lookupValues.mostRecentUploads; 
        break ;
      case 'changers':
        this.fileToUpdate = `${this.changersFolder}${this.changerFileToUpdate}`; 
        break;
      default :
        this.fileToUpdate = this.jsonListingFile; 
        break ;
    }
    if(this.test === true) {
      alert(this.fileToUpdate);
      return ;
    }
  //  this.fileToUpdate =  fileType === 'recent uploads'? this.lookupValues.mostRecentUploads: this.jsonListingFile;
  //  this.listService.updateListFile(this.jsonListing, this.jsonListingFile)
  // // June 2025 C&O latest uploads .. will use for changers and best and other special lists
     this.listService.updateListFile(this.jsonListing, this.fileToUpdate)
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
