import { Injectable } from '@angular/core';
interface ImageCollection {
  
  folder:string;
  description:string;
  fileNames:string[];
}
@Injectable()
export class ImageDataService {
  
  constructor() { }
  getImageList(folder:string):ImageCollection {
    let x:ImageCollection = {
      folder: '',
      description:'',
      fileNames: []
    }
    let y = this.allImages.filter( x => x.folder === folder);
    return (y && y.length > 0 )? y[0]:  x;
  }
  allImages:ImageCollection[] = [
    {
      folder: 'starters',
      description:'',
      fileNames: [
        'AumGaShivParKashiVishwCTLightNov172020Final.jpeg',
        'Aumkar-Ganesh-sept-2020-final.jpeg',
        'ShreeSiddhivinayakQ42020.jpeg',
        'intro-Ganesh.jpg',
        'unsignedShivVeena12272020.jpeg'
      ],
    }
  ]
}
