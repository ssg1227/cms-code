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

    }
    return specialListFound ;
  }
}
