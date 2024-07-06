import {  ImageElement } from '@settings-and-models/image-detail'

export class Uncategorized {
            sort: string = 'asc'
    
            imageRoot=`assets/gallery-files/images/uncategorized/`;
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
                                      summaryLabel:  `shilpa-and-vijay`,
                                      fullFileName: `${this.imageRoot}shilpa-and-vijay.jpeg`,
                                      description: `<ul><li>shilpa-and-vijay </li></ul>`,
        
                                },{
                              
                                    dateUploaded:  '06-06-2024',
                                    summaryLabel:  `Vrudhi`,
                                    fullFileName: `${this.imageRoot}Vrudhi.jpeg`,
                                    description: `<ul><li>Vrudhi</li></ul>`,
                                   
      
                              },{
                              
                                dateUploaded:  '06-06-2024',
                                summaryLabel:  `welcome-seema`,
                                fullFileName: `${this.imageRoot}welcome-seema.jpeg`,
                                description: `<ul><li>welcome-seema</li></ul>`,
                               
  
                          }// Gingerbread cookies
                     ]
                  },
             ]
}
