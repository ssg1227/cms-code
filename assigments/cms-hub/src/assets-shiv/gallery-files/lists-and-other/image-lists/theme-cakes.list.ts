import {  ImageElement } from '@settings-and-models/image-detail'


export class ThemeCakes {
            sort: string = 'asc'
    imageRoot=`assets/gallery-files/images/theme-cakes/`;
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
                        summaryLabel:  `Chocolate Cake Sea world `,
                        fullFileName: `${this.imageRoot}Chocolate sea world cake 2.jpg`,
                        description: `<ul><li>Description and pricing coming soon </li></ul>`,

                  }
                ]
          }
        ]
    }