import { ImageElement } from '../../image-lists/shared/image-detail'

export class PricesList {
 sort: string = 'asc'
 imageRoot = `/assets/gallery-files/images/ritchie-bakes/price-lists`;
 public allImageList:ImageElement[]  =  [
    { 
         folder:'mahadev-family',
         theme:'Mahadev',
         themeSummary:
         ``,
         files: [ 
{
canvassSize:  '',
content:  '',
dateUploaded:  '06-25-2024',
summaryLabel:  `coming soon`,
fullFileName: `${this.imageRoot}cup-cake-pricelist.jpeg`,
description: `<ul><li> coming soon </li></ul>`,
},
{
canvassSize:  '',
content:  '',
dateUploaded:  '06-25-2024',
summaryLabel:  `Coming soon`,
fullFileName: `${this.imageRoot}cookie-pricelist.jpeg`,
description: `<ul><li> Coming soon </li></ul>`,
},{
          canvassSize: '',
          content: '',
          dateUploaded: '06-25-2024',
          summaryLabel: `coming soon`,
          fullFileName: `${this.imageRoot}cream-cake-pricelist-1.jpeg`,
          description: `<ul><li> coming soon </li></ul>`,
          },{
               canvassSize: '',
               content: '',
               dateUploaded: '06-25-2024',
               summaryLabel: `coming soon`,
               fullFileName: `${this.imageRoot}cream-cake-pricelist-2.jpeg`,
               description: `<ul><li> coming soon </li></ul>`,
          },]
    }]
};
