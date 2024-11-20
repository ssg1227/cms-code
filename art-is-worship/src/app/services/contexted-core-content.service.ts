import { Injectable } from '@angular/core';
import { ImageElement, ContentList } from '@settings-and-models/image-detail';
import { GaneshPreQ42021ImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/religion/aumkar-shree-ganesh/ganesh-pre-q4-2021.image.list' ;
import { GaneshGTEQ12023ImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/religion/aumkar-shree-ganesh/ganesh-gte-q1-2023.image.list' ;
import { GaneshGTEQ42021ImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/religion/aumkar-shree-ganesh/ganesh-gte-q4-2021.image.list' ;
import { GaneshGTEQ12024ImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/religion/aumkar-shree-ganesh/ganesh-gte-q1-2024.image.list' ;
import { GaneshGte112024ImageList} from 'src/assets/gallery-files/lists-and-other/image-lists/religion/aumkar-shree-ganesh/ganesh-gte-11-2024.image.list';
import { GaneshGteEnd7LteGaneshotsav2024List } from 'src/assets/gallery-files/lists-and-other/image-lists/religion/aumkar-shree-ganesh/ganesh-gte-end-7-lte-ganeshotsav-2024.list';
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
import { ShirdiSaiQ42024Q12025ImageList} from 'src/assets/gallery-files/lists-and-other/image-lists/religion/shirdi-sai/shirdi-sai-q4-2024-q1-2025.list';
import { PeopleImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/people.image.list';
import { FloraAndFaunaImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/flora-and-fauna.image.list';
import { PlacesScenesObjectsImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/places-scenes-objects.image.list';
import { ThemesMisc } from 'src/assets/gallery-files/lists-and-other/image-lists/themes-misc.list';
import { AnimateToBeOrganized1ImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/animate-to-be-organized-1.list';

import { TrainImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/transports-and-machines/trains/trains.list';
import { TrainsIndianRailwaySpecialTrains } from 'src/assets/gallery-files/lists-and-other/image-lists/transports-and-machines/trains/trains-indian-railway-special-trains';
import { TrainsIndianRailwayAlcos } from 'src/assets/gallery-files/lists-and-other/image-lists/transports-and-machines/trains/trains-indian-railway-alcos';
import {TrainsIndianRailwaySteam } from 'src/assets/gallery-files/lists-and-other/image-lists/transports-and-machines/trains/trains-indian-railway-steam';
import {  PlanesShipsCarsImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/transports-and-machines/machines-others/planes-ships-cars.image.list';
import {  PlanesShipsCars2ImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/transports-and-machines/machines-others/planes-ships-cars-2.image.list';
import {  SpecialAircraftSeriesImageList } from 'src/assets/gallery-files/lists-and-other/image-lists/transports-and-machines/machines-others/special-aircraft-series.list';
import { MumbaiMeriJaanList } from 'src/assets/gallery-files/lists-and-other/image-lists/salaam-mumbai/mumbai-meri-jaan.list';
import { MumbaiMeriJaan2List } from 'src/assets/gallery-files/lists-and-other/image-lists/salaam-mumbai/mumbai-meri-jaan-2.list';
import { ShadesAndShines1ImageList} from 'src/assets/gallery-files/lists-and-other/image-lists/special-lists/alag-grouping-full-cycle/shades-and-shines-1.image.list';
@Injectable({
  providedIn: 'root'
})
export class ContextedCoreContentService {

  constructor() { }
  loadContextedContentList(contentList:ContentList[], userObject:any = null) {
    let isSuper = false ;// make true   in case authentication breaks is super is a two role authentication either they see religious/guru content or they dont
    let isSanatani = false ;
    let isGuru = false ;
    if (userObject !== null && userObject.userRoles) {
      if (userObject.userRoles.find((x:string) => x === 'all' || x === 'superuser') !== undefined) {
        isSuper = true ;
      }
      if (userObject.userRoles.find((x:string) => x === 'sanatani') !== undefined) {
        isSanatani = true ;
      }

      if (userObject.userRoles.find((x:string) => x === 'guru') !== undefined) {
        isGuru = true ;
      }
    }
    if (isSuper === true || isSanatani === true || isGuru === true) {
      console.log(`Content service load lists ${isSuper} ${isSanatani} ${isGuru}`)
      if (isSuper === true || isSanatani === true ) {
        console.log(`Content service load lists ${isSuper} ${isSanatani} ${isGuru}`)
        contentList.push( { contentFile:new GaneshPreQ42021ImageList(),contentCategory:'shree-ganesh-b4-q4-2021', roles:['sanatani']}) ;
        contentList.push( { contentFile:new GaneshGTEQ42021ImageList(),contentCategory:'shree-ganesh-gte-q4-2021', roles:['sanatani']}) ;
        contentList.push( { contentFile:new GaneshGTEQ12023ImageList(),contentCategory:'shree-ganesh-gte-q1-2023', roles:['sanatani']}) ;
        contentList.push( { contentFile:new GaneshGTEQ12024ImageList(),contentCategory:'shree-ganesh-gte-q1-2024', roles:['sanatani'],latest:true}) ;
        contentList.push( { contentFile:new GaneshGteEnd7LteGaneshotsav2024List(),contentCategory:'shree-ganesh-gte7-lte-ganeshotsav-2024', roles:['sanatani'],latest:true}) ;
        contentList.push( { contentFile:new GaneshGte112024ImageList(),contentCategory:'ganesh-gte-11-2024', roles:["superuser","sanatani"],latest:true}) ;     
        contentList.push( { contentFile:new DeviImageList(),contentCategory:'devi', roles:['sanatani'],latest:true}) ;
        contentList.push( { contentFile:new MahadevImageList(),contentCategory:'mahadev', roles:['sanatani'],latest:true}) ;
        contentList.push( { contentFile:new MahadevFamilyImageList(),contentCategory:'mahadev-family', roles:['sanatani'],latest:true}) ;
        contentList.push( { contentFile:new LaxmiVishnuHanumanList(),contentCategory:'laxmi-vishnu-hanuman', roles:['sanatani'],latest:true}) ;
      }  
      if (isSuper === true || isGuru === true ) {
        console.log(`Content service load lists ${isSuper} ${isSanatani} ${isGuru}`)
        contentList.push( { contentFile:new DattavatarImageList(),contentCategory:'dattavatar', roles:['guru'],latest:true}) ;
        contentList.push( { contentFile:new SwamiSamarthaImageList(),contentCategory:'swami-samartha', roles:['guru']}) ;
        contentList.push( { contentFile:new SwamiSamarthaQ22023ImageList(),contentCategory:'swami-samartha-q2-2023', roles:['guru'],latest:true}) ;
        contentList.push( { contentFile:new ShirdiSaiQ42023Q12024ImageList(),contentCategory:'shirdi-sai-q4-2023-q1-2024', roles:['guru'],latest:true}) ;
        contentList.push( { contentFile:new ShirdiSaiThemeList1(),contentCategory:'baba-themes-1', roles:['guru']}) ;
        contentList.push( { contentFile:new ShirdiSaiPreQ32021ImageList(),contentCategory:'shirdi-sai-q1-q2-2021', roles:['guru']}) ;
        contentList.push( { contentFile:new ShirdiSaiQ3Q42021ImageList(),contentCategory:'shirdi-sai-q3-q4-2021', roles:['guru']}) ;
        contentList.push( { contentFile:new ShirdiSaiQ2Q32022ImageList(),contentCategory:'shirdi-sai-q2-q3-2022', roles:['guru']}) ;
        contentList.push( { contentFile:new ShirdiSaiQ42022Q12023ImageList(),contentCategory:'shirdi-sai-q4-2022-q1-2023', roles:['guru']}) ;
        contentList.push( { contentFile:new ShirdiSaiQ2Q32023ImageList(),contentCategory:'shirdi-sai-q2-q3-2023', roles:['guru']}) ;
        contentList.push( { contentFile:new ShirdiSaiQ2Q32024ImageList(),contentCategory:'shirdi-sai-q2-q3-2024', roles:['guru']}) ;
        contentList.push( { contentFile:new ShirdiSaiQ42024Q12025ImageList(),contentCategory:'shirdi-sai-q4-2024-q1-2025', roles:['guru']}) ;
      }
    }
    contentList.push( { contentFile:new PeopleImageList(),contentCategory:'people-places', roles:['all'],latest:true}) ;
    contentList.push( { contentFile:new FloraAndFaunaImageList(),contentCategory:'flora-and-fauna', roles:['all'],latest:true}) ;
    contentList.push( { contentFile: new PlacesScenesObjectsImageList(),contentCategory:'places-scenes-objects', roles:['non-living,  non-religious'],latest:true}) ;
    contentList.push( { contentFile: new ThemesMisc(),contentCategory:'themes-misc', roles:['non-living,  non-religious'],latest:true}) ;

    contentList.push( { contentFile:new TrainImageList(),contentCategory:'trains', roles:['non-living,  non-religious'],latest:true}) ;
    contentList.push( { contentFile:new TrainsIndianRailwayAlcos(),contentCategory:'trains-ir-alcos', roles:['non-living,  non-religious'],latest:true}) ;
    contentList.push( { contentFile:new TrainsIndianRailwaySteam(),contentCategory:'trains-ir-steam', roles:['non-living,  non-religious'],latest:true}) ;
    contentList.push( { contentFile:new TrainsIndianRailwaySpecialTrains(),contentCategory:'trains-ir-special-trains', roles:['non-living,  non-religious'],latest:true}) ;
    contentList.push( { contentFile:new MumbaiMeriJaanList(),contentCategory:'mumbai-meri-jaan', roles:['non-living,  non-religious']}) ;
    contentList.push( { contentFile:new MumbaiMeriJaan2List(),contentCategory:'mumbai-meri-jaan-2', roles:['non-living,  non-religious'],latest:true}) ;
    contentList.push( { contentFile:new AnimateToBeOrganized1ImageList(),contentCategory:'animate-to-be-oragnized1', roles:['misc']}) ;

    contentList.push( { contentFile:new PlanesShipsCarsImageList(),contentCategory:'planes-ships-cars', roles:['non-living,  non-religious'],latest:true}) ;
    contentList.push( { contentFile:new PlanesShipsCars2ImageList(),contentCategory:'planes-ships-cars-2', roles:['non-living,  non-religious'],latest:true}) ;
    contentList.push( { contentFile:new SpecialAircraftSeriesImageList(), contentCategory:'special-aircraft-series', roles:['non-living,  non-religious'],latest:true}) ;
    contentList.push( { contentFile:new ShadesAndShines1ImageList(),contentCategory:'shades-and-shines-1', roles:["any"],latest:true}) ;       
 }
  loadSpecialLists(contentList:ContentList[], specialFiles:any,strParam:string):boolean {
     
   
    let specialListFound = true ;
    switch (strParam) {
      // optimize later
      case 'special-lists-christmas-collection':
       
         
        contentList.forEach((individImageList:any) => {
          if(individImageList.contentFile.allImageList && 
            individImageList.contentFile.allImageList[0].files){
            
              individImageList.contentFile.allImageList[0].files.forEach((fileItem:any) => {
                if (fileItem.labelValue && fileItem.labelValue[0].value === strParam) {
                  specialFiles.push(fileItem);
                }
              });
            
            }
       })
            
        break ;
      default:
        specialListFound = false ;
        break;
/*
// .. for art-is-worship
      let yearSelected = 0 ;
      let themeYear = 'before 2022';
        switch (strParam) {
          // .. 
          case 'showpiece': 
          case 'showpiece-2022': 
          case 'showpiece-2023': 
          case 'showpiece-2024': 
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
            contentList.forEach((latestImageList:any) => {
          
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
            contentList.forEach((milestoneImageList:any) => {
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
              contentList.forEach((latestImageList:any) => {
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
                contentList.forEach((latestImageList:any) => {
                  if(latestImageList.latest && latestImageList.latest === true)
                    this.loadLatestUploads(latestImageList);
                })
                return { all:  this.allImageList, gen: this.genImageList };
                console.log(`#### LATEST UPLOAD .. RETURN AFTER SORT`);
                
              break;
            default: 
            
            // @ts-ignore: Object is possibly 'null'.
            console.log(strParam) ;
            this.genImageList = contentList.find(cl => cl.contentCategory === strParam)? 
                contentList.find(cl => cl.contentCategory === strParam)?.contentFile: null;
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
*/
    }
    return specialListFound ;
  }
}
