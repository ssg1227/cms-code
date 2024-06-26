import { Injectable } from '@angular/core';
import { ImageElement, ContentList } from 'src/assets/gallery-files/shared/image-detail2';
import { PricesList } from 'src/assets/gallery-files/lists-and-other/image-lists/prices.list'
import { CreamCakesChocolateGanache }  from 'src/assets/gallery-files/lists-and-other/image-lists/cream-cakes-chocolate-ganache.list'
// content files 
import { SpecialityCakesChocolate } from 'src/assets/gallery-files/lists-and-other/image-lists/speciality-cakes-chocolate.list';
import { SpecialityCakesNonChocolate } from 'src/assets/gallery-files/lists-and-other/image-lists/speciality-cakes-non-chocolate.list';
import { TeaCakes} from 'src/assets/gallery-files/lists-and-other/image-lists/tea-cakes.list'  ;
import { CupCakes } from 'src/assets/gallery-files/lists-and-other/image-lists/cup-cakes.list';
import { CookiesBrowniesOther } from 'src/assets/gallery-files/lists-and-other/image-lists/cookies-brownies-other.list';
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
    contentList.push( { contentFile: new CookiesBrowniesOther(),contentCategory:'cookies-brownies-other', roles:['any'],latest:true}) ;
    contentList.push( { contentFile: new ContactDetailsFSAI(),contentCategory:'contact-details-fsai', roles:['any'],latest:true}) ;
    contentList.push( { contentFile: new Uncategorized(),contentCategory:'uncategorized', roles:['any'],latest:true}) ;
    contentList.push( { contentFile: new PricesList(),contentCategory:'prices-list', roles:['any'],latest:true}) ;
    contentList.push( { contentFile: new CreamCakesChocolateGanache(), contentCategory:'cream-cakes-chocolate-ganache', roles:['any'],latest:true}) ;
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
