import {  ImageElement } from '../../shared/image-detail'


export class TeaCakes {
            sort: string = 'asc'
    imageRoot=`assets/gallery-files/images/tea-cakes/`;
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
                              summaryLabel:  `Date and Walnut Cake `,
                              fullFileName: `${this.imageRoot}date-and-walnut.jpeg`,
                              description: `<ul><li> Date and Walnut Cake  </li><li>More details coming soon </li></ul>`,

                        }, 
                        {
                              
                              dateUploaded:  '06-06-2024',
                              summaryLabel:  `Eggless Chocolate Walnut Tea cake `,
                              fullFileName: `${this.imageRoot}Eggless Chocolate Walnut Tea cake.jpeg`,
                              description: `<ul><li> Eggless Chocolate Walnut Tea cake  </li><li>More details coming soon </li></ul>`,

                        }, 
                        {
                              
                              dateUploaded:  '06-06-2024',
                              summaryLabel:  `Orange Tea cake `,
                              fullFileName: `${this.imageRoot}Orange Tea cake.jpeg`,
                              description: `<ul><li> Orange Tea cake  </li><li>More details coming soon </li></ul>`,

                        }, 
                        {
                              
                              dateUploaded:  '06-06-2024',
                              summaryLabel:  `Christmas collection - plum cake `,
                              fullFileName: `${this.imageRoot}Plum cake.jpeg`,
                              labelValue: [
                                    { label:'special-list',
                                      value:'special-lists-christmas-collection',
                                      notes:'special-lists'
                                    }
 ,
                               ],
                              description: `<ul><li> Orange Tea cake  </li><li>More details coming soon </li></ul>`,

                        }
                ]
          }
        ]
    }