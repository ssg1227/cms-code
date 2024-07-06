import { Injectable } from '@angular/core';
import { ImageElement, ContentList } from 'src/assets/gallery-files/shared/image-detail2';

@Injectable({
  providedIn: 'root'
})
export class ContextedCoreContentServiceBak {

  constructor() { }
  loadContextedContentList(contentList:ContentList[], userObject:any = null) {
  /* 
  contentList.push( { contentFile: new listfile(),contentCategory:'keyword', roles:['any'],latest:true}) ;
 */  
  
    
 }
  loadSpecialLists(contentList:ContentList[], specialFiles:any,strParam:string):boolean {
     
   
    let specialListFound = true ;
    switch (strParam) {
      // optimize later
      case 'feedback-testimonials' :
       
        break ;
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
