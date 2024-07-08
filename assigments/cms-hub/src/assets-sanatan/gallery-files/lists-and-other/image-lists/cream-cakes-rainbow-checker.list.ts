import {  ImageElement } from '@settings-and-models/image-detail'

export class CreamCakesRainbowChecker {
            sort: string = 'asc'
    imageRoot=`assets/gallery-files/images/cream-cakes-rainbow-checker/`;
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
                        summaryLabel:  `Rainbow Checker Cake 1/2 kg `,
                        fullFileName: `${this.imageRoot}rainbow-checker-cake-half-kg.jpeg`,
                        description: `<ul><li> Rainbow Checker Cake Half Kg </li><li>More details coming soon </li></ul>`,

                  },{
                        
                        
                        dateUploaded:  '06-06-2024',
                        summaryLabel:  `Rainbow Checker Cake 1 kg  showing slice`,
                        fullFileName: `${this.imageRoot}rainbow-checker-cake-1-kg-with-slice.jpeg`,
                        description: `<ul><li> Rainbow Checker Cake 1 Kg </li><li>More details coming soon </li></ul>`,
                        iterations: [
                                {fullFileName: `${this.imageRoot}rainbow-checker-cake-1-kg-with-slice.jpeg`
                              , description: `<ul><li> Rainbow Checker Cake 1 Kg full cake with slice</li><li>More details coming soon </li></ul>
                              ` },
                              {fullFileName: `${this.imageRoot}rainbow-checker-cake-1-kg.jpeg`
                              , description: `<ul><li> Rainbow Checker Cake 1 Kg full cake</li><li>More details coming soon </li></ul>
                              ` },
                              {fullFileName: `${this.imageRoot}rainbow-checker-cake-1-kg-slice.jpeg`
                              , description: `<ul><li> Rainbow Checker Cake 1 Kg slice</li><li>More details coming soon </li></ul>
                              ` },
                              ]

                  }
              
             ]
            },
       ]
  }
  