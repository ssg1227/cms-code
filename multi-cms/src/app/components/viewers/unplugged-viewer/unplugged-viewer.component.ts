import { CoreContentElement } from '../../../../assets/data-and-config/data/image.list'; // data/image.list';
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
 Once tested will rename the instances of 'listFunnelService' appropriately
*/
import { CoreContentService } from 'src/app/services/core-content.service';
@Component({
  selector: 'app-unplugged-viewer',
  templateUrl: './unplugged-viewer.component.html',
  styleUrls: ['./unplugged-viewer.component.css']
})
export class UnpluggedViewerComponent implements OnInit {
  iterativeText = 'ITERATIONS';
  allImageList:CoreContentElement[] = [];
  sortThumbnails:string = '';
  genImageList:any = null ;
  selectedImageList:any[] = [ ];
  imageGroups:any[] = [];
  currentImage =  this.selectedImageList[0]; // `assets/all-images-demo/starters/su-30-1.jpeg`;
  iterationIndex = 0;
  themeHeader:string ='';
  themeSummary:string = '';
  currentIndex:number = 0 ;
  _actualSize:boolean = false;
  _iterations:boolean = false ;
  newLook=true ;
  constructor(private activatedRoute:ActivatedRoute, private listFunnelService: CoreContentService) { }
  /// see Import private listFunnelService: ListsFunnelService) { }
  get ActualSize():boolean {
    return this._actualSize;
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
  
  groupImages() {

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
        const dataReturned = this.listFunnelService.loadSelectedContent(strParam);
        
        this.genImageList = dataReturned.gen ; 
        this.allImageList = this.genImageList.allImageList;
       // foundList = this.allImageList.filter(x => x.folder === param.get('theme'));// themed.params.theme.toString());
        foundList = strParam === 'latest-uploads' || 'showpiece' ? this.allImageList :
        this.allImageList.filter(x => x.folder === param.get('theme'));// themed.params.theme.toString());
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
              .forEach( (fileData:any) => {
                let groupImages:any[] = [] ;
                let stats = '';
                stats = this.techStats(fileData) ;
                console.log(`STATS for single file ${stats} ${fileData.fullFileName}`);
                  if(stats.indexOf('Canvass') >= 0) {
                    fileData.description = `${fileData.description}<br/>(<em> ${stats}}</em>)`;
                  }    
                  
                if(fileData.iterations !== undefined && fileData.iterations.length > 0) {
                  fileData.iterations.forEach((element:any, index:number) => {
                    let descrAndStats = index === 0 ?
                    stats.indexOf('Canvass') >= 0? element.description: `${element.description}<br/>(<em> ${stats}}</em>)` :  element.description;
                    groupImages.push(
                        { image: element.fullFileName, 
              //            description:   element.description  });
                          description:  index === 0 ? fileData.description:  element.description});
                  });
                } else {
                  fileData.fullFileName? 
                    groupImages.push({ image: fileData.fullFileName, 
                      description: fileData.description}): 
                    groupImages.push({ image: `assets/all-images/${foundFolder}/${fileData.fileName}`, 
               //           description: fileData.description });
               //  
                          description: stats === ''? fileData.description: `${fileData.description}<br/>(<em> ${stats}}</em>)`});
                }
                this.imageGroups.push({ imageList:groupImages} );
                fileData.fullFileName? 
                  this.selectedImageList.push({ 
                    iterativeText: fileData.iterativeText?`${fileData.iterativeText}`:'',
                    image: `${fileData.fullFileName}`, 
                    title: fileData.description,
                    iterations: fileData.iterations? fileData.iterations:[],
                    iterationIndex:0 }):
                  this.selectedImageList.push({ 
                    image: `assets/all-images/${foundFolder}/${fileData.fileName}`, 
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
          
      });
    
  
  }
  public techStats(currentImage:any) {
    return this.listFunnelService.techStatsSpan(currentImage);
  }
  /*
#### All data content imported shifted to list-funnel service .. 
// scroll down for commented imports and old version of ng-init
import { DeviImageList } from '../data/devi.image.list';
import { MahadevImageList } from '../data/mahadev.image.list';
import { KanhaRukhminiList} from '../data/kanha-rukhmini.list';
import { PeopleImageList } from '../data/people.image.list';
import { PlacesScenesObjectsImageList} from '../data/places-scenes-objects.image.list';
import { ThemesMisc } from '../data/themes-misc.list';
import { LatestUploadsImageList } from '../data/latest-uploads.list';
import { PlanesImageList } from '../data/planes.image.list';
import { GaneshImageList } from '../data/ganesh.image.list'; GaneshPreQ42021ImageList
import { SwamiSamarthaImageList } from '../data/swami-samartha.image.list'
import { DattavatarImageList } from '../data/dattavatar.image.list';
import { ShirdiSaiQ1Q32021ImageList} from '../data/shirdi-sai-q2-2020.list';
import { TrainImageList } from '../data/trains.list'
import { GeneralImageList } from '../data/general.image.list';
import { allImageList, CoreContentElement } from '../data/image.list';
  ngOnInitPreFunnel() {
    let themed:any = null ;
    let foundList:CoreContentElement[] = [] ;
    this.activatedRoute.paramMap.subscribe(param => 
      { 
        themed = param; console.log(param.get('theme'));
        let strParam = (param.get('theme'));
        this.genImageList =  null;
        console.log(themed);
        this.genImageList = new LatestUploadsImageList();
                                 this.allImageList = this.genImageList.allImageList ;
        switch(strParam) {
          case 'latest-uploads': this.genImageList = new LatestUploadsImageList();
                                 this.allImageList = this.genImageList.allImageList ;
                                 break;
          case 'changers-b4-2022': this.genImageList = new GeneralImageList();
                             this.allImageList = this.genImageList.allImageList ;
                             break;
          case 'shree-ganesh': this.genImageList = new GaneshImageList();
                             this.allImageList = this.genImageList.allImageList ;
                             break;
          case 'devi': this.genImageList = new DeviImageList();
          this.allImageList = this.genImageList.allImageList ;
          break;
          case 'mahadev': this.genImageList = new MahadevImageList();
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
          case 'planes':  this.genImageList = new PlanesImageList();  
          this.allImageList = this.genImageList.allImageList ;
          break;        
          case 'trains': this.genImageList = new TrainImageList();
                             this.allImageList = this.genImageList.allImageList ;
                             break;
          case 'shirdi-sai-q1-q2-2021': this.genImageList = new ShirdiSaiQ1Q32021ImageList();
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
          default: this.allImageList = allImageList ; break;
        }
        foundList = this.allImageList.filter(x => x.folder === param.get('theme'));// themed.params.theme.toString());
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
              .forEach( (fileData:any) => {
                let groupImages:any[] = [] ;
                if(fileData.iterations !== undefined && fileData.iterations.length > 0) {
                  fileData.iterations.forEach((element:any) => {
                    groupImages.push({ image: element.fullFileName, description: element.description});
                  });
                } else {
                  fileData.fullFileName? 
                    groupImages.push({ image: fileData.fullFileName, 
                      description: fileData.description}): 
                    groupImages.push({ image: `assets/all-images/${foundFolder}/${fileData.fileName}`, 
                          description: fileData.description});
                }
                this.imageGroups.push({ imageList:groupImages} );
                fileData.fullFileName? 
                  this.selectedImageList.push({ 
                    iterativeText: fileData.iterativeText?`${fileData.iterativeText}`:'',
                    image: `${fileData.fullFileName}`, 
                    title: fileData.description,
                    iterations: fileData.iterations? fileData.iterations:[],
                    iterationIndex:0 }):
                  this.selectedImageList.push({ 
                    image: `assets/all-images/${foundFolder}/${fileData.fileName}`, 
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
          
      });
    
  
  }*/
}
