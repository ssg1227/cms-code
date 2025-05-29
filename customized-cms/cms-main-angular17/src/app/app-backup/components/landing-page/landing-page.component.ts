import { Component } from '@angular/core';
import  { AuthService } from 'src/app/app-backup/services/auth.service';

import { Router } from '@angular/router';
import { staticText } from 'src/app/app-backup/settings-and-models/static-text-other-constants';
import { CoreContentService } from 'src/app/app-backup/services/core-content.service';
import { TreeNodeElement } from 'src/app/app-backup/settings-and-models/tree-node-element' ;
import { BreadCrumb } from 'src/app/app-backup/settings-and-models/bread-crumbs';

import { ImageElement, ContentList } from 'src/assets/gallery-files/lists-and-other/image-lists/shared/image-detail' ;


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
/* Merge login-landing and landing-page logic */
export class LandingPageComponent {
  a16To17TestingNew = 'true' ;
  directLatest =  this.IsMobileScreen === 'true'? false: true ;
  // Header
  appTitle= staticText.appTitle;
  appAuthor= staticText.appAuthor;
  appContent = staticText.introContentList[0];
  /* User Id, page style, etc*/
  userId="";
  isLeafParent = localStorage.getItem("isLeafParent") ;
  key = '';
  isCompiledList = localStorage.getItem("isCompiledList");
  currentCardList:TreeNodeElement[] = this.coreContentService.setCurrentCardList() ;
  inlineExpand = 'true' ;// as against modal, however we will use the modal for the shopping list
  parentDescripion:string| undefined = '';
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
  breadCrumbs:BreadCrumb[]|undefined = [ 
    { 
      link:'/view',
      params:'top-level',
      label:'Home',
      levelIndex: 0},
    
  ];

  constructor(private authService:AuthService,private router:Router,  private coreContentService: CoreContentService) {

    this.viewportHeight = window.outerHeight ;
    this.testMode = this.coreContentService.TestMode ;
  }
  get IsMobileScreen(): string {
  return JSON.stringify((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) ;
  
 }
  public get UserLoggedIn():boolean {
    return   this.authService.LoggedIn ;
  }
  public get SmallScreen():string {
    return  'false' ; //  JSON.stringify((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) ;
  }
 ngOnInit() {
 }
 cmsLogin(){
  this.authService.login(this.userId === ''? 'default': this.userId, this.directLatest);
  this.router.navigate([`/view`, 'top-level']).then( (e) => {
            this.currentCardList = this.coreContentService.setCurrentCardList() ;
            this.breadCrumbs = this.coreContentService.BreadCrumbs ;
            this.parentDescripion = this.coreContentService.ParentDescription ;
            if (e) {
              console.log("Navigation is successful!");
            } else {
              console.log("Navigation has failed!");
            }
          });
 //this.compareSelected('top-level', 0);
 }
 cmsLogout(){
    this.authService.logout() ;
   }
  
/* ############### LOGGED IN CODE  */
 get WelcomeMessage():string {
    return this.coreContentService.WelcomeMessage;
 }
 get StatsSummary():string {
    const summary = this.coreContentService.SketchStats ;
    // Styling changes 12/2024+ 
    // Label overflow return ` <p> ${summary.userName}<br/>Categories:${summary.subjects}<br/> Total:${summary.totalCounts}`;
    return ` <p> Categories:${summary.subjects}  Total:${summary.totalCounts}`;
   
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
 compareSelected(a:any, b:any) { 
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
          //April 24 Flex.. ABOVE from 'flex' this may just have been the critical point of responsive for slide show 
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
