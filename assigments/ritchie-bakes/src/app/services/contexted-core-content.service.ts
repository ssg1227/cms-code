import { Injectable } from '@angular/core';
import { ImageElement, ContentList } from 'src/assets/gallery-files/lists-and-other/image-lists/shared/image-detail' ;

// content files 
import { SpecialityCakesChocolate } from 'src/assets/gallery-files/lists-and-other/image-lists/speciality-cakes-chocolate.list';
import { SpecialityCakesNonChocolate } from 'src/assets/gallery-files/lists-and-other/image-lists/speciality-cakes-non-chocolate.list';
import { TeaCakes} from 'src/assets/gallery-files/lists-and-other/image-lists/tea-cakes.list'  ;
import { CupCakes } from 'src/assets/gallery-files/lists-and-other/image-lists/cup-cakes.list';
import { CookiesBrowniesOther } from 'src/assets/gallery-files/lists-and-other/image-lists/cookies-brownies-other.list';
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
  }
  
}
