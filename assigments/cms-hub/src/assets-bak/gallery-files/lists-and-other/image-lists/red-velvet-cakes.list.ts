import {  ImageElement } from '@settings-and-models/image-detail'

export class RedVelvetCakes {
            sort: string = 'asc'
    imageRoot=`assets/gallery-files/images/red-velvet-cakes/`;
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
                              summaryLabel:  `Red Velvet Cake`,
                              fullFileName: `${this.imageRoot}red-velvet-cake-bayko.jpeg`,
                              description: `<ul><li>Details coming soon </li></ul>`,
                              iterations: [
                                    {     fullFileName: `${this.imageRoot}red-velvet-cake-bayko.jpeg`,
                                          description: `<ul><li>Details coming soon </li></ul>`,
                                      },
                                    {fullFileName: `${this.imageRoot}red-velvet-cake-bayko-0.jpeg`,
                                          description: `<ul><li>Details coming soon </li></ul>` },
                                    ]

                        },
                        {
                              
                              dateUploaded:  '06-06-2024',
                              summaryLabel:  `Red Velvet Cake`,
                              fullFileName: `${this.imageRoot}red-velvet-3.jpeg`,
                              description: `<ul><li>Details coming soon </li></ul>`,

                        }

             ]
          },
     ]
}
