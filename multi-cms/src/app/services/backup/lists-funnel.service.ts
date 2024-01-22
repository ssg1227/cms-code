import { Injectable } from '@angular/core';
import { tabs, tabsWithRoles, MenuTree } from '../../../assets/data-and-config/menus-and-other-contexts/menu-tree'
import { CategoriesService } from '../categories.service';
import { DeviImageList } from '../../../assets/all-images/religion/devi/devi.image.list' //'../assets/data-/../components/viewers/data/devi.image.list';
import { MahadevImageList } from '../../../assets/data-and-config/data/mahadev.image.list.todelete';
import { MahadevFamilyImageList } from '../../../assets/data-and-config/data/mahadev-family.image.list';
import { KanhaRukhminiList} from '../../../assets/data-and-config/data/kanha-rukhmini.list';
import { PeopleImageList } from '../../../assets/data-and-config/data/people.image.list';
import { PlacesScenesObjectsImageList} from '../../../assets/data-and-config/data/places-scenes-objects.image.list';
import { ThemesMisc } from '../../../assets/data-and-config/data/themes-misc.list';
import { LatestUploadsImageList } from '../../../assets/data-and-config/data/latest-uploads.list';
import { PlanesImageList } from '../../../assets/data-and-config/data/planes.image.list';
import { PlanesQ22023ImageList } from '../../../assets/data-and-config/data/planes-q2-2023.image.list';
import { GaneshPreQ42021ImageList } from '../../../assets/all-images/religion/aumkar-shree-ganesh/pre-q4-2021ganesh/ganesh-pre-q4-2021.image.list';
import { GaneshGTEQ42021ImageList } from '../../../assets/all-images/religion/aumkar-shree-ganesh/gte-q4-2021-ganesh/ganesh-gte-q4-2021.image.list';
import { GaneshGTEQ12023ImageList } from '../../../assets/all-images/religion/aumkar-shree-ganesh/gte-q1-2023/ganesh-gte-q1-2023.image.list';
import { SwamiSamarthaImageList } from '../../../assets/data-and-config/data/swami-samartha.image.list'
import { SwamiSamarthaQ22023ImageList } from '../../../assets/data-and-config/data/swami-samartha-q2-2023.image.list'
import { DattavatarImageList } from '../../../assets/data-and-config/data/dattavatar.image.list.todelete';
import { ShirdiSaiPreQ32021ImageList} from '../../../assets/data-and-config/data/shirdi-sai-pre-q3-2021.list';
import { ShirdiSaiQ3Q42021ImageList} from '../../../assets/data-and-config/data/shirdi-sai-q3-q4-2021.list';
import { ShirdiSaiQ2Q32022ImageList} from '../../../assets/data-and-config/data/shirdi-sai-q2-q3-2022.list';
import { ShirdiSaiQ42022Q12023ImageList} from '../../../assets/data-and-config/data/shirdi-sai-q4-2022-q1-2023.list';
import { ShirdiSaiQ2Q32023ImageList} from '../../../assets/data-and-config/data/shirdi-sai-q2-q3-2023.list';
import { ShirdiSaiThemeList1} from '../../../assets/data-and-config/data/baba-theme.images-list';

import { TrainImageList } from '../../../assets/data-and-config/data/trains.list';
import { TrainsIndianRailwayAlcos} from '../../../assets/data-and-config/data/trains-indian-railway-alcos'
import { TrainsIndianRailwaySpecialTrains} from '../../../assets/data-and-config/data/trains-indian-railway-special-trains'
import { GeneralImageList } from '../../../assets/data-and-config/data/general.image.list';
import { ShowpieceImageList } from '../../../assets/data-and-config/data/showpiece.image.list';
import {MumbaiMeriJaanList} from '../../../assets/data-and-config/data/mumbai-meri-jaan.list';
import {MumbaiMeriJaan2List} from '../../../assets/data-and-config/data/mumbai-meri-jaan-2.list';
import { allImageList, CoreContentElement } from '../../../assets/data-and-config/data/image.list';
//#### Unorganized #### 
import { SundaraKaandam } from  '../../../assets/data-and-config/data/sundara-kaandam.list';
@Injectable({
  providedIn: 'root'
})

export class ListsFunnelService {

  allImageList:CoreContentElement[] = [];
  sortThumbnails:string = '';
  genImageList:any = null ;
  latestLimit = 40 ;
  constructor() { }
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
  get tabs():string[] {
    let userThemes = localStorage.getItem('userThemes')? localStorage.getItem('userThemes').toString(): '' ;
    if(userThemes && userThemes.indexOf('all') >= 0){
      return tabs ;
    }
    return this.tabsWithRoles(userThemes) ;// tabs; 
  }
  tabsWithRoles(userThemes):string[] {
    let rolledTabs:string[] = [];
    
    tabsWithRoles.forEach((tabWithRole) => {
        //  if(userThemes.indexOf(x)>=0 || x.indexOf('any') >=0) {
          console.log(`TAB Roles ${tabWithRole.roles.toString()} USER: ${userThemes}`)
          tabWithRole.roles.forEach(tabRole => {
            if (CategoriesService.roleFilter(userThemes, tabRole, true) === true){
              rolledTabs.push(tabWithRole.tab);
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

  getStatspreAuth() {
    let sketchStats = {
      subjects: 0,
      totalCounts :0 ,
      canvassSize:[],
      content:[],
      themBasedCounts: [{name:'', count:0}],
    };
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
    functionProto(new ShirdiSaiQ2Q32023ImageList()) ;
    functionProto(new ShirdiSaiThemeList1()) ;
    functionProto(new PeopleImageList()) ;
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
    imageList.push(new GaneshPreQ42021ImageList()) ;
    imageList.push(new GaneshGTEQ42021ImageList()) ;
    imageList.push(new GaneshGTEQ12023ImageList()) ;
    imageList.push(new DeviImageList()) ;
    imageList.push(new MahadevImageList()) ;
    imageList.push(new MahadevFamilyImageList()) ;
    imageList.push(new KanhaRukhminiList()) ;
    imageList.push(new DattavatarImageList()) ;
    imageList.push(new SwamiSamarthaImageList()) ;
    imageList.push(new SwamiSamarthaQ22023ImageList()) ;
    imageList.push(new ShirdiSaiPreQ32021ImageList()) ;
    imageList.push(new ShirdiSaiQ3Q42021ImageList()) ;
    imageList.push(new ShirdiSaiQ2Q32022ImageList()) ;
    imageList.push(new ShirdiSaiQ42022Q12023ImageList()) ;
    imageList.push(new ShirdiSaiQ2Q32023ImageList()) ;
    imageList.push(new ShirdiSaiThemeList1()) ;
    imageList.push(new PeopleImageList()) ;
    imageList.push(new TrainImageList()) ;
    imageList.push(new TrainsIndianRailwayAlcos()) ;
    imageList.push(new TrainsIndianRailwaySpecialTrains()) ;
    imageList.push(new MumbaiMeriJaanList()) ;
    imageList.push(new MumbaiMeriJaan2List()) ;
    imageList.push(new PlacesScenesObjectsImageList()) ;
    imageList.push(new PlanesImageList()) ;
    imageList.push(new PlanesQ22023ImageList()) ;
    imageList.push(new ThemesMisc());
    imageList.push(new SundaraKaandam()) ;
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
