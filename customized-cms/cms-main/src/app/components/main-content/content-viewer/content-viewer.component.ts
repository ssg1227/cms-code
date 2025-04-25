import { Component,  ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { staticText } from '@settings-and-models/static-text-other-constants';
import  { AuthService } from 'src/app/services/auth.service';
import { CoreContentService } from 'src/app/services/core-content.service';
import { TreeNodeElement } from '@settings-and-models/tree-node-element' ;
import { BreadCrumb } from '@settings-and-models/bread-crumbs';

import { ImageElement, ContentList } from 'src/assets/gallery-files/lists-and-other/image-lists/shared/image-detail' ;
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
  appTitle= staticText.appTitle;
  appAuthor= staticText.appAuthor;
  appContent = staticText.introContentList[0];
  isLeafParent = localStorage.getItem("isLeafParent") ;
  key = '';
  isCompiledList = localStorage.getItem("isCompiledList");
  currentCardList:TreeNodeElement[] = this.coreContentService.setCurrentCardList() ;
  inlineExpand = 'true' ;// as against modal, however we will use the modal for the shopping list
  currentCellSelected = 0 ;
  userRoles = "";// core user type
  isCore = false;// core user type
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
  viewportHeight:number ;
  currentPage = 1;
  //..
  displayDescription(imageELement:any):string // core user type
  {
    //if (this.selectedImageList.imageList != undefined && selectedImage.imageList.length  >= 1)
    return `${JSON.stringify(imageELement["description"])}`;
  }
  constructor(private router:Router, private authService:AuthService, private coreContentService: CoreContentService,
    private elRef: ElementRef, private renderer: Renderer2) {
    this.viewportHeight = window.outerHeight ;
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
   // Styling changes 12/2024+ 
   // move welcome msg next to logout btn
   get WelcomeMessage():string {
    return this.coreContentService.WelcomeMessage;
   }
   get StatsSummary():string {
    const summary = this.coreContentService.SketchStats ;
    // Styling changes 12/2024+ 
    // Label overflow return ` <p> ${summary.userName}<br/>Categories:${summary.subjects}<br/> Total:${summary.totalCounts}`;
    return ` <p> Categories:${summary.subjects}<br/> Total:${summary.totalCounts}`;
   
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
  cmsLogout(){
    this.authService.logout() ;
   }
   noContent = false ;
   isEmptyList():boolean {
     
    this.noContent = (this.isLeafParent === 'true' && this.imageGroups.length === 0) || (this.currentCardList == null || this.currentCardList.length ===0)
    return this.noContent ;
   }
   compareSelected(a:any, b:any) { 
     // from the emit - if 'a' is a number, then a picture was clicked (leaf) else it isa node
    // resetting the modal for pic expansiom
    this.inlineExpand =  'false'; 
    // @ts-ignore: Object is possibly 'null'.
    document.getElementById('div-container').style.display = 'none'; 
    //...
    console.log(`Clicked parent ######${a} ${b } ${isNaN(a)}`) ;
    if (isNaN(a) === false) {
      this.inlineExpand =  'true'
    }
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
        // transition from modal view to div view 
        if(this.inlineExpand === 'true') {
      
          // @ts-ignore: Object is possibly 'null'.
          document.getElementById('div-container').style.display = 'block';  
          /*April 24 Flex.. ABOVE from 'flex' this may just have been the critical point of responsive for slide show*/
          // @ts-ignore: Object is possibly 'null'.
          document.getElementById('leafCards').style.display = 'none' ;  
  
       } else {
          // @ts-ignore: Object is possibly 'null'.
          document.getElementById('modal-container').style.display = 'flex';    
       }
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
            this.parentDescripion = this.coreContentService.ParentDescription ;
            if (e) {
              console.log("Navigation is successful!");
            } else {
              console.log("Navigation has failed!");
            }
          });
        }
      }
   }
   loadImagesPreCoreUserType() { // PreCoreUserType() { // core user type.. back up before this feature and opitmization

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
                let finalDescrption = fileData.description ; // 'core user type'
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
                      description: fileData.description, // 'core user type'
                      // description: finalDescrption, // 'core user type'
                      summaryLabel: fileData.summaryLabel ? fileData.summaryLabel: '',
                      cardStyle: cardstyle}): 
                    groupImages.push({ image: `assets/all-images/${foundFolder}/${fileData.fileName}`, 
               //           description: fileData.description });
               //  
                          description: stats === ''? fileData.description: `${fileData.description}<br/>(<em> ${stats}}</em>)`,
                          // 'core user type'
                          // description: stats === ''?finalDescrption: `${finalDescrption}<br/>(<em> ${stats}}</em>)`,
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
   loadImages() {
    if(this.userRoles === '') { // core user type .. 
    // Probably because this component gets loaded before login, or page life cycle issues, putting this code in ngInit was causing issues.
    // This is a confirmed location where the core user type is set, so thought best to initialize here
    // @ts-ignore: Object is possibly 'null'.
     this.userRoles = localStorage.getItem("userRoles") ; // core user type
     this.isCore = (this.userRoles.indexOf('core')>=0)?true:false ;
    }
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
             // core user type ..  selected images in a list are visible to core user only 
             let push = true ; 
             if (fileData.coreVisibility && fileData.coreVisibility === 'true') {
              if (this.isCore === false) {
                push = false ; 
              }
             }
             if (push === false) {
              return ;
             }
             // .. end section core user type ..  selected images in a list are visible to core user only 
                let finalDescrption = this.compiledDescription(fileData) ; // 'core user type'
                let groupImages:any[] = [] ;
                let stats = '';
                let cardstyle = { outer: ``, image:``}; // move chosing card style logic to core content service 
                let cardImageStyle = ``;
                stats = this.techStats(fileData, cardstyle) ;  
               
                if(fileData.iterations !== undefined && fileData.iterations.length > 0) {
                  fileData.iterations.forEach((element:any, index:number) => {
                    let descrAndStats = index === 0 ?
                    stats.indexOf('Canvass') >= 0? element.description: `${element.description}<br/>(<em> ${stats}}</em>)` :  element.description;
                    groupImages.push(
                        { image: element.fullFileName, 
                          summaryLabel: element.summaryLabel ? element.summaryLabel: '',
                          description:    index === 0 ? finalDescrption: element.description,// 'core user type'
                          cardStyle: cardstyle
                        });
                          //          description:  index === 0 ? fileData.description:  element.description});
                 
                  });
                  groupImages[0].description =`${groupImages[0].description }<br/>(<em> ${stats}}</em>)`
                } else {
                  fileData.fullFileName? 
                    groupImages.push({ image: fileData.fullFileName, 
                      // description: fileData.description, // 'core user type'
                      description: finalDescrption, // 'core user type'
                      summaryLabel: fileData.summaryLabel ? fileData.summaryLabel: '',
                      cardStyle: cardstyle}): 
                    groupImages.push({ image: `assets/all-images/${foundFolder}/${fileData.fileName}`, 
               //           description: fileData.description });
               //  
                          // description: stats === ''? fileData.description: `${fileData.description}<br/>(<em> ${stats}}</em>)`,
                          // 'core user type'
                          description: stats === ''?finalDescrption: `${finalDescrption}<br/>(<em> ${stats}}</em>)`,
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
   compiledDescription(fileData:any):string { // core user type
    let finalDescrption = `${fileData.description}` ;
    let stats = '';
    let cardstyle = { outer: ``, image:``}; // move chosing card style logic to core content service 
    let cardImageStyle = ``;
    stats = this.techStats(fileData, cardstyle) ;  
    if (this.isCore && fileData.coreDescription) {
      finalDescrption = `${finalDescrption} <br/>( ${fileData.coreDescription})`;
    }
    if(stats.indexOf('Canvass') >= 0) {
      finalDescrption = `${finalDescrption}<br/>(STATS <em> ${stats}}</em>)`;
    }    
  
    return finalDescrption ;
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
   // buttons and slide shows 
   slideshowInterval: any; // Variable to hold interval reference
    slideshowSpeed: number = 2000; // Default slideshow speed in milliseconds (2 seconds)

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
   startSlideshow() {
    this.slideshowInterval = setInterval(() => {
        this.next();
    }, this.slideshowSpeed);
}

stopSlideshow() {
    clearInterval(this.slideshowInterval);
}

pauseSlideshow() {
    clearInterval(this.slideshowInterval);
}

resumeSlideshow() {
    this.startSlideshow();
}
   closeModal() {

      // @ts-ignore: Object is possibly 'null'.
     document.getElementById('modal-container').style.display = 'none';
     this.showContactPage = false ;
   }
   closeDivModal() {

    if(this.inlineExpand === 'true') {
     
       // @ts-ignore: Object is possibly 'null'.
       document.getElementById('div-container').style.display = 'none'; 
       // @ts-ignore: Object is possibly 'null'.
       document.getElementById('leafCards').style.display = 'flex' ;  

    } else {
       // @ts-ignore: Object is possibly 'null'.
       document.getElementById('modal-container').style.display = 'none';    
    }
    this.showContactPage = false ;
  }
}
