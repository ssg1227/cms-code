import { Injectable } from '@angular/core';
import { ImageElement, ContentList } from 'src/assets/gallery-files/shared/image-detail2';
// withe prices..
import { CreamCakesChocolateGanache }  from 'src/assets/gallery-files/lists-and-other/image-lists/cream-cakes-chocolate-ganache.list';
import { CreamCakesChocolateOtherFrosting }  from 'src/assets/gallery-files/lists-and-other/image-lists/cream-cakes-chocolate-other-frosting.list';
import { CreamCakesRainbowChecker }  from 'src/assets/gallery-files/lists-and-other/image-lists/cream-cakes-rainbow-checker.list';
import { CreamCakesOreoBfWfWan }  from 'src/assets/gallery-files/lists-and-other/image-lists/cream-cakes-oreo-bf-wf-van.list';
import { CreamCakesStrawberry } from 'src/assets/gallery-files/lists-and-other/image-lists/cream-cakes-strawberry.list';
import { CookiesBrowniesOther } from 'src/assets/gallery-files/lists-and-other/image-lists/cookies-brownies-other.list';
import { FruitCakes } from 'src/assets/gallery-files/lists-and-other/image-lists/fruit-cakes.list';
import { CoffeeCakes } from 'src/assets/gallery-files/lists-and-other/image-lists/coffee-cakes.list'
import { RedVelvetCakes } from 'src/assets/gallery-files/lists-and-other/image-lists/red-velvet-cakes.list';
import { PricesList } from 'src/assets/gallery-files/lists-and-other/image-lists/prices.list'

// content files 
import { SpecialityCakesChocolate } from 'src/assets/gallery-files/lists-and-other/image-lists/speciality-cakes-chocolate.list';
import { SpecialityCakesNonChocolate } from 'src/assets/gallery-files/lists-and-other/image-lists/speciality-cakes-non-chocolate.list';
import { TeaCakes} from 'src/assets/gallery-files/lists-and-other/image-lists/tea-cakes.list'  ;
import { CupCakes } from 'src/assets/gallery-files/lists-and-other/image-lists/cup-cakes.list';
import { ContactDetailsFSAI } from 'src/assets/gallery-files/lists-and-other/image-lists/contact-details-fsai.list';
import {Uncategorized } from 'src/assets/gallery-files/lists-and-other/image-lists/uncategorized.list';
@Injectable({
  providedIn: 'root'
})
export class ContextedCoreContentService {

  constructor() { }
  loadContextedContentList(contentList:ContentList[], userObject:any = null) {
    contentList.push( { contentFile: new SpecialityCakesChocolate(),contentCategory:'speciality-cakes-chocolate', roles:['any'],latest:true}) ;
    contentList.push( { contentFile: new SpecialityCakesNonChocolate(),contentCategory:'speciality-cakes-non-chocolate', roles:['any'],latest:true}) ;
    contentList.push( { contentFile: new TeaCakes(),contentCategory:'tea-cakes', roles:['any'],latest:true}) ;
    contentList.push( { contentFile: new CupCakes(),contentCategory:'cup-cakes', roles:['any'],latest:true}) ;
    contentList.push( { contentFile: new ContactDetailsFSAI(),contentCategory:'contact-details-fsai', roles:['any'],latest:true}) ;
    contentList.push( { contentFile: new Uncategorized(),contentCategory:'uncategorized', roles:['any'],latest:true}) ;

    contentList.push( { contentFile: new CreamCakesChocolateGanache(), contentCategory:'cream-cakes-chocolate-ganache', roles:['any'],latest:true}) ;
    contentList.push( { contentFile: new CreamCakesChocolateOtherFrosting(), contentCategory:'cream-cakes-chocolate-other-frosting', roles:['any'],latest:true}) ;
    contentList.push( { contentFile: new CreamCakesRainbowChecker(), contentCategory:'cream-cakes-rainbow-checker', roles:['any'],latest:true}) ;
    contentList.push( { contentFile: new CreamCakesOreoBfWfWan(), contentCategory:'cream-cakes-oreo-bf-wf-van', roles:['any'],latest:true}) ;
    contentList.push( { contentFile: new CreamCakesStrawberry(), contentCategory:'cream-cakes-strawberry', roles:['any'],latest:true}) ;
    contentList.push( { contentFile: new CookiesBrowniesOther(),contentCategory:'cookies-brownies-other', roles:['any'],latest:true}) ;
    contentList.push( { contentFile: new FruitCakes(),contentCategory:'fruit-cakes', roles:['any'],latest:true}) ;
    contentList.push( { contentFile: new CoffeeCakes(),contentCategory:'coffee-cakes', roles:['any'],latest:true}) ;
    contentList.push( { contentFile: new RedVelvetCakes(),contentCategory:'red-velvet-cakes', roles:['any'],latest:true}) ;
    contentList.push( { contentFile: new PricesList(),contentCategory:'prices-list', roles:['any'],latest:true}) ;
    
    
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
*/
    }
    return specialListFound ;
  }
}
