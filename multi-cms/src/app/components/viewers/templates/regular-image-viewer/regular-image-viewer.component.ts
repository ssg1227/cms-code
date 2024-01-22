import { CoreContentElement } from  '../../../../../assets/data-and-config/data/image.list';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// #### All data content imported shifted to list-funnel service .. 
// scroll down for commented imports and old version of ng-init
// This is a convenience
// Else everytime a new list is created, adding the import and entry to the switch statement 
// in all the viewer components - currently two ,
// later on we can add specific exclude criteria as a param to pass to the service
/*
import { ListsFunnelService  } from 'src/app/services/lists-funnel.service';
replacing above service with the new kid below.. 
This new version will attempt to use caching, casting off need to (re)load new instances of the content lists.
In conjunction, use a generic list type to collect the content lists to make for more efficient code AND 
 be able to factor in generic applicability like masking or including lists based on user roles...
 ...
 Once tested will rename the instances of 'coreContentService' appropriately
*/
import { CoreContentService } from 'src/app/services/core-content.service';
// import * as fs from 'fs';
// import { MockStringBundlerHost } from '../../../../node_modules_1/@angular/tsc-wrapped/test/bundler_spec';
/* interface DataDetail {
  fileName:string;
  type:string;// 'img'
  folder:string;
}
*/
@Component({
  selector: 'app-regular-image-viewer',
  templateUrl: './regular-image-viewer.component.html',
  styleUrls: ['./regular-image-viewer.component.css']
})
export class RegularImageViewerComponent {
  iterativeText = 'ITERATIONS';
  allImageList:CoreContentElement[] = [];
  sortThumbnails:string = '';
  genImageList:any = null ;
  selectedImageList:any[] = [ ];
  currentImage =  this.selectedImageList[0]; // `assets/all-images-demo/starters/su-30-1.jpeg`;
  iterationIndex = 0;
  themeHeader:string ='';
  themeSummary:string = '';
  currentIndex:number = 0 ;
  _actualSize:boolean = false;
  _iterations:boolean = false ;

  get ActualSize():boolean {
    return this._actualSize;
  }
  get Template(): string {
    return this.coreContentService.Template ;
  }
  IterativeText(currentImage:any)  {
    return currentImage.iterativeText ? currentImage.iterativeText : 'Previous Versions... *'
  }
  public techStats(currentImage:any) {
    return this.coreContentService.techStatsSpan(currentImage);
  }

  set ActualSize(val:boolean) {
    this._actualSize = val ;
  }
  get Iterations():boolean {
    return this._iterations;
  }
  set Iterations(val:boolean) {
    this._iterations = val ;
  }
  get CurrentImage(): string {
    return JSON.stringify(this.currentImage);
  }
  thumbnailStyle(source:any) {
    return  this.coreContentService.daysAgoUploaded(source) === true? 
      { 'border': '2px outset orange', 'margin': '1px'} : 
      { 'border': '1px inset blue', 'margin': '1px'}
  }
  daysAgoUploaded(source:any) {
    const firstDayOfYear =  source.dateUploaded ? new Date(source.dateUploaded): new Date('01-01-1990') ;
    const today = new Date();
    
  
    const diff = Math.abs(today.getTime() - firstDayOfYear.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
    if(source.dateUploaded) { console.log(`${JSON.stringify(source.dateUploaded)}`); }
    console.log(`${JSON.stringify(source)}`);
    return  diffDays <= 7 ? { 'border': '2px solid orange'} : { 'border': 'none'}

  }


  headerStyle():any {
    let currentHeight = '40px';
    let paddinghTop = '-5px';
    if (this.themeSummary !== '')
       currentHeight = '100px';
    return  { height:  currentHeight, 'padding-top': paddinghTop } ;
 }
  constructor(private activatedRoute:ActivatedRoute, private coreContentService: CoreContentService) { }
  /// see Import private coreContentService: ListsFunnelService) { }
  
  DescrFooter(currentImage:any) {
    console.log(JSON.stringify(currentImage.footNote));
    return currentImage.footNote ? 
      currentImage.footNote : 
      '* Click the button on top in this div to see versions or components of the main sketch';
  }
  
  ngOnInit() {
    let themed:any = null ;
    let foundList:CoreContentElement[] = [] ;
    this.activatedRoute.paramMap.subscribe(param => 
      { 
        themed = param; console.log(param.get('theme'));
        let strParam = (param.get('theme'));
        console.log(`OPTION ${strParam}`);
        // Saving option 'optionSelect' - this is to preserve the selection if a tab change is encountered..
        // See *-viewer component where it is set in the ngOnInit
        // See tabbing container component where it will be reset if tab is clicked
        // See top nav bar component where its value is checked
        localStorage.setItem('optionSelect', strParam? strParam:'') ;
        this.genImageList =  null;
        console.log(themed);
        const dataReturned = this.coreContentService.loadSelectedContent(strParam);
        this.genImageList = dataReturned.gen ; 
        this.allImageList = this.genImageList.allImageList;
        foundList = strParam === 'latest-uploads' || 'showpiece' ? this.allImageList :
            this.allImageList.filter(x => x.folder === param.get('theme'));// themed.params.theme.toString());
        if (foundList !== null && foundList.length > 0) {
          let foundFolder = foundList[0].folder;
          this.themeHeader = '';
          this.themeSummary = '';
          if(foundList[0].theme) this.themeHeader = foundList[0].theme; 
          if(foundList[0].themeSummary) this.themeSummary = foundList[0].themeSummary; 
          this.selectedImageList = [];
          foundList[0]
              .files
              .forEach( (fileData:any) => {
                
                fileData.fullFileName? 
                  this.selectedImageList.push({ 
                    iterativeText: fileData.iterativeText?`${fileData.iterativeText}`:'Previous Versions... *',
                    footNote: fileData.footNote?`${fileData.footNote}`:
                        '* Click the button on top in this div to see versions or components of the main sketch',
                    image: `${fileData.fullFileName}`, 
                    thumbnail: `${fileData.thumbnail? fileData.thumbnail: ''}`,
                    title: `${fileData.title? fileData.title: fileData.description}`,
                    dateUploaded: `${fileData.dateUploaded? fileData.dateUploaded: '01-01-1990'}`,
                    iterations: fileData.iterations? fileData.iterations:[],
                    canvassSize: fileData.canvassSize? fileData.canvassSize:'',
                    content:fileData.content?fileData.content:'',
                    iterationIndex:0 }):
                  this.selectedImageList.push({ 
                    image: `assets/all-images/${foundFolder}/${fileData.fileName}`, 
                    title: fileData.description,
                    iterations: fileData.iterations? fileData.iterations:[],
                    iterationIndex:0 
                   });
               //     console.log(`FILE ${fileData.title? fileData.title: fileData.description}`) ;
              });
             
          }
          this.currentIndex = 0;
          this.currentImage = this.selectedImageList[0];
          
          if (this.currentImage && this.currentImage.iterations !== null && this.currentImage.iterations.length > 0) {
            //this.currentImage.iterations.unshift(this.currentImage.image );
            this.currentImage.iterationIndex = 0;
          
          }
          
      });
    
  
  }
 
  toggleSort(){
    // let tempList = JSON.parse(JSON.stringify(this.selectedImageList)
    let downCount = JSON.parse(JSON.stringify(this.selectedImageList));
    this.selectedImageList = [];
    for (let m of downCount){
      this.selectedImageList.unshift(m);
    }
    this.currentIndex = 0;
          this.currentImage = this.selectedImageList[0];
          if (this.currentImage.iterations !== null && this.currentImage.iterations.length > 0) {
            // this.currentImage.iterations.unshift(this.currentImage.image );
            this.currentImage.iterationIndex = 0;
          }
  }
  prevImage() {
    this.currentIndex-- ;
    if (   this.currentIndex < 0 ) {
      this.currentIndex = this.selectedImageList.length -1;
   
    }

    this.currentImage = this.selectedImageList[this.currentIndex];
    this.currentImage.iterationIndex = 0;
  }
  navigatedIteration() {
    this.currentImage.iterationIndex++;
    if (this.currentImage.iterationIndex > (this.currentImage.iterations.length -1))
      this.currentImage.iterationIndex = 0;
    this.currentImage.inage =  this.currentImage.iterations[this.currentImage.iterationIndex].fullFileName;
  }
  nextImage() {
    this.currentIndex++ ;
    if (this.currentIndex >= this.selectedImageList.length ) {
      this.currentIndex = 0;
    }

    this.currentImage = this.selectedImageList[this.currentIndex];
    this.currentImage.iterationIndex = 0;
  }
  showFullSize(source:string) {
    if (this.currentImage.iterativeText) {
      this.iterativeText = this.currentImage.iterativeText;
    } else {
      this.iterativeText = 'Iterations';
    }
    this.currentImage = source;

    this.currentImage.iterationIndex = 0;
    console.log (JSON.stringify(this.currentImage));
    
  }
}