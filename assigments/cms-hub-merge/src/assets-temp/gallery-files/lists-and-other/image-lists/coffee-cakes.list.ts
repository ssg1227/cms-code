import {  ImageElement } from '@settings-and-models/image-detail'

export class CoffeeCakes {
            sort: string = 'asc'
    imageRoot=`assets/gallery-files/images/coffee-cakes/`;
    public allImageList:ImageElement[]  =  [
          { 
                folder:'places-scenes-objects',
                theme:
                'Scenes, Objects, Structures..',
                themeSummary:`</strong>Scenes, Objects, Structures, (some may be items containing mix modes of transport or something like an air dogfight)<br/>
                Mumbai gets her due place and a dedicated theme; all Mumbai related sketches will be found in 'Mumbai Meri Jaan'`,
                files: [ {
                              
                              dateUploaded:  '06-06-2024',
                              summaryLabel:  `Coffee cake with coffee buttercream`,
                              fullFileName: `${this.imageRoot}Coffee cake with coffee buttercream.jpeg`,
                              description: `<ul><li>Details coming soon </li></ul>`,

                        },{
                              
                              dateUploaded:  '06-06-2024',
                              summaryLabel:  ``,
                              fullFileName: `${this.imageRoot}denise-coffee.jpeg`,
                              description: `<ul><li>Details coming soon </li></ul>`,

                        }, {
                                      
                              dateUploaded:  '06-06-2024',
                              summaryLabel:  `Christmas collection- Coffee cake for christmas`,
                              labelValue: [
                                   { label:'special-list',
                                     value:'special-lists-christmas-collection',
                                     notes:'special-lists'
                                   }
,
                              ],
                              fullFileName: `${this.imageRoot}Coffee cake for christmas.jpeg`,
                              description: `<ul><li>Description and pricing coming soon </li></ul>`,

                        }

             ]
          },
     ]
}
