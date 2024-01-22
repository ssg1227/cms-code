import { Injectable } from '@angular/core';

import { AppConfig } from 'src/assets/data-and-config/app.config'; // multi-view 

import { tabs, tabsWithRoles, MenuTree,TabWithRoles } from 'src/assets/data-and-config/menus-and-other-contexts/menu-tree'
import { CategoriesService } from './categories.service';
import { DeviImageList } from 'src/assets/all-images/religion/devi/devi.image.list' //'../assets/data-/../components/viewers/data/devi.image.list';
import { MahadevImageList } from 'src/assets/all-images/religion/mahadev/mahadev.image.list';
import { MahadevFamilyImageList } from 'src/assets/data-and-config/data/mahadev-family.image.list';
import { KanhaRukhminiList} from 'src/assets/data-and-config/data/kanha-rukhmini.list';
import { PeopleImageList } from 'src/assets/data-and-config/data/people.image.list';
import { PlacesScenesObjectsImageList} from 'src/assets/data-and-config/data/places-scenes-objects.image.list';
import { ThemesMisc } from 'src/assets/data-and-config/data/themes-misc.list';
import { LatestUploadsImageList } from 'src/assets/data-and-config/data/latest-uploads.list';
import { PlanesImageList } from 'src/assets/data-and-config/data/planes.image.list';
import { PlanesQ22023ImageList } from 'src/assets/data-and-config/data/planes-q2-2023.image.list';
import { GaneshPreQ42021ImageList } from 'src/assets/all-images/religion/aumkar-shree-ganesh/pre-q4-2021ganesh/ganesh-pre-q4-2021.image.list';
import { GaneshGTEQ42021ImageList } from 'src/assets/all-images/religion/aumkar-shree-ganesh/gte-q4-2021-ganesh/ganesh-gte-q4-2021.image.list';
import { GaneshGTEQ12023ImageList } from 'src/assets/all-images/religion/aumkar-shree-ganesh/gte-q1-2023/ganesh-gte-q1-2023.image.list';
import { SwamiSamarthaImageList } from 'src/assets/data-and-config/data/swami-samartha.image.list'
import { SwamiSamarthaQ22023ImageList } from 'src/assets/data-and-config/data/swami-samartha-q2-2023.image.list'
// import { DattavatarImageList } from 'src/assets/data-and-config/data/dattavatar.image.list';
import { DattavatarImageList } from 'src/assets/all-images/religion/dattavatar/dattavatar.image.list';
import { ShirdiSaiPreQ32021ImageList} from 'src/assets/data-and-config/data/shirdi-sai-pre-q3-2021.list';
import { ShirdiSaiQ3Q42021ImageList} from 'src/assets/data-and-config/data/shirdi-sai-q3-q4-2021.list';
import { ShirdiSaiQ2Q32022ImageList} from 'src/assets/data-and-config/data/shirdi-sai-q2-q3-2022.list';
import { ShirdiSaiQ42022Q12023ImageList} from 'src/assets/data-and-config/data/shirdi-sai-q4-2022-q1-2023.list';
import { ShirdiSaiQ12024ImageList} from 'src/assets/all-images/religion/shirdi-sai-q1-2024/shirdi-sai-q1-2024.list';

import { ShirdiSaiQ2Q32023ImageList} from 'src/assets/data-and-config/data/shirdi-sai-q2-q3-2023.list';
import { ShirdiSaiThemeList1} from 'src/assets/data-and-config/data/baba-theme.images-list';
import { ReligiousDietiesAndGurus  } from 'src/assets/all-images/religion/religious-dieties-and-gurus'; // scrubbed religious theme
import { TrainImageList } from 'src/assets/data-and-config/data/trains.list';
import { TrainsIndianRailwayAlcos} from 'src/assets/data-and-config/data/trains-indian-railway-alcos'
import { TrainsIndianRailwaySpecialTrains} from 'src/assets/data-and-config/data/trains-indian-railway-special-trains'
import { GeneralImageList } from 'src/assets/data-and-config/data/general.image.list';
import { ShowpieceImageList } from 'src/assets/data-and-config/data/showpiece.image.list';
import {MumbaiMeriJaanList} from 'src/assets/data-and-config/data/mumbai-meri-jaan.list';
import {MumbaiMeriJaan2List} from 'src/assets/data-and-config/data/mumbai-meri-jaan-2.list';
import { allImageList, CoreContentElement } from 'src/assets/data-and-config/data/image.list';
//#### Unorganized #### 
import { SundaraKaandam } from  'src/assets/data-and-config/data/sundara-kaandam.list';
// for organizing, genericizing and caching 
// role .. will add role field to each list later on
interface ContentList {
  contentFile:any ;
  contentCategory:string ;
  role:string; // maybe multiple, but for now keep it flattened as a csv string
}

@Injectable({
  providedIn: 'root'
})
export class CoreContentService {
  userThemes = localStorage.getItem('userThemes') ;
  _seeAll = localStorage.getItem('seeAll');
  allImageList:CoreContentElement[] = [];
  sortThumbnails:string = '';
  genImageList:any = null ;
  latestLimit = 40 ;
  contentList:ContentList[] = [] ;
  constructor() { 
    this._seeAll = 'true' ;//localStorage.getItem('seeAll');
    
  }
  get Template(): string {
    return AppConfig.template ;
  }
  sortSelectedContent(field='dateUploaded') {
    this.genImageList.allImageList[0].files.sort(function(a:any, b:any) {
      const aDate = a.DateUploaded ? 
              new Date(a.dateUploaded).getTime():
              new Date('09-02-2015').getTime();
              ;
      const bDate =  a.DateUploaded ? 
                  new Date(a.dateUploaded).getTime():
                  new Date('09-02-2015').getTime();new Date(b.dateUploaded).getTime();
      let c = bDate  -  aDate ; // aDate - bDate ;
      return  c ;
    });
  }
  canvassSize = [
    'A3', 'A4', 'soft','other'
  ];
  content = [
    'color-pencil',
    'black-white',
    'color-crayon',
    'color-pencil black-white',
    'poem black-white',
    'other-combo',

    'poem color'
  ]
  currentTab? = "";
  get CurrentTab():string {
    return this.currentTab? this.currentTab: '' ;
  }
  set CurrentTab(tabSelected:string) {
    this.currentTab =  tabSelected? tabSelected: '' ;
    let newSet = MenuTree.find( item => item.tab === tabSelected); 
    
  }
  // for Amrutvani
  get tabs():string[] {
    if (AppConfig.viewRestrict == 'false') {
      return tabs;
    }
    let userThemes = localStorage.getItem('userThemes')? localStorage.getItem('userThemes').toString(): '' ;
    // if(userThemes && userThemes.indexOf('all') >= 0){ Jan 6=7 revamp user based views
      if (this._seeAll && this._seeAll === 'true'){  return tabs ;
    }
    return this.tabsWithRoles(userThemes) ;// tabs; 
  }
  tabsWithRoles(userThemes):string[] {
    alert('test');
      let rolledTabs:string[] = [];
    
    tabsWithRoles.forEach((tabWithRole:TabWithRoles) => {
        //  if(userThemes.indexOf(x)>=0 || x.indexOf('any') >=0) {
        //  console.log(`TAB Roles ${tabWithRole.roles.toString()} USER: ${userThemes}`)
          tabWithRole.roles.forEach(tabRole => {
          /* Jan 6-7 filtering out based based on seeAll true/false  
            if (CategoriesService.roleFilter(userThemes, tabRole, true) === true){
              rolledTabs.push(tabWithRole.tab);
            } 
          */ 
           if (this._seeAll && this._seeAll === 'true'){
            rolledTabs.push(tabWithRole.tab);
           } else {
            if(tabWithRole.roles.indexOf('non-religious') >=0) {
              rolledTabs.push(tabWithRole.tab);
            }
           }
            
          });
        }) ;
    return rolledTabs ;
  }
  // show sketch stats
  public techStatsDiv(fileDetail:any):string {
    let returnHTML = '';
    if ((fileDetail.canvassSize && fileDetail.canvassSize.trim() !== '') || 
        (fileDetail.content && fileDetail.content.trim() !== '')){
      returnHTML = '<ul>'
      if (fileDetail.canvassSize && fileDetail.canvassSize.trim() !== '') {
        switch(fileDetail.canvassSize) {
          case 'A3': returnHTML = `${returnHTML}<li>on A3 (11x17) paper</li>`; break ;
          case 'A4': returnHTML = `${returnHTML}<li>on A4 (8.5x11) paper</li>`; break ;
          case 'soft': returnHTML = `${returnHTML}<li>soft copy only</li>`; break ;
          default: returnHTML = `${returnHTML}<li>other size</li>`; break ;
        }
      }
      if (fileDetail.content && fileDetail.content.trim() !== '') {
        switch(fileDetail.canvassSize) {
          case 'A3': returnHTML = `${returnHTML}<li>on A3 (11x17) paper</li>`; break ;
          case 'A4': returnHTML = `${returnHTML}<li>on A4 (8.5x11) paper</li>`; break ;
          case 'soft': returnHTML = `${returnHTML}<li>soft copy only</li>`; break ;
          default: returnHTML = `${returnHTML}<li>other size</li>`; break ;
        }
      }
      returnHTML = `${returnHTML}<ul>`;
      
    }
    return returnHTML ;
  }
  public techStatsSpan(fileDetail:any):string {
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
          case 'soft': returnHTML = `${returnHTML}soft copy only`; break ;
          case 'portion': returnHTML = `${returnHTML}part of larger drawing`; break ;
          default: returnHTML = `${returnHTML}other size`; break ;
        }
      }
      if (fileDetail.content && fileDetail.content.trim() !== '') {
        returnHTML = `${returnHTML}, Content: `;
       /* 'color-pencil',
        'black-white',
        'color-crayon',
        'color-pencil black-white',
        'poem black-white',
       */
        switch(fileDetail.content) {
          case 'color-pencil': returnHTML = `${returnHTML}Color Pencils`; break ;
          case 'black-white': returnHTML = `${returnHTML}Black and white with possible shading`; break ;
          case 'color-crayon': returnHTML = `${returnHTML}Color Crayons`; break ;
          case 'color-pencil black-white': returnHTML = `${returnHTML}Combination of color + B&W`; break ;
          case 'poem black-white': returnHTML = `${returnHTML}Drawing + poetry`; break ;
          case 'other-combo': returnHTML = `${returnHTML} Mix of different types, like sketch + photo`; break ;
          default: returnHTML = `${returnHTML}Other`; break ;
        }
      }
      returnHTML = `${returnHTML}`;
      
    }
    console.log(`RRR ${returnHTML}`);
    return returnHTML ;
  }
  getStats() {
    let sketchStats = {
      subjects: 0,
      totalCounts :0 ,
      canvassSize:[],
      content:[],
      themBasedCounts: [{name:'', count:0}],
    };
    // user role changes.. interim. Separated non religious/non guru content  vs ALL content
    this._seeAll = localStorage.getItem('seeAll');
    if (this._seeAll === 'true') {
      sketchStats.themBasedCounts[0] = (this.getThemeCounts(new GaneshPreQ42021ImageList(), sketchStats.canvassSize,sketchStats.content));
      sketchStats.themBasedCounts.push(this.getThemeCounts(new GaneshGTEQ42021ImageList(), sketchStats.canvassSize,sketchStats.content));
      sketchStats.themBasedCounts.push(this.getThemeCounts(new GaneshGTEQ12023ImageList(), sketchStats.canvassSize,sketchStats.content));
      sketchStats.themBasedCounts.push(this.getThemeCounts(new SundaraKaandam(), sketchStats.canvassSize,sketchStats.content));
      sketchStats.themBasedCounts.push(this.getThemeCounts(new DeviImageList(), sketchStats.canvassSize,sketchStats.content));
      sketchStats.themBasedCounts.push(this.getThemeCounts(new MahadevImageList(), sketchStats.canvassSize,sketchStats.content));
      sketchStats.themBasedCounts.push(this.getThemeCounts(new MahadevFamilyImageList(), sketchStats.canvassSize,sketchStats.content));
      sketchStats.themBasedCounts.push(this.getThemeCounts(new KanhaRukhminiList(), sketchStats.canvassSize,sketchStats.content));
      sketchStats.themBasedCounts.push(this.getThemeCounts(new DattavatarImageList(), sketchStats.canvassSize,sketchStats.content));
      sketchStats.themBasedCounts.push(this.getThemeCounts(new SwamiSamarthaImageList(), sketchStats.canvassSize,sketchStats.content));
      sketchStats.themBasedCounts.push(this.getThemeCounts(new SwamiSamarthaQ22023ImageList(), sketchStats.canvassSize,sketchStats.content));
      sketchStats.themBasedCounts.push(this.getThemeCounts(new ShirdiSaiPreQ32021ImageList(), sketchStats.canvassSize,sketchStats.content));
      sketchStats.themBasedCounts.push(this.getThemeCounts(new ShirdiSaiQ3Q42021ImageList(), sketchStats.canvassSize,sketchStats.content));
      sketchStats.themBasedCounts.push(this.getThemeCounts(new ShirdiSaiQ2Q32022ImageList(), sketchStats.canvassSize,sketchStats.content));
      sketchStats.themBasedCounts.push(this.getThemeCounts(new ShirdiSaiQ42022Q12023ImageList(), sketchStats.canvassSize,sketchStats.content));
      sketchStats.themBasedCounts.push(this.getThemeCounts(new ShirdiSaiQ12024ImageList(), sketchStats.canvassSize,sketchStats.content));
      sketchStats.themBasedCounts.push(this.getThemeCounts((new ShirdiSaiThemeList1()), sketchStats.canvassSize,sketchStats.content));
      sketchStats.themBasedCounts.push(this.getThemeCounts(new PeopleImageList(), sketchStats.canvassSize,sketchStats.content));
      
    }
    else {
      sketchStats.themBasedCounts[0] = (this.getThemeCounts(new PeopleImageList(), sketchStats.canvassSize,sketchStats.content));
      
    }
    sketchStats.themBasedCounts.push(this.getThemeCounts(new ReligiousDietiesAndGurus(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new TrainImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new TrainsIndianRailwayAlcos(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new TrainsIndianRailwaySpecialTrains(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new MumbaiMeriJaanList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new MumbaiMeriJaan2List(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new PlacesScenesObjectsImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new PlanesImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new PlanesQ22023ImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new ThemesMisc(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.forEach((theme:any)=> {
      sketchStats.subjects++;
      sketchStats.totalCounts += theme.count;
    });
    return sketchStats ;
  }

  getStatspreAuth() {
    let sketchStats = {
      subjects: 0,
      totalCounts :0 ,
      canvassSize:[],
      content:[],
      themBasedCounts: [{name:'', count:0}],
    };
    // QUICK FIX+DEPLOY JAN 4 2024 scrub lists for min religous content and temp freeze roles
    /*
    sketchStats.themBasedCounts[0] = (this.getThemeCounts(new GaneshPreQ42021ImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new GaneshGTEQ42021ImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new GaneshGTEQ12023ImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new SundaraKaandam(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new DeviImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new MahadevImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new MahadevFamilyImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new KanhaRukhminiList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new DattavatarImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new SwamiSamarthaImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new SwamiSamarthaQ22023ImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new ShirdiSaiPreQ32021ImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new ShirdiSaiQ3Q42021ImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new ShirdiSaiQ2Q32022ImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new ShirdiSaiQ42022Q12023ImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new ShirdiSaiQ2Q32023ImageList(), sketchStats.canvassSize,sketchStats.content));
    
    sketchStats.themBasedCounts.push(this.getThemeCounts((new ShirdiSaiThemeList1()), sketchStats.canvassSize,sketchStats.content));
    */
    sketchStats.themBasedCounts.push(this.getThemeCounts(new ReligiousDietiesAndGurus(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new PeopleImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new TrainImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new TrainsIndianRailwayAlcos(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new TrainsIndianRailwaySpecialTrains(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new MumbaiMeriJaanList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new MumbaiMeriJaan2List(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new PlacesScenesObjectsImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new PlanesImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new PlanesQ22023ImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new ThemesMisc(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.forEach((theme:any)=> {
      sketchStats.subjects++;
      sketchStats.totalCounts += theme.count;
    });
    return sketchStats ;
  }
  //... later
  loadMultipleThemes(functionProto: any, optionalArg=null) {
    functionProto(new GaneshPreQ42021ImageList()) ;
    functionProto(new GaneshGTEQ42021ImageList()) ;
    functionProto(new GaneshGTEQ12023ImageList()) ;
    functionProto(new DeviImageList()) ;
    functionProto(new MahadevImageList()) ;
    functionProto(new MahadevFamilyImageList()) ;
    functionProto(new KanhaRukhminiList()) ;
    functionProto(new DattavatarImageList()) ;
    functionProto(new SwamiSamarthaImageList()) ;
    functionProto(new SwamiSamarthaQ22023ImageList()) ;
    functionProto(new ShirdiSaiPreQ32021ImageList()) ;
    functionProto(new ShirdiSaiQ3Q42021ImageList()) ;
    functionProto(new ShirdiSaiQ2Q32022ImageList()) ;
    functionProto(new ShirdiSaiQ42022Q12023ImageList()) ;
    functionProto(new ShirdiSaiQ2Q32022ImageList()) ;
    functionProto(new ShirdiSaiQ12024ImageList()) ;
    functionProto(new ShirdiSaiThemeList1()) ;
    functionProto(new PeopleImageList()) ;
    functionProto(new ReligiousDietiesAndGurus()) ;
    functionProto(new TrainImageList()) ;
    functionProto(new TrainsIndianRailwayAlcos()) ;
    functionProto(new TrainsIndianRailwaySpecialTrains()) ;
    functionProto(new MumbaiMeriJaanList()) ;
    functionProto(new MumbaiMeriJaan2List()) ;
    functionProto(new PlacesScenesObjectsImageList()) ;
    functionProto(new PlanesImageList()) ;
    functionProto(new PlanesQ22023ImageList()) ;
    functionProto(new ThemesMisc());
    functionProto(new SundaraKaandam());
  }
  // optimize 
  loadLists(imageList:any = [])  {
    /* Use the get
    if (this.contentList === null || this.contentList.length === 0) {
      this.loadContentList() ;
    }
    */
    this.ContentList.forEach(cl => {
    //  if(cl.role === '' || this.userThemes.indexOf('all') >=0 || cl.role.indexOf('any') >=0) {
        imageList.push(cl.contentFile);
     // }
    })
  }
  /// contentList:ContentList[] = [] ;
  get ContentList():ContentList[] {
    if (this.contentList === null || this.contentList.length === 0) {
      this.loadContentList();
    }
    return this.contentList;
  }
  // used mainly during logout in auth.service. Ensuring that content list is empty (sometimes cache remains)
  public clearContentList() {
    this.contentList = [];
  }
  get UserThemes():string {
    if (this.userThemes === null || this.userThemes === undefined) {
      this.userThemes = localStorage.getItem('userThemes') ;
    }
    return this.userThemes ;
  }
  // June 6 - 7 only two sets of visibility  - only non-relogious with selected religious / guru content vs ALL 
  // drill down logic is in loadContentListFineTune - to be debugged 
  loadContentList() {
    if (localStorage.getItem("usersContentList")) {
      this.contentList = JSON.parse(localStorage.getItem("usersContentList")) ;
    } else {
    
        this.contentList.push( { contentFile:new GaneshPreQ42021ImageList(),contentCategory:'shree-ganesh', role:'sanatani'}) ;
        this.contentList.push( { contentFile:new GaneshGTEQ42021ImageList(),contentCategory:'shree-ganesh-gte-q4-2021', role:'sanatani'}) ;
        this.contentList.push( { contentFile:new GaneshGTEQ12023ImageList(),contentCategory:'shree-ganesh-gte-q1-2023', role:'sanatani'}) ;
        this.contentList.push( { contentFile:new DeviImageList(),contentCategory:'devi', role:'sanatani'}) ;
        this.contentList.push( { contentFile:new MahadevImageList(),contentCategory:'mahadev', role:'sanatani'}) ;
        this.contentList.push( { contentFile:new MahadevFamilyImageList(),contentCategory:'mahadev-family', role:'sanatani'}) ;
        this.contentList.push( { contentFile:new KanhaRukhminiList(),contentCategory:'kanha-rukhmini', role:'misc'}) ;
        this.contentList.push( { contentFile:new DattavatarImageList(),contentCategory:'dattavatar', role:'guru'}) ;
          this.contentList.push( { contentFile:new SwamiSamarthaImageList(),contentCategory:'swami-samartha', role:'guru'}) ;
          this.contentList.push( { contentFile:new SwamiSamarthaQ22023ImageList(),contentCategory:'swami-samartha-q2-2023', role:'guru'}) ;
          this.contentList.push( { contentFile:new ShirdiSaiPreQ32021ImageList(),contentCategory:'shirdi-sai-q1-q2-2021', role:'guru'}) ;
          this.contentList.push( { contentFile:new ShirdiSaiQ3Q42021ImageList(),contentCategory:'shirdi-sai-q3-q4-2021', role:'guru'}) ;
          this.contentList.push( { contentFile:new ShirdiSaiQ2Q32022ImageList(),contentCategory:'shirdi-sai-q2-q3-2022', role:'guru'}) ;
          this.contentList.push( { contentFile:new ShirdiSaiQ42022Q12023ImageList(),contentCategory:'shirdi-sai-q4-2022-q1-2023', role:'guru'}) ;
          this.contentList.push( { contentFile:new ShirdiSaiQ2Q32023ImageList(),contentCategory:'shirdi-sai-q2-q3-2023', role:'guru'}) ;
          this.contentList.push( { contentFile:new ShirdiSaiQ12024ImageList(),contentCategory:'shirdi-sai-q1-2024', role:'guru'}) ;
          this.contentList.push( { contentFile:new ShirdiSaiThemeList1(),contentCategory:'baba-themes-1', role:'guru'}) ;
       ;
      this.contentList.push( { contentFile:this.filterReligiousAndGuruLists(),contentCategory:'religion-and-guru', role:'non-living,  non-religious'}) ;
     
      this.contentList.push( { contentFile:new PeopleImageList(),contentCategory:'people-places', role:'people,  non-religious'}) ;
      this.contentList.push( { contentFile:new TrainImageList(),contentCategory:'trains', role:'non-living,  non-religious'}) ;
    //  this.contentList.push( { contentFile:new ReligiousDietiesAndGurus(),contentCategory:'religion-and-guru', role:'non-living,  non-religious'}) ;
      this.contentList.push( { contentFile:new TrainsIndianRailwayAlcos(),contentCategory:'trains-ir-alcos', role:'non-living,  non-religious'}) ;
      this.contentList.push( { contentFile:new TrainsIndianRailwaySpecialTrains(),contentCategory:'trains-ir-special-trains', role:'non-living,  non-religious'}) ;
      this.contentList.push( { contentFile:new MumbaiMeriJaanList(),contentCategory:'mumbai-meri-jaan', role:'non-living,  non-religious'}) ;
      this.contentList.push( { contentFile:new MumbaiMeriJaan2List(),contentCategory:'mumbai-meri-jaan-2', role:'non-living,  non-religious'}) ;
      this.contentList.push( { contentFile:new PlacesScenesObjectsImageList(),contentCategory:'places-scenes-objects', role:'non-living,  non-religious'}) ;
      this.contentList.push( { contentFile:new PlanesImageList(),contentCategory:'planes', role:'non-living,  non-religious'}) ;
      this.contentList.push( { contentFile:new PlanesQ22023ImageList(),contentCategory:'planesQ12023', role:'non-living,  non-religious'}) ;
      this.contentList.push( { contentFile:new ThemesMisc(),contentCategory:'themes-misc', role:'non-living,  non-religious'}) ;
      this.contentList.push( { contentFile:new SundaraKaandam(),contentCategory:'sundara-kaandam', role:'misc'}) ;
      
      localStorage.setItem("usersContentList", JSON.stringify(this.contentList));
      return ;
    }
  }
  filterReligiousAndGuruLists():any {
    let tempContentList = [];
    tempContentList.push( { contentFile:new GaneshPreQ42021ImageList(),contentCategory:'shree-ganesh', role:'sanatani'}) ;
    tempContentList.push( { contentFile:new GaneshGTEQ42021ImageList(),contentCategory:'shree-ganesh-gte-q4-2021', role:'sanatani'}) ;
    tempContentList.push( { contentFile:new GaneshGTEQ12023ImageList(),contentCategory:'shree-ganesh-gte-q1-2023', role:'sanatani'}) ;
    tempContentList.push( { contentFile:new DeviImageList(),contentCategory:'devi', role:'sanatani'}) ;
    tempContentList.push( { contentFile:new MahadevImageList(),contentCategory:'mahadev', role:'sanatani'}) ;
    tempContentList.push( { contentFile:new MahadevFamilyImageList(),contentCategory:'mahadev-family', role:'sanatani'}) ;
    tempContentList.push( { contentFile:new KanhaRukhminiList(),contentCategory:'kanha-rukhmini', role:'misc'}) ;
    tempContentList.push( { contentFile:new DattavatarImageList(),contentCategory:'dattavatar', role:'guru'}) ;
      tempContentList.push( { contentFile:new SwamiSamarthaImageList(),contentCategory:'swami-samartha', role:'guru'}) ;
      tempContentList.push( { contentFile:new SwamiSamarthaQ22023ImageList(),contentCategory:'swami-samartha-q2-2023', role:'guru'}) ;
      tempContentList.push( { contentFile:new ShirdiSaiPreQ32021ImageList(),contentCategory:'shirdi-sai-q1-q2-2021', role:'guru'}) ;
      tempContentList.push( { contentFile:new ShirdiSaiQ3Q42021ImageList(),contentCategory:'shirdi-sai-q3-q4-2021', role:'guru'}) ;
      tempContentList.push( { contentFile:new ShirdiSaiQ2Q32022ImageList(),contentCategory:'shirdi-sai-q2-q3-2022', role:'guru'}) ;
      tempContentList.push( { contentFile:new ShirdiSaiQ42022Q12023ImageList(),contentCategory:'shirdi-sai-q4-2022-q1-2023', role:'guru'}) ;
      tempContentList.push( { contentFile:new ShirdiSaiQ12024ImageList(),contentCategory:'shirdi-sai-q1-2024', role:'guru'}) ;
      tempContentList.push( { contentFile:new ShirdiSaiQ2Q32023ImageList(),contentCategory:'shirdi-sai-q2-q3-2023', role:'guru'}) ;
      tempContentList.push( { contentFile:new ShirdiSaiThemeList1(),contentCategory:'baba-themes-1', role:'guru'}) ;
      let genImageList = { 
        sort: 'asc',
        allImageList: [ 
            { 
              folder:'',
              theme:'SOME RELGIOUS AND SPIRITUAL MYSTICS..',
              themeSummary: `A collection of selected sketches of Gods and Godesses, Saints and Gurus`,
              files: [],
            }
        ]} ;
         tempContentList.forEach((genericReligionGuruListElement:any) => {
          if (genericReligionGuruListElement.contentFile.allImageList[0].folder.indexOf('shree-ganesh-gte-q1-2023') >=0)
          console.log(`##########LIST ${genericReligionGuruListElement.contentFile.allImageList[0].folder}`);
          if (genericReligionGuruListElement.contentFile.allImageList[0].files
               && genericReligionGuruListElement.contentFile.allImageList[0].files.length > 0) {
                genericReligionGuruListElement.contentFile.allImageList[0].files.forEach(imageFile => {
                  if(imageFile.generic === 'true' && imageFile.genericDescription) {
                    imageFile.description = imageFile.genericDescription ;
                    // we will figure out iterations later...
                    if (imageFile.genericDate) imageFile.dateUploaded = imageFile.genericDate ;
                    if (imageFile.iterations) {
                      imageFile.iterations = null ;
                    }
                    genImageList.allImageList[0].files.push(imageFile);
                  }
                })
               }
       //   this.getSketchesWithSomeDifference(genImageList, genericReligionGuruListElement.contentFile) ;
        })
        console.log('generic')
        genImageList.allImageList[0].files.sort(function(a:any, b:any) {
         
          let c = a.genericCategory  -  b.genericCategory; // aDate - bDate ;
          return  c ;
        });
        return genImageList ;
  }
  loadContentListFineTune() {
    // first debug the login logout and other cache ;
    localStorage.getItem("usersContentList") ? console.log('CACHED LIST'):console.log('TO CACHE LIST') ;
    let userRole = this.UserThemes.indexOf("all") ;
    if (userRole <  0){
      console.log(`${this.UserThemes} .... ${this.UserThemes.indexOf("admin") >=0 || this.UserThemes.indexOf("sanatani") >=0}`);
      console.log(`${this.UserThemes} .... ${this.UserThemes.indexOf("admin") >=0 || this.UserThemes.indexOf("guru") >=0}`);
    }
    console.log(`Load content list User roles ${this.userThemes}`) ;
    if (localStorage.getItem("usersContentList")) {
      this.contentList = JSON.parse(localStorage.getItem("usersContentList")) ;
    } else {
      // in the future considering adding role in the ImageList object.. right now
      /*
      "admin",
"all",
"sanatani",
"guru",
"transports",
"events",
"places",
'non-living',
"people",
"non-religious"
      */
    
     
    
          this.contentList.push( { contentFile:new GaneshPreQ42021ImageList(),contentCategory:'shree-ganesh', role:'sanatani'}) ;
          this.contentList.push( { contentFile:new GaneshGTEQ42021ImageList(),contentCategory:'shree-ganesh-gte-q4-2021', role:'sanatani'}) ;
          this.contentList.push( { contentFile:new GaneshGTEQ12023ImageList(),contentCategory:'shree-ganesh-gte-q1-2023', role:'sanatani'}) ;
          this.contentList.push( { contentFile:new DeviImageList(),contentCategory:'devi', role:'sanatani'}) ;
          this.contentList.push( { contentFile:new MahadevImageList(),contentCategory:'mahadev', role:'sanatani'}) ;
          this.contentList.push( { contentFile:new MahadevFamilyImageList(),contentCategory:'mahadev-family', role:'sanatani'}) ;
          this.contentList.push( { contentFile:new KanhaRukhminiList(),contentCategory:'kanha-rukhmini', role:'misc'}) ;
       if (this.UserThemes.indexOf("all") >=0 || this.UserThemes.indexOf("admin") >=0 || this.UserThemes.indexOf("guru") >=0) {
        this.contentList.push( { contentFile:new DattavatarImageList(),contentCategory:'dattavatar', role:'guru'}) ;
        this.contentList.push( { contentFile:new SwamiSamarthaImageList(),contentCategory:'swami-samartha', role:'guru'}) ;
        this.contentList.push( { contentFile:new SwamiSamarthaQ22023ImageList(),contentCategory:'swami-samartha-q2-2023', role:'guru'}) ;
        this.contentList.push( { contentFile:new ShirdiSaiPreQ32021ImageList(),contentCategory:'shirdi-sai-q1-q2-2021', role:'guru'}) ;
        this.contentList.push( { contentFile:new ShirdiSaiQ3Q42021ImageList(),contentCategory:'shirdi-sai-q3-q4-2021', role:'guru'}) ;
        this.contentList.push( { contentFile:new ShirdiSaiQ2Q32022ImageList(),contentCategory:'shirdi-sai-q2-q3-2022', role:'guru'}) ;
        this.contentList.push( { contentFile:new ShirdiSaiQ42022Q12023ImageList(),contentCategory:'shirdi-sai-q4-2022-q1-2023', role:'guru'}) ;
        this.contentList.push( { contentFile:new ShirdiSaiQ12024ImageList(),contentCategory:'shirdi-sai-q1-2024', role:'guru'}) ;
        this.contentList.push( { contentFile:new ShirdiSaiQ2Q32023ImageList(),contentCategory:'shirdi-sai-q2-q3-2023', role:'guru'}) ;
        this.contentList.push( { contentFile:new ShirdiSaiThemeList1(),contentCategory:'baba-themes-1', role:'guru'}) ;
      }
      
      if (this.UserThemes.indexOf("all") >=0 || this.UserThemes.indexOf("admin") >=0 || this.UserThemes.indexOf("non-religious") >=0) {
        this.contentList.push( { contentFile:new PeopleImageList(),contentCategory:'people-places', role:'people,  non-religious'}) ;
        this.contentList.push( { contentFile:new TrainImageList(),contentCategory:'trains', role:'non-living,  non-religious'}) ;
        this.contentList.push( { contentFile:new TrainsIndianRailwayAlcos(),contentCategory:'trains-ir-alcos', role:'non-living,  non-religious'}) ;
        this.contentList.push( { contentFile:new TrainsIndianRailwaySpecialTrains(),contentCategory:'trains-ir-special-trains', role:'non-living,  non-religious'}) ;
        this.contentList.push( { contentFile:new MumbaiMeriJaanList(),contentCategory:'mumbai-meri-jaan', role:'non-living,  non-religious'}) ;
        this.contentList.push( { contentFile:new MumbaiMeriJaan2List(),contentCategory:'mumbai-meri-jaan-2', role:'non-living,  non-religious'}) ;
        this.contentList.push( { contentFile:new PlacesScenesObjectsImageList(),contentCategory:'places-scenes-objects', role:'non-living,  non-religious'}) ;
        this.contentList.push( { contentFile:new PlanesImageList(),contentCategory:'planes', role:'non-living,  non-religious'}) ;
        this.contentList.push( { contentFile:new PlanesQ22023ImageList(),contentCategory:'planesQ12023', role:'non-living,  non-religious'}) ;
        this.contentList.push( { contentFile:new ThemesMisc(),contentCategory:'themes-misc', role:'non-living,  non-religious'}) ;
        this.contentList.push( { contentFile:new SundaraKaandam(),contentCategory:'sundara-kaandam', role:'misc'}) ;
      }
      localStorage.setItem("usersContentList", JSON.stringify(this.contentList));
    }
  }
  loadContentListUnfiltered() {
    
    if (localStorage.getItem("usersContentList")) {
      this.contentList = JSON.parse(localStorage.getItem("usersContentList")) ;
    } else {
      // in the future considering adding role in the ImageList object.. right now
    // QUICK FIX+DEPLOY JAN 4 2024 scrub lists for min religous content and temp freeze roles
    /*
    this.contentList.push( { contentFile:new GaneshPreQ42021ImageList(),contentCategory:'shree-ganesh', role:'sanatani'}) ;
    this.contentList.push( { contentFile:new GaneshGTEQ42021ImageList(),contentCategory:'shree-ganesh-gte-q4-2021', role:'sanatani'}) ;
    this.contentList.push( { contentFile:new GaneshGTEQ12023ImageList(),contentCategory:'shree-ganesh-gte-q1-2023', role:'sanatani'}) ;
    this.contentList.push( { contentFile:new DeviImageList(),contentCategory:'devi', role:'sanatani'}) ;
    this.contentList.push( { contentFile:new MahadevImageList(),contentCategory:'mahadev', role:'sanatani'}) ;
    this.contentList.push( { contentFile:new MahadevFamilyImageList(),contentCategory:'mahadev-family', role:'sanatani'}) ;
    this.contentList.push( { contentFile:new KanhaRukhminiList(),contentCategory:'kanha-rukhmini', role:'sanatani'}) ;
    this.contentList.push( { contentFile:new DattavatarImageList(),contentCategory:'dattavatar', role:'guru'}) ;
    this.contentList.push( { contentFile:new SwamiSamarthaImageList(),contentCategory:'swami-samartha', role:'guru'}) ;
    this.contentList.push( { contentFile:new SwamiSamarthaQ22023ImageList(),contentCategory:'swami-samartha-q2-2023', role:'guru'}) ;
    this.contentList.push( { contentFile:new ShirdiSaiPreQ32021ImageList(),contentCategory:'shirdi-sai-q1-q2-2021', role:'guru'}) ;
    this.contentList.push( { contentFile:new ShirdiSaiQ3Q42021ImageList(),contentCategory:'shirdi-sai-q3-q4-2021', role:'guru'}) ;
    this.contentList.push( { contentFile:new ShirdiSaiQ2Q32022ImageList(),contentCategory:'shirdi-sai-q2-q3-2022', role:'guru'}) ;
    this.contentList.push( { contentFile:new ShirdiSaiQ42022Q12023ImageList(),contentCategory:'shirdi-sai-q4-2022-q1-2023', role:'guru'}) ;
    this.contentList.push( { contentFile:new ShirdiSaiQ2Q32023ImageList(),contentCategory:'shirdi-sai-q2-q3-2023', role:'guru'}) ;
    this.contentList.push( { contentFile:new ShirdiSaiThemeList1(),contentCategory:'baba-themes-1', role:'guru'}) ;
    */
   // QUICK FIX+DEPLOY JAN 4 2024 scrub lists for min religous content and temp freeze roles
    this.contentList.push( { contentFile:new PeopleImageList(),contentCategory:'people-places', role:'people,  non-religious'}) ;
    this.contentList.push( { contentFile:new TrainImageList(),contentCategory:'trains', role:'non-living,  non-religious'}) ;
    this.contentList.push( { contentFile:new ReligiousDietiesAndGurus(),contentCategory:'religion-and-guru', role:'non-living,  non-religious'}) ;
    this.contentList.push( { contentFile:new TrainsIndianRailwayAlcos(),contentCategory:'trains-ir-alcos', role:'non-living,  non-religious'}) ;
    this.contentList.push( { contentFile:new TrainsIndianRailwaySpecialTrains(),contentCategory:'trains-ir-special-trains', role:'non-living,  non-religious'}) ;
    this.contentList.push( { contentFile:new MumbaiMeriJaanList(),contentCategory:'mumbai-meri-jaan', role:'non-living,  non-religious'}) ;
    this.contentList.push( { contentFile:new MumbaiMeriJaan2List(),contentCategory:'mumbai-meri-jaan-2', role:'non-living,  non-religious'}) ;
    this.contentList.push( { contentFile:new PlacesScenesObjectsImageList(),contentCategory:'places-scenes-objects', role:'non-living,  non-religious'}) ;
    this.contentList.push( { contentFile:new PlanesImageList(),contentCategory:'planes', role:'non-living,  non-religious'}) ;
    this.contentList.push( { contentFile:new PlanesQ22023ImageList(),contentCategory:'planesQ12023', role:'non-living,  non-religious'}) ;
    this.contentList.push( { contentFile:new ThemesMisc(),contentCategory:'themes-misc', role:'non-living,  non-religious'}) ;
    this.contentList.push( { contentFile:new SundaraKaandam(),contentCategory:'sundara-kaandam', role:'misc'}) ;
    }
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

  loadSelectedContent(strParam:any):any {
    console.log(strParam);
    if (this.contentList === null || this.contentList.length === 0) {
      this.loadContentList();
    }
    let a:any = MenuTree.find(item => item.key === strParam) ;
    this.currentTab = a? a.tab: '';
    console.log(strParam);
    switch(strParam) {
      // authentication based changes.. right now special lists is unchanged.. 
      case 'showpiece': 
      
        this.genImageList = { 
        allImageList: [ 
            { 
              folder:'',
              theme:'Showpiece - before 2022',
              themeSummary: `&nbsp;&nbsp;These are some which are, what I consider my best efforts. Almost all the better ones, I have taken my time over..<br/>
                             &nbsp;&nbsp;My attitude and approach to sketching have changed; I RARELY try to finish a sketch at one sitting, but do it in bits and pieces..`,
              files: [],
            }
        ]} ; 
        // later this.loadMultipleThemes(this.loadTopUploads) ;
        let imageLists:any = [];
        this.loadLists(imageLists) ;
        imageLists.forEach((imageList:any) => {
          this.loadTopUploads(imageList);
        })
        this.sortImageList() ;
        break;
        case 'showpiece-2022': 
      
        this.genImageList = { 
        allImageList: [ 
            { 
              folder:'',
              theme:'Showpiece 2022',
              themeSummary: `&nbsp;&nbsp;These are some which are, what I consider my best efforts. Almost all the better ones, I have taken my time over..<br/>
                             &nbsp;&nbsp;My attitude and approach to sketching have changed; I RARELY try to finish a sketch at one sitting, but do it in bits and pieces..`,
              files: [],
            }
        ]} ; 
        // later this.loadMultipleThemes(this.loadTopUploads) ;
        let imageLists2:any = [];
        this.loadLists(imageLists2) ;
        imageLists2.forEach((imageList:any) => {
          this.loadTopUploads(imageList,2022);
        })
        
        this.sortImageList() ;
        break;
        case 'showpiece-2023': 
      
        this.genImageList = { 
        allImageList: [ 
            { 
              folder:'',
              theme:'Showpiece 2023',
              themeSummary: `&nbsp;&nbsp;These are some which are, what I consider my best efforts. Almost all the better ones, I have taken my time over..<br/>
                             &nbsp;&nbsp;My attitude and approach to sketching have changed; I RARELY try to finish a sketch at one sitting, but do it in bits and pieces..`,
              files: [],
            }
        ]} ; 
        // later this.loadMultipleThemes(this.loadTopUploads) ;
        let imageLists3:any = [];
        this.loadLists(imageLists3) ;
        imageLists3.forEach((imageList:any) => {
          this.loadTopUploads(imageList,2023);
        })
        
        this.sortImageList() ;
        break;
      case 'latest-uploads': 
      this.genImageList = { 
        allImageList: [ 
            { 
              folder:'',
              theme:'latest-uploads',
              themeSummary: `Uploads of 30 days or less`,
              files: [],
            }
        ]} ;
        const latestImageLists:any = [];
        this.loadLists(latestImageLists) ;
        latestImageLists.forEach((latestImageList:any) => {
          this.loadLatestUploads(latestImageList);
        })
       
        console.log(`#### LATEST UPLOAD .. LOADED`);
        
        this.genImageList.allImageList[0].files.sort(function(a:any, b:any) {
          const aDate = new Date(a.dateUploaded).getTime();
          const bDate = new Date(b.dateUploaded).getTime();
          let c = bDate  -  aDate ; // aDate - bDate ;
          return  c ;
        });
        console.log(`#### LATEST UPLOAD .. RETURN AFTER SORT`);
        
        break;
      case 'changers-b4-2022': 
      /* This page attempts to capture points 
      in my journey from third quarter 2020, when I started sketching, to approx June 2021, 
      when I finally got off my butt to put these up on a website in a sort of orderly manner*/ 
      this.genImageList = { 
        allImageList: [ 
            { 
              folder:'',
              theme:'INTRODUCTION: Milestones in a Journey.. (Before 2022)',
              themeSummary: `These are landmark sketches which I consider a significant change or turn in the progress of my sketches, or maybe a special reason. 
                              <i><u>These may not be my best efforts</u></i> but are a new element or entity that was introduced in these drawings.`,
              files: [],
            }
        ]} ;
        let milestoneImageLists:any = [];
        this.loadLists(milestoneImageLists) ;
        milestoneImageLists.forEach((milestoneImageList:any) => {
          this.getMilestoneSketches(milestoneImageList,0, 1);
        })
        
      this.genImageList.allImageList[0].files.sort(function(a:any, b:any) {
        const aDate = new Date(a.evolutionDate).getTime();
        const bDate = new Date(b.evolutionDate).getTime();
        let c = aDate  -  bDate ; // aDate - bDate ;
        return  c ;
      });
     /* this.genImageList = new GeneralImageList();
                         this.allImageList = this.genImageList.allImageList ;*/   
      break;
      case 'changers-2022': 
      /* This page attempts to capture points 
      in my journey from third quarter 2020, when I started sketching, to approx June 2021, 
      when I finally got off my butt to put these up on a website in a sort of orderly manner*/ 
      this.genImageList = { 
        allImageList: [ 
            { 
              folder:'',
              theme:'INTRODUCTION: Milestones in a Journey.. ( 2022)',
              themeSummary: `These are landmark sketches which I consider a significant change or turn in the progress of my sketches, or maybe a special reason. 
                              <i><u>These may not be my best efforts</u></i> but are a new element or entity that was introduced in these drawings.`,
              files: [],
            }
        ]} ;
        let milestoneImageLists2:any = [];
        this.loadLists(milestoneImageLists2) ;
        milestoneImageLists2.forEach((milestoneImageList:any) => {
          this.getMilestoneSketches(milestoneImageList,2022);
        })
        
      this.genImageList.allImageList[0].files.sort(function(a:any, b:any) {
        const aDate = new Date(a.evolutionDate).getTime();
        const bDate = new Date(b.evolutionDate).getTime();
        let c = aDate  -  bDate ; // aDate - bDate ;
        return  c ;
      });
     /* this.genImageList = new GeneralImageList();
                         this.allImageList = this.genImageList.allImageList ;*/   
      break;
      case 'changers-2023': 
      /* This page attempts to capture points 
      in my journey from third quarter 2020, when I started sketching, to approx June 2021, 
      when I finally got off my butt to put these up on a website in a sort of orderly manner*/ 
      this.genImageList = { 
        allImageList: [ 
            { 
              folder:'',
              theme:'INTRODUCTION: Milestones in a Journey..  ( 2023)',
              themeSummary: `These are landmark sketches which I consider a significant change or turn in the progress of my sketches, or maybe a special reason. 
                              <i><u>These may not be my best efforts</u></i> but are a new element or entity that was introduced in these drawings.`,
              files: [],
            }
        ]} ;
        let milestoneImageLists3:any = [];
        this.loadLists(milestoneImageLists3) ;
        milestoneImageLists3.forEach((milestoneImageList:any) => {
          this.getMilestoneSketches(milestoneImageList,2023);
        })
     
      this.genImageList.allImageList[0].files.sort(function(a:any, b:any) {
        const aDate = new Date(a.evolutionDate).getTime();
        const bDate = new Date(b.evolutionDate).getTime();
        let c = aDate  -  bDate ; // aDate - bDate ;
        return  c ;
      });
     /* this.genImageList = new GeneralImageList();
                         this.allImageList = this.genImageList.allImageList ;*/   
      break;
      /*
      case'religion-and-guru':
        console.log('###############hh')
        this.genImageList = { 
          allImageList: [ 
              { 
                folder:'',
                theme:'SOME RELGIOUS AND SPIRITUAL MYSTICS..',
                themeSummary: `A collection of selected sketches of Gods and Godesses, Saints and Gurus`,
                files: [],
              }
          ]} ;
          let genericReligionGuruList:any = [];
          this.loadLists(genericReligionGuruList) ;
          genericReligionGuruList.forEach((genericReligionGuruListElement:any) => {
            console.log(`LIST ${genericReligionGuruListElement.allImageList[0].folder}`);
            this.getSketchesWithSomeDifference(genericReligionGuruListElement) ;
          })
      break;
      */
      default: 
              this.genImageList = this.ContentList.find(cl => cl.contentCategory === strParam).contentFile;
               this.allImageList = this.genImageList.allImageList ;
      break;
   
    }
   // this.sortImages(false);
    return { all:  this.allImageList, gen: this.genImageList };

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
   return customLimit === -1 ?  diffDays <= this.latestLimit: minRange > 0
          ? diffDays >= minRange && diffDays <= customLimit : diffDays <= customLimit;
  }
  sortImages(asc=true) {
    this.genImageList.allImageList[0].files.sort(function(a:any, b:any) {
      const aDate = a.dateUploaded ? 
              new Date(a.dateUploaded).getTime():
              new Date('12-01-2015').getTime();
      const bDate = b.dateUploaded ? 
              new Date(b.dateUploaded).getTime():
              new Date('12-01-2015').getTime(); // new Date(b.dateUploaded).getTime();
      let c = asc === true ? bDate  -  aDate : aDate - bDate ; // aDate - bDate ;
      return  c ;
    });
  }
  // 2. used to extract latest uploads per theme 
  loadLatestUploads(currentList:any)  {
    let daysBack = 30 ;
    if(currentList.allImageList && currentList.allImageList[0].files) {
      currentList.allImageList[0].files.forEach((fileItem:any) => {
        if (!fileItem.duplicate && this.daysAgoUploaded(fileItem, daysBack)) {
          this.genImageList.allImageList[0].files.push(fileItem);
        }
      });
      this.allImageList  = this.genImageList.allImageList ; 
    this.allImageList[0].folder = '';
    this.allImageList[0].theme = 'latest-uploads';
    this.allImageList[0].themeSummary = 'Quick referral showing latest uploads of 30 days or less'
      if (this.genImageList.allImageList[0].files.length <= 5) {
        daysBack = 90 ;
        currentList.allImageList[0].files.forEach((fileItem:any) => {
          if (!fileItem.duplicate && this.daysAgoUploaded(fileItem, daysBack, 30)) {
            this.genImageList.allImageList[0].files.push(fileItem);
          }
        });
        this.allImageList[0].themeSummary = 'Latest and last uploads reaching back to 90 days (normally latest uploads are 30 days or less, but uploads may not have taken place a while)'
    
      }
    }
    
    
    console.log(`Loading latest`);
 //   return latestUploadList ;
  }
  // 3. used to extract top rated uploads per theme 
  loadTopUploads(currentList:any, year=0)  {
    if(currentList.allImageList && currentList.allImageList[0].files) {
      currentList.allImageList[0].files.forEach((fileItem:any) => {
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
     //   return latestUploadList ;
  }
  // initially added for adding sketches with generic description, 
  // amnd substituting generic description for the regular one 
  // for general religion-and-guru category
  getSketchesWithSomeDifference(pushList:any, currentList:any, showGeneric=true) {
    if (currentList.allImageList[0].folder.indexOf('shree-ganesh-gte-q1-2023') >=0)
          console.log(`getSketchesWithSomeDifference ${currentList.allImageList[0].folder}`);
    if(currentList.allImageList && currentList.allImageList[0].files) {
      currentList.contentFile.allImageList[0].files.forEach((fileItem:any) => {
        if (fileItem.generic !== null && fileItem.generic==='true') {
          fileItem.description = fileItem.genericDescription ;
          pushList.allImageList[0].files.push(fileItem);
        }
      });
    }
  }
  // 4. Load landmark sketches - not neccessarily the top sketches but a 'milestone' in my progress
  // May 2023 - breakup per year, part of reducing the list size per category
  getMilestoneSketches(currentList:any, year=0, sequence=0, range=[] )  {
    /*
    evolution: `<ul><li><b>Not the first</b>, but traditionally, one starts something with Lord Ganesh.</li>
                                <li>(as will be repeated later)My first color pencil sketch and, also duplicated with black and white sketch using 'glass trace'</li>`,
                evolutionDate
    */
    if(currentList.allImageList && currentList.allImageList[0].files) {
      currentList.allImageList[0].files.forEach((fileItem:any) => {
        // get evolution text
        if (fileItem.evolution ) {
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
  // 5. Get counts of each theme - 1st iteration, NOT FACTORING IN DUPLICATES
  getThemeCounts(currentList:any, canvass:any=null, content:any=null)  {
    let themeCount = {
      name: currentList.allImageList[0].theme,
      count: 0
    };
    if(currentList.allImageList && currentList.allImageList[0].files) {
      currentList.allImageList[0].files.forEach((fileItem:any) => {
        if(!fileItem.duplicate || fileItem.duplicate === false) themeCount.count++ ;
      });
    }
    return themeCount ;
  }

}
/* old code 

  loadSelectedContentPreAuthFilter(strParam:any):any {
    let a:any = MenuTree.find(item => item.key === strParam) ;
    this.currentTab = a? a.tab: '';
    switch(strParam) {
      case 'showpiece': 
      
        this.genImageList = { 
        allImageList: [ 
            { 
              folder:'',
              theme:'Showpiece - before 2022',
              themeSummary: `&nbsp;&nbsp;These are some which are, what I consider my best efforts. Almost all the better ones, I have taken my time over..<br/>
                             &nbsp;&nbsp;My attitude and approach to sketching have changed; I RARELY try to finish a sketch at one sitting, but do it in bits and pieces..`,
              files: [],
            }
        ]} ; 
        // later this.loadMultipleThemes(this.loadTopUploads) ;
        let imageLists:any = [];
        this.loadLists(imageLists) ;
        imageLists.forEach((imageList:any) => {
          this.loadTopUploads(imageList);
        })
        this.sortImageList() ;
        break;
        case 'showpiece-2022': 
      
        this.genImageList = { 
        allImageList: [ 
            { 
              folder:'',
              theme:'Showpiece 2022',
              themeSummary: `&nbsp;&nbsp;These are some which are, what I consider my best efforts. Almost all the better ones, I have taken my time over..<br/>
                             &nbsp;&nbsp;My attitude and approach to sketching have changed; I RARELY try to finish a sketch at one sitting, but do it in bits and pieces..`,
              files: [],
            }
        ]} ; 
        // later this.loadMultipleThemes(this.loadTopUploads) ;
        let imageLists2:any = [];
        this.loadLists(imageLists2) ;
        imageLists2.forEach((imageList:any) => {
          this.loadTopUploads(imageList,2022);
        })
        
        this.sortImageList() ;
        break;
        case 'showpiece-2023': 
      
        this.genImageList = { 
        allImageList: [ 
            { 
              folder:'',
              theme:'Showpiece 2023',
              themeSummary: `&nbsp;&nbsp;These are some which are, what I consider my best efforts. Almost all the better ones, I have taken my time over..<br/>
                             &nbsp;&nbsp;My attitude and approach to sketching have changed; I RARELY try to finish a sketch at one sitting, but do it in bits and pieces..`,
              files: [],
            }
        ]} ; 
        // later this.loadMultipleThemes(this.loadTopUploads) ;
        let imageLists3:any = [];
        this.loadLists(imageLists3) ;
        imageLists3.forEach((imageList:any) => {
          this.loadTopUploads(imageList,2023);
        })
        
        this.sortImageList() ;
        break;
      case 'latest-uploads': 
      this.genImageList = { 
        allImageList: [ 
            { 
              folder:'',
              theme:'latest-uploads',
              themeSummary: `Uploads of 30 days or less`,
              files: [],
            }
        ]} ;
        const latestImageLists:any = [];
        this.loadLists(latestImageLists) ;
        latestImageLists.forEach((latestImageList:any) => {
          this.loadLatestUploads(latestImageList);
        })
       
        console.log(`#### LATEST UPLOAD .. LOADED`);
        
        this.genImageList.allImageList[0].files.sort(function(a:any, b:any) {
          const aDate = new Date(a.dateUploaded).getTime();
          const bDate = new Date(b.dateUploaded).getTime();
          let c = bDate  -  aDate ; // aDate - bDate ;
          return  c ;
        });
        console.log(`#### LATEST UPLOAD .. RETURN AFTER SORT`);
        
        break;
      case 'changers-b4-2022': 
     
      this.genImageList = { 
        allImageList: [ 
            { 
              folder:'',
              theme:'INTRODUCTION: Milestones in a Journey.. (Before 2022)',
              themeSummary: `These are landmark sketches which I consider a significant change or turn in the progress of my sketches, or maybe a special reason. 
                              <i><u>These may not be my best efforts</u></i> but are a new element or entity that was introduced in these drawings.`,
              files: [],
            }
        ]} ;
        let milestoneImageLists:any = [];
        this.loadLists(milestoneImageLists) ;
        milestoneImageLists.forEach((milestoneImageList:any) => {
          this.getMilestoneSketches(milestoneImageList,0, 1);
        })
        
      this.genImageList.allImageList[0].files.sort(function(a:any, b:any) {
        const aDate = new Date(a.evolutionDate).getTime();
        const bDate = new Date(b.evolutionDate).getTime();
        let c = aDate  -  bDate ; // aDate - bDate ;
        return  c ;
      });
        break;
      case 'changers-2022': 
     
      this.genImageList = { 
        allImageList: [ 
            { 
              folder:'',
              theme:'INTRODUCTION: Milestones in a Journey.. ( 2022)',
              themeSummary: `These are landmark sketches which I consider a significant change or turn in the progress of my sketches, or maybe a special reason. 
                              <i><u>These may not be my best efforts</u></i> but are a new element or entity that was introduced in these drawings.`,
              files: [],
            }
        ]} ;
        let milestoneImageLists2:any = [];
        this.loadLists(milestoneImageLists2) ;
        milestoneImageLists2.forEach((milestoneImageList:any) => {
          this.getMilestoneSketches(milestoneImageList,2022);
        })
        
      this.genImageList.allImageList[0].files.sort(function(a:any, b:any) {
        const aDate = new Date(a.evolutionDate).getTime();
        const bDate = new Date(b.evolutionDate).getTime();
        let c = aDate  -  bDate ; // aDate - bDate ;
        return  c ;
      });
      break;
      case 'changers-2023': 
      this.genImageList = { 
        allImageList: [ 
            { 
              folder:'',
              theme:'INTRODUCTION: Milestones in a Journey..  ( 2023)',
              themeSummary: `These are landmark sketches which I consider a significant change or turn in the progress of my sketches, or maybe a special reason. 
                              <i><u>These may not be my best efforts</u></i> but are a new element or entity that was introduced in these drawings.`,
              files: [],
            }
        ]} ;
        let milestoneImageLists3:any = [];
        this.loadLists(milestoneImageLists3) ;
        milestoneImageLists3.forEach((milestoneImageList:any) => {
          this.getMilestoneSketches(milestoneImageList,2023);
        })
     
      this.genImageList.allImageList[0].files.sort(function(a:any, b:any) {
        const aDate = new Date(a.evolutionDate).getTime();
        const bDate = new Date(b.evolutionDate).getTime();
        let c = aDate  -  bDate ; // aDate - bDate ;
        return  c ;
      });
    
      break;

      case 'shree-ganesh': this.genImageList = new GaneshPreQ42021ImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'shree-ganesh-gte-q4-2021': this.genImageList = new GaneshGTEQ42021ImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'shree-ganesh-gte-q1-2023': this.genImageList = new GaneshGTEQ12023ImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'devi': this.genImageList = new DeviImageList();
                        this.allImageList = this.genImageList.allImageList ;
                        break;
      case 'mahadev': this.genImageList = new MahadevImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'mahadev-family': this.genImageList = new MahadevFamilyImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'kanha-rukhmini': this.genImageList = new KanhaRukhminiList();
                           this.allImageList = this.genImageList.allImageList ;
                           break;
      case 'dattavatar': this.genImageList = new DattavatarImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'swami-samartha': this.genImageList = new SwamiSamarthaImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
       case 'swami-samartha-q2-2023': this.genImageList = new SwamiSamarthaQ22023ImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
       case 'planes':  this.genImageList = new PlanesImageList();  
      this.allImageList = this.genImageList.allImageList ;
      break;        
      case 'planesQ12023':  this.genImageList = new PlanesQ22023ImageList();  
      this.allImageList = this.genImageList.allImageList ;
      break;    
      case 'religion-and-guru': this.genImageList = this.filterReligiousAndGuruLists() ;// new ReligiousDietiesAndGurus();
                        
                         this.allImageList = this.genImageList.allImageList ;
                         break;
          
      case 'trains': this.genImageList = new TrainImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'trains-ir-alcos': this.genImageList = new TrainsIndianRailwayAlcos();
                        this.allImageList = this.genImageList.allImageList ;
                        break;
      case 'trains-ir-special-trains': this.genImageList = new TrainsIndianRailwaySpecialTrains();
                        this.allImageList = this.genImageList.allImageList ;
                        break;
      case 'mumbai-meri-jaan': this.genImageList = new MumbaiMeriJaanList();
        this.allImageList = this.genImageList.allImageList ;
        break;
      case 'mumbai-meri-jaan-2': this.genImageList = new MumbaiMeriJaan2List();
        this.allImageList = this.genImageList.allImageList ;
        break;
      case 'shirdi-sai-q1-q2-2021': this.genImageList = new ShirdiSaiPreQ32021ImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'shirdi-sai-q3-q4-2021': this.genImageList = new ShirdiSaiQ3Q42021ImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'shirdi-sai-q2-q3-2022': this.genImageList = new ShirdiSaiQ2Q32022ImageList();
                          this.allImageList = this.genImageList.allImageList ;
                          break;
      case 'shirdi-sai-q4-2022-q1-2023': this.genImageList = new ShirdiSaiQ42022Q12023ImageList() ;
                          this.allImageList = this.genImageList.allImageList ;
                          break;
      case 'shirdi-sai-q2-q3-2023': this.genImageList = new ShirdiSaiQ2Q32023ImageList() ;
                          this.allImageList = this.genImageList.allImageList ;
                          break;
      case 'baba-themes-1': this.genImageList = new ShirdiSaiThemeList1();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'people-places': this.genImageList = new PeopleImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'places-scenes-objects': this.genImageList = new PlacesScenesObjectsImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'themes-misc': this.genImageList = new ThemesMisc();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'sundara-kaandam': this.genImageList = new  SundaraKaandam() ;
                                      this.allImageList = this.genImageList.allImageList ;
                                      break;
      default: this.allImageList = allImageList ; break;
    }
    this.sortImages(false);
    return { all:  this.allImageList, gen: this.genImageList };

  }*/