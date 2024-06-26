import { ItemPrice, ItemUnitPrice } from './../../../settings-and-models/commerce';
import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { staticText } from 'src/assets/common-config/static-text-other-constants';
import  { AuthService } from 'src/app/services/auth.service';
import { CoreContentService } from 'src/app/services/core-content.service';
import { TreeNodeElement } from 'src/assets/assets-common/tree-node-element' ;
import { BreadCrumb } from 'src/assets/assets-common/bread-crumbs';

import { ImageElement, ContentList } from 'src/assets/gallery-files/shared/image-detail2' ;
import { core } from '@angular/compiler';
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
  itemPrice?:any  = null;
  itemUnitPrice?:any  = [];
  appTitle= staticText.appTitle;
  appAuthor= staticText.appAuthor;
  appContent = staticText.introContentList[0];
  isLeafParent = localStorage.getItem("isLeafParent") ;
  key = '';
  isCompiledList = localStorage.getItem("isCompiledList");
  currentCardList:TreeNodeElement[] = this.coreContentService.setCurrentCardList() ;
  currentCellSelected = -1 ;
  // image listing
  allImageList:ImageElement[] = [];
  genImageList:any = null ;
  imageGroups:any[] = [];
  currentMenu = '';
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
  showContactPage = false ;
  testMode = false ;

  pageSize = 14;

  currentPage = 1;
  //..
  constructor(private router:Router, private authService:AuthService, private coreContentService: CoreContentService) {
    this.testMode = this.coreContentService.TestMode ;
      // @ts-ignore: Object is possibly 'null'.
  }
  ngOnInit() {
    this.isLeafParent = localStorage.getItem("isLeafParent") ;// @ts-ignore: Object is possibly 'null'.
    this.currentMenu = localStorage.getItem("current-menu") ;
    
    if (this.testMode === true) {
      console.log(`Content component ngOnInit ${this.isLeafParent} ${this.currentMenu}`);
    }
   
    if(localStorage.getItem("key") !== null) {
      // @ts-ignore: Object is possibly 'null'.
      this.key = localStorage.getItem('key');
    }
    this.isCompiledList = localStorage.getItem("isCompiledList");
    console.log(`${this.isLeafParent} ${this.key }`) ;
    if (this.isLeafParent === 'true') {
      const dataReturned = this.coreContentService.loadSelectedContent(this.key);
        this.genImageList = dataReturned.gen ; 
        this.allImageList = this.genImageList.allImageList;
        this.compareSelected(this.key, 0);
    }
    const summary = this.coreContentService.SketchStats ;
    if(this.coreContentService.TestMode === true)  {
      // @ts-ignore: Object is possibly 'null'.
      document.getElementById('modal-container').style.display = 'flex';
      // @ts-ignore: Object is possibly 'null'.
      document.getElementById('modal-container').style.width = '1000px';
      const testDataReturned = this.coreContentService.loadSelectedContent('shree-ganesh-gte-q1-2024');
      if (testDataReturned !== undefined && testDataReturned !== null) {
        this.genImageList = testDataReturned.gen ; 
        this.allImageList = this.genImageList.allImageList;
        this.loadImages() ;
        ;
     this.selectedImage = this.imageGroups[0]
      }
    }
   }
   get StatsSummary():string {
    const summary = this.coreContentService.SketchStats ;
    return ` <p> ${summary.userName}<br/>Image Numbers:<br/> Subjects: ${summary.subjects}<br/> Total Counts:${summary.totalCounts}`;
    
   }
   get ImageLabel():string {
    let AInd = '';
    if(this.selectedImage !== null) { 
     
    if (this.selectedImage.imageList[0].summaryLabel && this.selectedImage.imageList[0].summaryLabel.trim !== '') {
      
      AInd =  this.selectedImage.imageList[0].summaryLabel
    }
    
     else {
     AInd =   this.selectedImage.imageList[0].description.trim().replace(`\n`,'')
                                        .replace('<ul>','')
                                        .replace('<b>','')
                                        .replace('<p>','')
                                        .replace('</p>','')
                                        .replace('<br/>','')
                                        .replace('<li>','')
                                        .trim() ;

     AInd = AInd.substring(0, AInd.search('</li>') ) ;
      }
    } 
    return AInd ;

  }
  public get NeedLogin():boolean {
    ;
   // localStorage.setItem('current-menu','top-level');
    return this.authService.NeedLogin === true ;
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
    console.log(`######${a} ${b }`) ;
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
      console.log(`######${this.isLeafParent} ${this.key }`) ;
      // @ts-ignore: Object is possibly 'null'.
      localStorage.setItem("isLeafParent",this.isLeafParent) ;
      if(isNaN(a)) {
        if(a === 'contact') {
         this.showContactPage = true ;

      // @ts-ignore: Object is possibly 'null'.
         document.getElementById('modal-container').style.display = 'flex';
        } else {
          this.showContactPage = false ;
          localStorage.setItem('current-menu',a);
          this.router.navigate([`/view`, a]).then( (e) => {
            this.currentCardList = this.coreContentService.setCurrentCardList() ;
            this.breadCrumbs = this.coreContentService.BreadCrumbs ;
            this.itemUnitPrice = [];
            this.parentDescripion = this.coreContentService.ParentDescription ;
             // @ts-ignore: Object is possibly 'null'.
            if (this.coreContentService.ItemPrice) {
               // @ts-ignore: Object is possibly 'null'.
               if (this.coreContentService.ItemPrice.itemUnitPrice) {
                  this.itemUnitPrice = this.coreContentService.ItemPrice.itemUnitPrice;
               }
              this.itemPrice = this.coreContentService.ItemPrice;
            }
            if (e) {
              console.log("Navigation is successful!");
            } else {
              console.log("Navigation has failed!");
            }
          });
        }
      }
   }
   getCardLevelImage(card:TreeNodeElement):string {
     return  (card.cardLevelImage!== null && card.cardLevelImage !== undefined) ?
       card.cardLevelImage:   '';
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
              .forEach( (fileData:any, index:number) => {
               /* if (index >= 10) {
                  return;
                }
              */
                let groupImages:any[] = [] ;
                let stats = '';
                let cardstyle = { outer: ``, image:``}; // move chosing card style logic to core content service 
                let cardImageStyle = ``;
                stats = this.techStats(fileData, cardstyle) ;  
                if(stats.indexOf('Canvass') >= 0) {
                    fileData.description = `${fileData.description}<br/>(<em> ${stats}}</em>)`;
                }    
                  
                if(fileData.iterations !== undefined && fileData.iterations.length > 0) {
                  fileData.iterations.forEach((element:any, index:number) => {
                    let descrAndStats = index === 0 ?
                    stats.indexOf('Canvass') >= 0? element.description: `${element.description}<br/>(<em> ${stats}}</em>)` :  element.description;
                    groupImages.push(
                        { image: element.fullFileName, 
                          summaryLabel: element.summaryLabel ? element.summaryLabel: '',
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
                      summaryLabel: fileData.summaryLabel ? fileData.summaryLabel: '',
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
                    summaryLabel: fileData.summaryLabel ? fileData.summaryLabel: '',
                    title: fileData.description,
                    iterations: fileData.iterations? fileData.iterations:[],
                    iterationIndex:0 }):
                  this.selectedImageList.push({ 
                    image: `assets/all-images/${foundFolder}/${fileData.fileName}`,
                    summaryLabel: fileData.summaryLabel ? fileData.summaryLabel: '', 
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
  
   get paginatedImages(): string[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.imageGroups.slice(startIndex, startIndex + this.pageSize);
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
   next() {
    this.currentCellSelected++;
    if (this.currentCellSelected >= this.imageGroups.length) {
      this.currentCellSelected = 0;
    }
    this.selectedImage = this.imageGroups[this.currentCellSelected];
   }

   previous() {
    this.currentCellSelected--;
    if (this.currentCellSelected <=0)  {
      this.currentCellSelected = this.imageGroups.length-1;
    }
    this.selectedImage = this.imageGroups[this.currentCellSelected];
   }
   closeModal() {

      // @ts-ignore: Object is possibly 'null'.
     document.getElementById('modal-container').style.display = 'none';
     this.showContactPage = false ;
   }
}
