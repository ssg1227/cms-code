import { Injectable } from '@angular/core';
import { TreeNodeElement,MenuTreeElements } from 'src/assets/content-tree/tree-nodes' ;
import { ImageElement, ContentList } from 'src/assets/gallery-files/lists-and-other/image-lists/shared/image-detail' ;
import { BreadCrumb } from 'src/assets/content-tree/bread-crumbs';
// content files 
import { GaneshPreQ42021ImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/religion/aumkar-shree-ganesh/ganesh-pre-q4-2021.image.list' ;
import { GaneshGTEQ12023ImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/religion/aumkar-shree-ganesh/ganesh-gte-q1-2023.image.list' ;
import { GaneshGTEQ42021ImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/religion/aumkar-shree-ganesh/ganesh-gte-q4-2021.image.list' ;
import { GaneshGTEQ12024ImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/religion/aumkar-shree-ganesh/ganesh-gte-q1-2024.image.list' ;
import { DeviImageList} from 'src/assets/gallery-files/lists-and-other/image-lists/religion/devi.image.list';
import { LaxmiVishnuHanumanList} from 'src/assets/gallery-files/lists-and-other/image-lists/religion/laxmi-vishnu-hanuman.list';
import { MahadevImageList} from 'src/assets/gallery-files/lists-and-other/image-lists/religion/mahadev.image.list';
import {MahadevFamilyImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/religion/mahadev-family.image.list';
import {DattavatarImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/religion/dattavatar.image.list';
import {SwamiSamarthaImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/religion/swami-samartha.image.list';
import {SwamiSamarthaQ22023ImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/religion/swami-samartha-q2-2023.image.list';
import {ShirdiSaiThemeList1 } from 'src/assets/gallery-files/lists-and-other/image-lists/religion/shirdi-sai/baba-theme.images-list';
import { ShirdiSaiQ42023Q12024ImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/religion/shirdi-sai/shirdi-sai-q4-2023-q1-2024.list';
import { ShirdiSaiPreQ32021ImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/religion/shirdi-sai/shirdi-sai-pre-q3-2021.list';
import { ShirdiSaiQ3Q42021ImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/religion/shirdi-sai/shirdi-sai-q3-q4-2021.list';
import { ShirdiSaiQ2Q32022ImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/religion/shirdi-sai/shirdi-sai-q2-q3-2022.list';
import { ShirdiSaiQ42022Q12023ImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/religion/shirdi-sai/shirdi-sai-q4-2022-q1-2023.list';
import { ShirdiSaiQ2Q32023ImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/religion/shirdi-sai/shirdi-sai-q2-q3-2023.list';
import {ShirdiSaiQ2Q32024ImageList} from 'src/assets/gallery-files/lists-and-other/image-lists/religion/shirdi-sai/shirdi-sai-q2-q3-2024.list';

import { PeopleImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/people.image.list';
import { PlacesScenesObjectsImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/places-scenes-objects.image.list';
import { ThemesMisc } from 'src/assets/gallery-files/lists-and-other/image-lists/themes-misc.list';
import { AnimateToBeOrganized1ImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/animate-to-be-organized-1.list';

import { TrainImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/transports-and-machines/trains/trains.list';
import { TrainsIndianRailwaySpecialTrains } from 'src/assets/gallery-files/lists-and-other/image-lists/transports-and-machines/trains/trains-indian-railway-special-trains';
import { TrainsIndianRailwayAlcos } from 'src/assets/gallery-files/lists-and-other/image-lists/transports-and-machines/trains/trains-indian-railway-alcos';

import {  PlanesShipsCarsImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/transports-and-machines/machines-others/planes-ships-cars.image.list';
import {  PlanesShipsCars2ImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/transports-and-machines/machines-others/planes-ships-cars-2.image.list';
import { MumbaiMeriJaanList } from 'src/assets/gallery-files/lists-and-other/image-lists/salaam-mumbai/mumbai-meri-jaan.list';
import { MumbaiMeriJaan2List } from 'src/assets/gallery-files/lists-and-other/image-lists/salaam-mumbai/mumbai-meri-jaan-2.list';
@Injectable({
  providedIn: 'root'
})
export class CoreContentService {
  contentList:ContentList[]= [] ;
  sketchStats = {
    subjects: 0,
    totalCounts :0 ,
    canvassSize:[],
    content:[],
    themBasedCounts: [{name:'', count:0}],
  };
  allImageList:ImageElement[] = [];
  genImageList:any = null ;
  topUploadsList: any =   { all: null, gen: null };
  get TEST():boolean {
    return true ;
  }
   // @ts-ignore: Object is possibly 'null'.
  userObject = JSON.parse(localStorage.getItem("user-object")) ;
  constructor() {
    this.loadContentList();
   }
  private breadCrumbs?:BreadCrumb[] =[] ;
  private parentDescription?:string ='';
  // gets 
  get BreadCrumbs():BreadCrumb[]| undefined{
    return this.breadCrumbs;
  } 
  get ParentDescription():string| undefined{
    return this.parentDescription;
  } 
  get ContentList(): ContentList[] {
    if (this.contentList.length === 0) {
      this.loadContentList() ;
    }
  //  if (this.userObject.userRoles.find((x:string) => x === 'all' || x === 'superuser') !== undefined)
     return this.contentList ;
  //  let 
  }
  get SketchStats():any {
    if (this.contentList.length === 0 ) {
      this.loadContentList() ;
    }
    return this.sketchStats;
  }
  get UserMenus(): TreeNodeElement[] {
    return MenuTreeElements;
    let userMenu: TreeNodeElement[] = [] ;
    if (this.userObject !== null && this.userObject.userRoles) {
        if (this.userObject.userRoles.find((x:string) => x === 'all' || x === 'superuser') !== undefined) {
          console.log(`SUOPER`)
          return MenuTreeElements;
        }
        MenuTreeElements.forEach((menuItem: TreeNodeElement) => {
            menuItem.roles?.forEach((role:string) => {
              if (role === 'all' || this.userObject.userRoles.find((x:string) => x === role) !== undefined) {
                userMenu.push(menuItem) ;
              }
            }) ;// || x === 'superuser') !== undefined) 
            
        });
    }
    return userMenu;
  }
  setCurrentCardList():TreeNodeElement[]  {
    let retCardList:TreeNodeElement[] = [];
    let currentParentKey =  localStorage.getItem('current-menu') ;
    //retCardList = MenuTreeElements.filter((x) => x.parentKey === currentParentKey) ;
     retCardList = this.UserMenus.filter((x) => x.parentKey === currentParentKey) ;
    
    // retCardList = this.UserMenus.filter((x) => x.parentKey === currentParentKey) ;
    let currentParent = this.UserMenus.find((x) => x.key === currentParentKey) ;
    // let currentParent = MenuTreeElements.find((x) => x.key === currentParentKey) ;
    this.breadCrumbs  = currentParent?.breadCrumb ;
    this.parentDescription = currentParent?.description !== undefined ? currentParent?.description: currentParent?.label;
    return retCardList ;
  }

  loadContentList() { // loads the raw list; also collects statistics
    let userNameRoles:any  = null ;
     // @ts-ignore: Object is possibly 'null'.
    if(localStorage.getItem('user-object')) {
      console.log(localStorage.getItem('user-object')) ;
       // @ts-ignore: Object is possibly 'null'.
      userNameRoles = JSON.parse(localStorage.getItem('user-object'));
    }
      // in the future considering adding role in the ImageList object.. right now
    // QUICK FIX+DEPLOY JAN 4 2024 scrub lists for min religous content and temp freeze roles
    /**/ 
      this.contentList.push( { contentFile:new GaneshPreQ42021ImageList(),contentCategory:'shree-ganesh-b4-q4-2021', roles:['sanatani']}) ;
      this.contentList.push( { contentFile:new GaneshGTEQ42021ImageList(),contentCategory:'shree-ganesh-gte-q4-2021', roles:['sanatani']}) ;
      this.contentList.push( { contentFile:new GaneshGTEQ12023ImageList(),contentCategory:'shree-ganesh-gte-q1-2023', roles:['sanatani']}) ;
      this.contentList.push( { contentFile:new GaneshGTEQ12024ImageList(),contentCategory:'shree-ganesh-gte-q1-2024', roles:['sanatani'],latest:true}) ;
      
      this.contentList.push( { contentFile:new DeviImageList(),contentCategory:'devi', roles:['sanatani'],latest:true}) ;
      this.contentList.push( { contentFile:new MahadevImageList(),contentCategory:'mahadev', roles:['sanatani'],latest:true}) ;
      this.contentList.push( { contentFile:new MahadevFamilyImageList(),contentCategory:'mahadev-family', roles:['sanatani'],latest:true}) ;
      this.contentList.push( { contentFile:new LaxmiVishnuHanumanList(),contentCategory:'laxmi-vishnu-hanuman', roles:['sanatani'],latest:true}) ;
      this.contentList.push( { contentFile:new DattavatarImageList(),contentCategory:'dattavatar', roles:['guru'],latest:true}) ;
      this.contentList.push( { contentFile:new SwamiSamarthaImageList(),contentCategory:'swami-samartha', roles:['guru']}) ;
      this.contentList.push( { contentFile:new SwamiSamarthaQ22023ImageList(),contentCategory:'swami-samartha-q2-2023', roles:['guru'],latest:true}) ;
      this.contentList.push( { contentFile:new ShirdiSaiQ42023Q12024ImageList(),contentCategory:'shirdi-sai-q4-2023-q1-2024', roles:['guru'],latest:true}) ;
      this.contentList.push( { contentFile:new ShirdiSaiThemeList1(),contentCategory:'baba-themes-1', roles:['guru']}) ;
      this.contentList.push( { contentFile:new ShirdiSaiPreQ32021ImageList(),contentCategory:'shirdi-sai-q1-q2-2021', roles:['guru']}) ;
      this.contentList.push( { contentFile:new ShirdiSaiQ3Q42021ImageList(),contentCategory:'shirdi-sai-q3-q4-2021', roles:['guru']}) ;
      this.contentList.push( { contentFile:new ShirdiSaiQ2Q32022ImageList(),contentCategory:'shirdi-sai-q2-q3-2022', roles:['guru']}) ;
      this.contentList.push( { contentFile:new ShirdiSaiQ42022Q12023ImageList(),contentCategory:'shirdi-sai-q4-2022-q1-2023', roles:['guru']}) ;
      this.contentList.push( { contentFile:new ShirdiSaiQ2Q32023ImageList(),contentCategory:'shirdi-sai-q2-q3-2023', roles:['guru']}) ;
      this.contentList.push( { contentFile:new ShirdiSaiQ2Q32024ImageList(),contentCategory:'shirdi-sai-q2-q3-2024', roles:['guru']}) ;
      this.contentList.push( { contentFile:new PeopleImageList(),contentCategory:'people-places', roles:['all'],latest:true}) ;
      this.contentList.push( { contentFile: new PlacesScenesObjectsImageList(),contentCategory:'places-scenes-objects', roles:['non-living,  non-religious'],latest:true}) ;
      this.contentList.push( { contentFile: new ThemesMisc(),contentCategory:'themes-misc', roles:['non-living,  non-religious'],latest:true}) ;

      this.contentList.push( { contentFile:new TrainImageList(),contentCategory:'trains', roles:['non-living,  non-religious'],latest:true}) ;
      this.contentList.push( { contentFile:new TrainsIndianRailwayAlcos(),contentCategory:'trains-ir-alcos', roles:['non-living,  non-religious'],latest:true}) ;
      this.contentList.push( { contentFile:new TrainsIndianRailwaySpecialTrains(),contentCategory:'trains-ir-special-trains', roles:['non-living,  non-religious'],latest:true}) ;
      this.contentList.push( { contentFile:new MumbaiMeriJaanList(),contentCategory:'mumbai-meri-jaan', roles:['non-living,  non-religious']}) ;
      this.contentList.push( { contentFile:new MumbaiMeriJaan2List(),contentCategory:'mumbai-meri-jaan-2', roles:['non-living,  non-religious'],latest:true}) ;
      this.contentList.push( { contentFile:new AnimateToBeOrganized1ImageList(),contentCategory:'animate-to-be-oragnized1', roles:['misc']}) ;

      this.contentList.push( { contentFile:new PlanesShipsCarsImageList(),contentCategory:'planes-ships-cars', roles:['non-living,  non-religious'],latest:true}) ;
      this.contentList.push( { contentFile:new PlanesShipsCars2ImageList(),contentCategory:'planes-ships-cars-2', roles:['non-living,  non-religious'],latest:true}) ;
 
    let me = this;
    this.sketchStats.totalCounts = 0;
    this.sketchStats.subjects = 0;
    this.contentList.forEach((contentItem:ContentList) =>{
      me.collectThemeBasedStats(contentItem);
    });
  }
  clearContentList() {
    this.contentList = [];
  }
  loadSelectedContent(strParam:string):any {
      if (this.contentList === null || this.contentList.length === 0) {
        this.loadContentList();
      }
      let yearSelected = 0 ;
      let themeYear = 'before 2022';
        switch (strParam) {
          // .. 
          case 'showpiece': 
          case 'showpiece-2022': 
          case 'showpiece-2023': 
            if (strParam.indexOf('-') > 0) {
              themeYear =  strParam.split('-')[1] ;
              yearSelected = parseInt(themeYear);
            }
            this.genImageList = { 
            allImageList: [ 
                { 
                  folder:'',
                  theme:`Showpiece - ${themeYear}`,
                  themeSummary: `&nbsp;&nbsp;These are some which are, what I consider my best efforts. Almost all the better ones, I have taken my time over..<br/>
                                &nbsp;&nbsp;My attitude and approach to sketching have changed; I RARELY try to finish a sketch at one sitting, but do it in bits and pieces..`,
                  files: [],
                }
            ]} ; 
            // later this.loadMultipleThemes(this.loadTopUploads) ;
            this.ContentList.forEach((latestImageList:any) => {
          
              this.loadTopUploads(latestImageList,yearSelected);
            });
            this.sortImageList() ;
            return { all:  this.allImageList, gen: this.genImageList };
          break;
          case 'changers-b4-2022':  
          case 'changers-2022':  
          case 'changers-2023': 
          case 'changers-2024': 
          if (strParam.indexOf('b4') < 0 && strParam.indexOf('-') > 0) {
            themeYear =  strParam.split('-')[1] ;
            yearSelected = parseInt(themeYear);
          }
          this.genImageList = { 
            allImageList: [ 
                { 
                  folder:'',
                  theme:`INTRODUCTION: Milestones in a Journey.. (${themeYear})`,
                  themeSummary: `These are landmark sketches which I consider a significant change or turn in the progress of my sketches, or maybe a special reason. 
                                  <i><u>These may not be my best efforts</u></i> but are a new element or entity that was introduced in these drawings.`,
                  files: [],
                }
            ]} ;
           // let milestoneImageLists:any = [];
            this.ContentList.forEach((milestoneImageList:any) => {
              yearSelected ==0 ? 
                this.getMilestoneSketches(milestoneImageList,0, 1): 
                this.getMilestoneSketches(milestoneImageList,yearSelected);
            })
            
          this.genImageList.allImageList[0].files.sort(function(a:any, b:any) {
            const aDate = new Date(a.evolutionDate).getTime();
            const bDate = new Date(b.evolutionDate).getTime();
            let c = aDate  -  bDate ; // aDate - bDate ;
            return  c ;
          });

          return { all:  this.allImageList, gen: this.genImageList };
          break ;
          case 'latest-uploads-timewise':
            this.genImageList = { 
              allImageList: [ 
                  { 
                    folder:'',
                    theme:'latest-uploads-timewise',
                    themeSummary: `Uploads latest by time`,
                    files: [],
                  }
              ]} ;
             // this.loadLists(latestImageLists) ;
              this.ContentList.forEach((latestImageList:any) => {
                 if(latestImageList.contentFile.allImageList && 
                      latestImageList.contentFile.allImageList[0].files)
                  this.loadLatestUploadsTimeLine(latestImageList.contentFile);
              })
              this.genImageList.allImageList[0].files.sort(function(a:any, b:any) {
                const aDate = new Date(a.dateUploaded);
                const bDate = new Date(b.dateUploaded);
                return(bDate.getTime()  -  aDate.getTime()) ; // aDate - bDate ;
              });
              return { all:  this.allImageList, gen: this.genImageList };
              console.log(`#### LATEST UPLOAD .. RETURN AFTER SORT`);
              
            break;
            case 'latest-uploads-themewise':
              this.genImageList = { 
                allImageList: [ 
                    { 
                      folder:'',
                      theme:'latest-uploads-themewise',
                      themeSummary: `Uploads latest by theme`,
                      files: [],
                    }
                ]} ;
                const latestImageLists:any = [];
               // this.loadLists(latestImageLists) ;
                this.ContentList.forEach((latestImageList:any) => {
                  if(latestImageList.latest && latestImageList.latest === true)
                    this.loadLatestUploads(latestImageList);
                })
                return { all:  this.allImageList, gen: this.genImageList };
                console.log(`#### LATEST UPLOAD .. RETURN AFTER SORT`);
                
              break;
            default: 
            
            // @ts-ignore: Object is possibly 'null'.
            console.log(strParam) ;
            this.genImageList = this.contentList.find(cl => cl.contentCategory === strParam)? 
                this.contentList.find(cl => cl.contentCategory === strParam)?.contentFile: null;
            if (this.genImageList === null || this.genImageList.allImageList === null) {
              return ;
            }
            if(this.genImageList !== undefined && this.genImageList.allImageList !== null) { // first aid; need to NOT reach this function for a node
              this.allImageList = this.genImageList.allImageList ;
              return { all:  this.allImageList, gen: this.genImageList };
            }
            else return null ;
            break;
        }
     // revisit this logic
    }
  collectThemeBasedStats(contentList:ContentList) {
    
    let themeCount = {
      name: contentList.contentFile.allImageList[0].theme,
      count: 0
    };
    if(contentList.contentFile.allImageList && contentList.contentFile.allImageList[0].files) {
      contentList.contentFile.allImageList[0].files.forEach((fileItem:any) => {
        if(!fileItem.duplicate || fileItem.duplicate === false) {
          themeCount.count++ ;
          this.sketchStats.totalCounts++ ;
        }
      });
    }
    this.sketchStats.subjects++ ;
    
    this.sketchStats.themBasedCounts.push(themeCount) ;
  }


  loadLatestUploadsTimeLine(currentList:any)  {
    console.log('timeline');
    let daysBack = 90 ;
    if(currentList.allImageList && currentList.allImageList[0].files) {
      currentList.allImageList[0].files.forEach((fileItem:any) => {
        if (!fileItem.duplicate && this.daysAgoUploaded(fileItem, daysBack)) {
          this.genImageList.allImageList[0].files.push(fileItem);
        }
      });
      this.allImageList  = this.genImageList.allImageList ; 
    this.allImageList[0].folder = '';
    this.allImageList[0].theme = 'latest-uploads';
    this.allImageList[0].themeSummary = 'Quick referral showing latest uploads of 90 days or less'
    /*
      if (this.genImageList.allImageList[0].files.length <= 5) {
        daysBack = 90 ;
        currentList.allImageList[0].files.forEach((fileItem:any) => {
          if (!fileItem.duplicate && this.daysAgoUploaded(fileItem, daysBack, 30)) {
            this.genImageList.allImageList[0].files.push(fileItem);
          }
        });
        this.allImageList[0].themeSummary = 'Latest and last uploads reaching back to 90 days (normally latest uploads are 30 days or less, but uploads may not have taken place a while)'
    
      }
      */
    }
    
    
    console.log(`Loading latest`);
 //   return latestUploadList ;
  }
  loadLatestUploads(currentList:any)  {

    let daysBack = 30 ;
    console.log(`LATEST ${JSON.stringify(this.contentList)}`);
    if(currentList.contentFile.allImageList && currentList.contentFile.allImageList[0].files && 
        currentList.contentFile.allImageList[0].files.length > 0) {
          currentList.contentFile.allImageList[0].files.sort(function(a:any, b:any) {
            const aDate = new Date(a.dateUploaded).getTime();
            const bDate = new Date(b.dateUploaded).getTime();
            let c = bDate  -  aDate ; // aDate - bDate ;
            return  c ;
          });
          currentList.contentFile.allImageList[0].files.slice(0,3).forEach(
              (fileItem:any) =>  this.genImageList.allImageList[0].files.push(fileItem)) ;
    }
    console.log(`Loading latest`);
 //   return latestUploadList ;
  }
  
  loadTopUploads(currentList:any, year=0) {
    console.log(`YEAR ${year}`);
    if(currentList.contentFile.allImageList && currentList.contentFile.allImageList[0].files) {
      currentList.contentFile.allImageList[0].files.forEach((fileItem:any) => {
        if (fileItem.rating  && fileItem.rating === 1) {
          let fileYear= fileItem.ratingYear ? fileItem.ratingYear : 
            fileItem.dateUploaded ? new Date(fileItem.dateUploaded).getFullYear() : 1990 ;
            let ratingYear = year === 0 ? 2021 : year ;
            if (year === 0 ) {
              if(fileYear <= ratingYear) {
                this.genImageList.allImageList[0].files.push(fileItem);
              }
            } else {
              if(fileYear === ratingYear) {
                this.genImageList.allImageList[0].files.push(fileItem);
              }
            }
        }
      });
    }
  }
  
  getMilestoneSketches(currentList:any, year=0, sequence=0, range=[] )  {
    /*
    evolution: `<ul><li><b>Not the first</b>, but traditionally, one starts something with Lord Ganesh.</li>
                                <li>(as will be repeated later)My first color pencil sketch and, also duplicated with black and white sketch using 'glass trace'</li>`,
                evolutionDate
    */
    if(currentList.contentFile.allImageList && currentList.contentFile.allImageList[0].files) {
      currentList.contentFile.allImageList[0].files.forEach((fileItem:any) => {
        // get evolution text
        if (fileItem.evolution && (fileItem.duplicate === undefined || fileItem.duplicate === false) ) {
          if (year !== 0) {
            if (fileItem.evolutionDate) {
              if (year === new Date(fileItem.evolutionDate).getFullYear()) {
                if (fileItem.iterations && fileItem.iterations.length > 0) {
                  fileItem.iterations[0].description = `${fileItem.evolution} ${fileItem.iterations[0].description}`;
                } else {
                  fileItem.description = `${fileItem.evolution} ${fileItem.description}`;
                
                }
                if(!fileItem.dateUploaded) {
                  fileItem.dateUploaded = fileItem.evolutionDate;
                }
                this.genImageList.allImageList[0].files.push(fileItem);
              }
            }
          } else if(range && range.length > 1) {
          } else {
            if (fileItem.evolutionSequence && fileItem.evolutionSequence === sequence){
                if (fileItem.iterations && fileItem.iterations.length > 0) {
                  fileItem.iterations[0].description = `${fileItem.evolution} ${fileItem.iterations[0].description}`;
                } else {
                  fileItem.description = `${fileItem.evolution} ${fileItem.description}`;
                
                }
                if(!fileItem.dateUploaded) {
                  fileItem.dateUploaded = fileItem.evolutionDate;
                }
                this.genImageList.allImageList[0].files.push(fileItem);
            }
          }
        }
      });
    }
     //   return latestUploadList ;
  }
  // Custom List functions
  // Process compilations from existing theme based list
  // 1. find images loaded 'latestLimit/customLimit' or less days ago
  daysAgoUploaded(source:any, customLimit = -1, minRange=-1) {
    const firstDayOfYear =  source.dateUploaded ? new Date(source.dateUploaded): new Date('01-01-1990') ;
    const today = new Date();
  
    const diff = Math.abs(today.getTime() - firstDayOfYear.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
    // return customLimit === -1 ?  diffDays <= this.latestLimit: diffDays <= customLimit;
  
   // to avoid duplication.. if I had few sketches of 30 days or less but also wanted to include, say, 90 days old
   // use minRange to filter out double entry
   return customLimit === -1 ?  diffDays <= 60: minRange > 0
          ? diffDays >= minRange && diffDays <= customLimit : diffDays <= customLimit;
  }

  sortImageList() {
     
    this.genImageList.allImageList[0].files.sort(function(a:any, b:any) {
      const aDate = a.dateUploaded ? 
              new Date(a.dateUploaded).getTime():
              new Date('01-01-1990').getTime();
      const bDate = b.dateUploaded ? 
              new Date(b.dateUploaded).getTime():
              new Date('01-01-1990').getTime(); // new Date(b.dateUploaded).getTime();
      console.log(`compared: A: ${a.dateUploaded ? new Date(a.dateUploaded) :  new Date('01-01-1990')}, ${a.fullFileName}`);
      console.log(`compared: B: ${b.dateUploaded ? new Date(b.dateUploaded) :  new Date('01-01-1990')}, ${b.fullFileName}`);
      let c = bDate  -  aDate ; // aDate - bDate ;
      return  c ;
    });
  }

  public techStatsSpan(fileDetail:any, stylingObject:any = {outer:``, image:``}):string {

    // stylingObject:any = null=> move chosing card style logic to core content service 
    if (!fileDetail || !fileDetail.canvassSize) {
      return `<p>..</p>`;
    }
    let returnHTML = '';
    if ((fileDetail.canvassSize && fileDetail.canvassSize.trim() !== '') || 
        (fileDetail.content && fileDetail.content.trim() !== '')){
      if (fileDetail.canvassSize && fileDetail.canvassSize.trim() !== '') {
        returnHTML = `${returnHTML} Canvass: `;
        switch(fileDetail.canvassSize) {
          case 'A3': returnHTML = `${returnHTML}A3 (11x17)  `; break ;
          case 'A4': returnHTML = `${returnHTML}A4 (8.5x11)  `; break ;
          case 'A5': returnHTML = `${returnHTML}A5 (5.83 x 8.27)  `; break ;
          case 'soft': returnHTML = `${returnHTML}soft copy only`; break ;
          case 'portion': returnHTML = `${returnHTML}part of larger drawing`; break ;
          default: returnHTML = `${returnHTML}other size`; break ;
        }
      }
      if (fileDetail.canvassMaterial && fileDetail.canvassMaterial.trim() !== '') {
        returnHTML = `${returnHTML}, ${fileDetail.canvassMaterial}: `;
      }
      if (fileDetail.content && fileDetail.content.trim() !== '') {
        returnHTML = `${returnHTML}, Content: `;
       /* 'color-pencil',
        'black-white',
        'color-crayon',
        'color-pencil black-white',
        'poem black-white',
        let cardstyle = { outer: ``, image:``};
        let returnCardCSS = 'card-default';
     
 
       */
        stylingObject.outer = 'card-default' ;
        stylingObject.image = `card-image` ;
        switch(fileDetail.content) {
          case 'watercolor-pencil': 
                  returnHTML = `${returnHTML} including WaterColor Pencils`; 
                  stylingObject.outer = 'card-default card-watercolor' ;
                  stylingObject.image = `${stylingObject.image}  card-image-watercolor` ;
                  break ;
          case 'color-pencil': returnHTML = `${returnHTML}Color Pencils`; 
                  stylingObject.outer = 'card-default' ;
                  stylingObject.image = `${stylingObject.image}` ;
                  break ;
          case 'black-white': returnHTML = `${returnHTML}Black and white with possible shading`;
                  stylingObject.outer = 'card-default card-mono' ;
                  stylingObject.image = `${stylingObject.image} card-image-mono` ;
                  break ;
          case 'color-crayon': returnHTML = `${returnHTML}Color Crayons`; 
                  stylingObject.outer = 'card-default' ;
                  stylingObject.image = `${stylingObject.image}  card-image-crayon` ;
                  break ;
          case 'color-pencil black-white': returnHTML = `${returnHTML}Combination of color + B&W`; 
                  stylingObject.outer = 'card-default card-mix' ;
                  stylingObject.image = `${stylingObject.image} card-image-mix` ;
                  break ;
          case 'poem black-white': returnHTML = `${returnHTML}Drawing + poetry`; 
                  stylingObject.outer = 'card-default card-mix' ;
                  stylingObject.image = `${stylingObject.image}` ;
                  break ;
          case 'other-combo': returnHTML = `${returnHTML} Mix of different types, like sketch + photo`; 
                  stylingObject.outer = 'card-default' ;
                  stylingObject.image = `${stylingObject.image}` ;
                  break ;
          default: returnHTML = `${returnHTML}Other`; 
                  stylingObject.outer = 'card-default' ;
                  stylingObject.image = `${stylingObject.image} card-other` ;break ;
        }
        if(fileDetail.canvassSize === 'soft' || fileDetail.content ==='other-combo' ) {
          
          stylingObject.image = `${stylingObject.image} card-image-softcopy`
          console.log(`####fileDetail.canvassSize ${stylingObject.image}`)
        }
      }
      returnHTML = `${returnHTML}`;
      
    }
    return returnHTML ;
  }
  
}