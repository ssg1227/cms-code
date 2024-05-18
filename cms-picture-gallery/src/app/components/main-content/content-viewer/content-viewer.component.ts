import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { staticText } from 'src/assets/common-config/static-text-other-constants';
import  { AuthService } from 'src/app/services/auth.service';
import { CoreContentService } from 'src/app/services/core-content.service';
import { TreeNodeElement } from 'src/assets/content-tree/tree-nodes' ;
import { BreadCrumb } from 'src/assets/content-tree/bread-crumbs';

import { ImageElement, ContentList } from 'src/assets/gallery-files/lists-and-other/image-lists/shared/image-detail' ;
@Component({
  selector: 'app-content-viewer',
  templateUrl: './content-viewer.component.html',
  styleUrls: ['./content-viewer.component.css']
})
export class ContentViewerComponent {
  breadCrumbs:BreadCrumb[]|undefined = [ 
    { 
      link:'/view',
      params:'top-level',
      label:'Home',
      levelIndex: 0},
    
  ];
  parentDescripion:string| undefined = '';
  appTitle= staticText.appTitle;
  appAuthor= staticText.appAuthor;
  appContent = staticText.introContentList[0];
  isLeafParent = localStorage.getItem("isLeafParent") ;
  key = '';
  isCompiledList = localStorage.getItem("isCompiledList");
  currentCardList:TreeNodeElement[] = this.coreContentService.setCurrentCardList() ;
  currentCellSelected = 0 ;
  // image listing
  allImageList:ImageElement[] = [];
  genImageList:any = null ;
  imageGroups:any[] = [];

  themeHeader:string ='';
  themeSummary:string = '';
  currentIndex:number = 0 ;
  sortThumbnails:string = '';
  selectedImageList:any[] = [ ];
  selectedImage:any = null;
  currentImage =  this.selectedImageList[0]; // `assets/all-images-demo/starters/su-30-1.jpeg`;
  iterationIndex = 0;
  _actualSize:boolean = false;
  _iterations:boolean = false ;
  newLook=true ;
  //..
  constructor(private router:Router, private authService:AuthService, private coreContentService: CoreContentService) {
  
  }
  ngOnInit() {
    this.isLeafParent = localStorage.getItem("isLeafParent") ;
    if(localStorage.getItem("key") !== null) {
      // @ts-ignore: Object is possibly 'null'.
      this.key = localStorage.getItem('key')|'';
    }
    this.isCompiledList = localStorage.getItem("isCompiledList");
  
    console.log(`${this.isLeafParent} ${this.key }`) ;
    if (this.isLeafParent === 'true') {
      const dataReturned = this.coreContentService.loadSelectedContent(this.key);
        this.genImageList = dataReturned.gen ; 
        this.allImageList = this.genImageList.allImageList;
        console.log('test');
    }
    const summary = this.coreContentService.SketchStats ;
   }
   get StatsSummary():string {
    const summary = this.coreContentService.SketchStats ;
    return `<p> Image Numbers:<br/> Subjects: ${summary.subjects}<br/> Total Counts:${summary.totalCounts}`;
    
   }
  cmsLogout(){
    this.authService.logout() ;
   }
   noContent = false ;
   isEmptyList():boolean {
     
    this.noContent = (this.isLeafParent === 'true' && this.imageGroups.length === 0) || (this.currentCardList == null || this.currentCardList.length ===0)
    return this.noContent ;
   }
   compareSelected(a:any, b:any) {
    console.log(`${a} ${b}`)
    this.isLeafParent = localStorage.getItem("isLeafParent") ;
    if (this.isLeafParent === 'true' && isNaN(a)) {
        this.imageGroups = [] ;
        // @ts-ignore: Object is possibly 'null'.
        this.key = localStorage.getItem('key')|'';
        const dataReturned = this.coreContentService.loadSelectedContent(a);
        if (dataReturned !== undefined && dataReturned !== null) {
          this.genImageList = dataReturned.gen ; 
          this.allImageList = this.genImageList.allImageList;
          this.loadImages() ;
        }
      }
      if (this.imageGroups.length > 0 && !isNaN(a)) {

      // @ts-ignore: Object is possibly 'null'.
        document.getElementById('modal-container').style.display = 'flex';
     this.currentCellSelected = a  ;
     this.selectedImage = this.imageGroups[a]
      }
       
      console.log('test');
   
   // this.key = localStorage.getItem("key");
    console.log(`${this.isLeafParent} ${this.key }`) ;
      if(isNaN(a)) {
        localStorage.setItem('current-menu',a);
        this.router.navigate([`/view`, a]).then( (e) => {
          this.currentCardList = this.coreContentService.setCurrentCardList() ;
          this.breadCrumbs = this.coreContentService.BreadCrumbs ;
          this.parentDescripion = this.coreContentService.ParentDescription ;
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
        });
      }
   }
   loadImages() {

    let foundList:ImageElement[] = [] ;
    foundList = /*strParam === 'latest-uploads' || 'showpiece' ?*/ this.allImageList ;  
     //  : this.allImageList.filter(x => x.folder === param.get('theme'));// themed.params.theme.toString()); **later
        if (foundList !== null && foundList.length > 0) {
          let foundFolder = foundList[0].folder;
          this.themeHeader = '';
          this.themeSummary = '';
          if(foundList[0].theme) this.themeHeader = foundList[0].theme; 
          if(foundList[0].themeSummary) this.themeSummary = foundList[0].themeSummary; 
          this.selectedImageList = [];
          this.imageGroups = [];
          foundList[0]
              .files
              .forEach( (fileData:any) => {
                let groupImages:any[] = [] ;
                let stats = '';
                let cardstyle = { outer: ``, image:``}; // move chosing card style logic to core content service 
                let cardImageStyle = ``;
                console.log(`STATS: ${JSON.stringify(fileData)}`);
                stats = this.techStats(fileData, cardstyle) ;  
                console.log(`STATS for single file ${stats} ${fileData.fullFileName}`);
                  if(stats.indexOf('Canvass') >= 0) {
                    fileData.description = `${fileData.description}<br/>(<em> ${stats}}</em>)`;
                  }    
                  
                if(fileData.iterations !== undefined && fileData.iterations.length > 0) {
                  fileData.iterations.forEach((element:any, index:number) => {
                    let descrAndStats = index === 0 ?
                    stats.indexOf('Canvass') >= 0? element.description: `${element.description}<br/>(<em> ${stats}}</em>)` :  element.description;
                    groupImages.push(
                        { image: element.fullFileName, 
                          description:    element.description,
                          cardStyle: cardstyle
                        });
                          //          description:  index === 0 ? fileData.description:  element.description});
                 
                  });
                  groupImages[0].description =`${groupImages[0].description }<br/>(<em> ${stats}}</em>)`
                } else {
                  fileData.fullFileName? 
                    groupImages.push({ image: fileData.fullFileName, 
                      description: fileData.description,
                      cardStyle: cardstyle}): 
                    groupImages.push({ image: `assets/all-images/${foundFolder}/${fileData.fileName}`, 
               //           description: fileData.description });
               //  
                          description: stats === ''? fileData.description: `${fileData.description}<br/>(<em> ${stats}}</em>)`,
                          cardStyle: cardstyle});
                }
                this.imageGroups.push({ imageList:groupImages} );
                fileData.fullFileName? 
                  this.selectedImageList.push({ 
                    iterativeText: fileData.iterativeText?`${fileData.iterativeText}`:'',
                    image: `${fileData.fullFileName}`, 
                    title: fileData.description,
                    iterations: fileData.iterations? fileData.iterations:[],
                    iterationIndex:0 }):
                  this.selectedImageList.push({ 
                    image: `assets/all-images/${foundFolder}/${fileData.fileName}`, 
                    title: fileData.description,
                    iterations: fileData.iterations? fileData.iterations:[],
                    iterationIndex:0 
                   });
              });
          }
          this.currentIndex = 0;
          this.currentImage = this.selectedImageList[0];
          if (this.currentImage.iterations !== null && this.currentImage.iterations.length > 0) {
            //this.currentImage.iterations.unshift(this.currentImage.image );
            this.currentImage.iterationIndex = 0;
          
          }
   }

  multipleImages(selectedImage:any):string {
    return  ` <div id="pic-container" >
     <img id="pic" *ngIf="selectedImage != null" src="{{${selectedImage.imageList[0].image}}}">
   </div>    
   <div id="text-container" *ngIf="selectedImage != null  && selectedImage.imageList != null && selectedImage.imageList.length  > 1"
        [innerHTML]="selectedImage.imageList[0].description">
  
  </div>
  <div id="pic-container" *ngIf="selectedImage != null  && selectedImage.imageList != null && selectedImage.imageList.length  > 1">
   <img id="pic" *ngIf="selectedImage != null" src="{{selectedImage.imageList[1].image}}">
 </div>    
 <div id="text-container" *ngIf="selectedImage != null  && selectedImage.imageList != null && selectedImage.imageList.length  > 1"
      [innerHTML]="selectedImage.imageList[1].description"><br/>`
   }
   public techStats(currentImage:any, stylingObject:any = null) {
     return this.coreContentService.techStatsSpan(currentImage, stylingObject);
   }
   closeModal() {

      // @ts-ignore: Object is possibly 'null'.
     document.getElementById('modal-container').style.display = 'none';
   }
}
