import {  ImageElement } from '@settings-and-models/image-detail'

export class BlueberryCakes {
            sort: string = 'asc'
    imageRoot=`assets/gallery-files/images/blueberry-cakes/`;
    public allImageList:ImageElement[]  =  [
          { 
                folder:'places-scenes-objects',
                theme:
                'Scenes, Objects, Structures..',
                themeSummary:`</strong>Scenes, Objects, Structures, (some may be items containing mix modes of transport or something like an air dogfight)<br/>
                Mumbai gets her due place and a dedicated theme; all Mumbai related sketches will be found in 'Mumbai Meri Jaan'`,
                files: [ 
                       {
                              
                              dateUploaded:  '06-06-2024',
                              summaryLabel:  `Blueberry cake with whipped cream frosting `,
                              fullFileName: `${this.imageRoot}blueberry-crush-cake-whipped-cream-frst.jpeg`,
                              description: `<ul><li> Blueberry cake with whipped cream frosting.</li><li>More details coming soon </li></ul>`,

                        } 
                        , {
                                      
                              dateUploaded:  '06-06-2024',
                              summaryLabel:  `Blueberry cake with spring theme`
                              ,
                              fullFileName: `${this.imageRoot}Blueberry cake with spring theme.jpeg`,
                              description: `<ul><li>Description and pricing coming soon </li></ul>`,
 
                           }  , {
                                      
                              dateUploaded:  '06-06-2024',
                              summaryLabel:  `Blueberry cake Birthday `
                              ,
                              fullFileName: `${this.imageRoot}birthday-cake-2-tbd.jpeg`,
                              description: `<ul><li>Description and pricing coming soon </li></ul>`,

                        }  , {
                                      
                                    dateUploaded:  '06-06-2024',
                                    summaryLabel:  `Blueberry cake 50th Birthday `
                                    ,
                                    fullFileName: `${this.imageRoot}Blueberry-50-savio.jpeg`,
                                    description: `<ul><li>Description and pricing coming soon </li></ul>`,
      
                              }

             ]
          },
     ]
}
