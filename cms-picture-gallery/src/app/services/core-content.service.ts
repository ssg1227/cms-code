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
@Injectable({
  providedIn: 'root'
})
export class CoreContentService {
  contentList:ContentList[]= [] ;

  allImageList:ImageElement[] = [];
  genImageList:any = null ;
  constructor() {
    this.loadContentList();
   }
  private breadCrumbs?:BreadCrumb[] =[] ;
  private parentDescription?:string ='';
  get BreadCrumbs():BreadCrumb[]| undefined{
    return this.breadCrumbs;
  } 
  get ParentDescription():string| undefined{
    return this.parentDescription;
  } 
  setCurrentCardList():TreeNodeElement[]  {
    let retCardList:TreeNodeElement[] = [];
    let currentParentKey =  localStorage.getItem('current-menu') ;
    retCardList = MenuTreeElements.filter((x) => x.parentKey === currentParentKey) ;
    
    let currentParent = MenuTreeElements.find((x) => x.key === currentParentKey) ;
    this.breadCrumbs  = currentParent?.breadCrumb ;
    this.parentDescription = currentParent?.description !== undefined ? currentParent?.description: currentParent?.label;
    return retCardList ;
  }

  loadContentList() {
    
      // in the future considering adding role in the ImageList object.. right now
    // QUICK FIX+DEPLOY JAN 4 2024 scrub lists for min religous content and temp freeze roles
    /**/ 
    //if (this.Scrub === false) {
      this.contentList.push( { contentFile:new GaneshPreQ42021ImageList(),contentCategory:'shree-ganesh-b4-q4-2021', role:'sanatani'}) ;
      this.contentList.push( { contentFile:new GaneshGTEQ42021ImageList(),contentCategory:'shree-ganesh-gte-q4-2021', role:'sanatani'}) ;
      this.contentList.push( { contentFile:new GaneshGTEQ12023ImageList(),contentCategory:'shree-ganesh-gte-q1-2023', role:'sanatani'}) ;
      this.contentList.push( { contentFile:new GaneshGTEQ12024ImageList(),contentCategory:'shree-ganesh-gte-q1-2024', role:'sanatani'}) ;
      
      this.contentList.push( { contentFile:new DeviImageList(),contentCategory:'devi', role:'sanatani'}) ;
      /*this.contentList.push( { contentFile:new MahadevImageList(),contentCategory:'mahadev', role:'sanatani'}) ;
      this.contentList.push( { contentFile:new MahadevFamilyImageList(),contentCategory:'mahadev-family', role:'sanatani'}) ;
      this.contentList.push( { contentFile:new LaxmiVishnuHanumanList(),contentCategory:'laxmi-vishnu-hanuman', role:'sanatani'}) ;
      this.contentList.push( { contentFile:new DattavatarImageList(),contentCategory:'dattavatar', role:'guru'}) ;
      this.contentList.push( { contentFile:new SwamiSamarthaImageList(),contentCategory:'swami-samartha', role:'guru'}) ;
      this.contentList.push( { contentFile:new SwamiSamarthaQ22023ImageList(),contentCategory:'swami-samartha-q2-2023', role:'guru'}) ;
      this.contentList.push( { contentFile:new ShirdiSaiPreQ32021ImageList(),contentCategory:'shirdi-sai-q1-q2-2021', role:'guru'}) ;
      this.contentList.push( { contentFile:new ShirdiSaiQ3Q42021ImageList(),contentCategory:'shirdi-sai-q3-q4-2021', role:'guru'}) ;
      this.contentList.push( { contentFile:new ShirdiSaiQ2Q32022ImageList(),contentCategory:'shirdi-sai-q2-q3-2022', role:'guru'}) ;
      this.contentList.push( { contentFile:new ShirdiSaiQ42022Q12023ImageList(),contentCategory:'shirdi-sai-q4-2022-q1-2023', role:'guru'}) ;
      this.contentList.push( { contentFile:new ShirdiSaiQ2Q32023ImageList(),contentCategory:'shirdi-sai-q2-q3-2023', role:'guru'}) ;
      this.contentList.push( { contentFile:new ShirdiSaiQ42023Q12024ImageList(),contentCategory:'shirdi-sai-q4-2023-q1-2024', role:'guru'}) ;
      this.contentList.push( { contentFile:new ShirdiSaiThemeList1(),contentCategory:'baba-themes-1', role:'guru'}) ;
      */
  //  }
    /**/
   // QUICK FIX+DEPLOY JAN 4 2024 scrub lists for min religous content and temp freeze roles
   /*
   if (this.Scrub === true) {
    this.contentList.push( { contentFile:this.filterReligiousAndGuruLists(),contentCategory:'religion-and-guru', role:'non-living,  non-religious'}) ;
  }
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
    this.contentList.push( { contentFile:new AnimateToBeOrganized1ImageList(),contentCategory:'animate-to-be-oragnized1', role:'misc'}) ;
    */
    //}
  }
  loadSelectedContent(strParam:string):any {
      if (this.contentList === null || this.contentList.length === 0) {
        this.loadContentList();
      }
        // switch (strParam) {
    // .. 
      // default: 
      
      // @ts-ignore: Object is possibly 'null'.
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
      //break;
    //}
     // revisit this logic
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
       */
        switch(fileDetail.content) {
          case 'watercolor-pencil': returnHTML = `${returnHTML} including WaterColor Pencils`; break ;
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
  
}
