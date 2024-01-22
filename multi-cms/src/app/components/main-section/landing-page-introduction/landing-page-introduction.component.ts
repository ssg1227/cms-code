import { introContentList } from '../../../../assets/data-and-config/menus-and-other-contexts/summary-page-content-list';
import { Component, OnInit, ɵɵNgOnChangesFeature } from '@angular/core';
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
// import { SideNavBarComponent } from  'compo / './components/side-nav-bar/side-nav-bar.component';

@Component({
  selector: 'landing-page-introduction',
  templateUrl: './landing-page-introduction.component.html',
  styleUrls: ['./landing-page-introduction.component.css']
})
export class LandingPageIntroduction implements OnInit {
  context:number =  0;
  introContent:string = '';
  // See import changes above constructor(private listFunnelService: ListsFunnelService) {
    constructor(private listFunnelService: CoreContentService) {
   }
  /* TODO unused 01032024
  get showRegister() : boolean {
    return l ocalStorage.getItem('userRegister') === null ; 
  }
  */
  ngOnInit() {
    let cachedContext:any = '0';
    if (localStorage.getItem('context') !== null && localStorage.getItem('context') !== cachedContext) {
      cachedContext = localStorage.getItem('context') ;
      this.context = Number(cachedContext);
    }
    /*  
      The logic below should be now based on the user being logged in, since with the roles being added, what user is logged in drives 
      what lists and content are loaded => stats on number os sketches and  categories are changed....
      Moved to the 'isLoggedIn' for now - not the best of practises keeping it in the get but ok for now
    let uploadStats  = `current statistics as of ${new Date()}`;
    
    const summaryStats = this.listFunnelService.getStats();
    // Date = 
    const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const getDate = `${month_names[new Date().getMonth()]} ${new Date().getFullYear()}`
    uploadStats = `${uploadStats}<br/><strong>'non compiled' themes:</strong> ${summaryStats.subjects}, <strong>total counts</strong>${summaryStats.totalCounts}`;
    this.introContent = `${introContentList[this.context]}<p  style='{color:red}'> - Shantanu, ${getDate}</p> </em>${uploadStats}`; // ${JSON.stringify(this.listFunnelService.getStats())}`   ;
    */
    // window.setInterval(() => { this.context++ ; if (this.context > 1) this.context = 0 ; this.introContent = introContentList[this.context];}, 1000);
  }
  ngOnChanges() {
    this.introContent = `${this.context} hsalidfewojfewjrl<br/>${introContentList[this.context]}<br/>${JSON.stringify(this.listFunnelService.getStats())}` ;
     
  }
  get isLoggedIn():boolean {
    // 
    if(localStorage.getItem('userId') !== null){
      let uploadStats  = `current statistics as of ${new Date()}`;
      // stats are based on login... 
      const summaryStats = this.listFunnelService.getStats();
      // Date = 
      const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const getDate = `${month_names[new Date().getMonth()]} ${new Date().getFullYear()}`
    //  uploadStats = `${uploadStats}<br/><strong>'non compiled' themes:</strong> ${summaryStats.subjects}, <strong>total counts</strong>${summaryStats.totalCounts}`;
      this.introContent = `${introContentList[0]} <p>- Shantanu, ${getDate}</p>${introContentList[1]} </em>`;// ${uploadStats}`; // ${JSON.stringify(this.listFunnelService.getStats())}`   ;
    }
    return localStorage.getItem('userId') !== null ;
  }
}
