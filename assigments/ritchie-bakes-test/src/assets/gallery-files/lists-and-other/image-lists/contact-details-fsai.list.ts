import {  ImageElement } from '@settings-and-models/image-detail'
// /Users/shantanu/Documents/GitHub/ssg1227-GuruDatta@9/cms-code/assigments/ritchie-bakes-test/src/assets/gallery-files/shared/image-detail.ts
export class ContactDetailsFSAI {
            sort: string = 'asc'
    
            imageRoot=`assets/gallery-files/images/contact-details-fsai/`;
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
                                      summaryLabel:  `Contact`,
                                      fullFileName: `${this.imageRoot}contact-card.jpeg`,
                                      description: `<ul><li>Contact </li></ul>`,
        
                                },{
                              
                                    dateUploaded:  '06-06-2024',
                                    summaryLabel:  `FSSAI Certification`,
                                    fullFileName: `${this.imageRoot}fsSai-cert-FIRSTof4.jpeg`,
                                    description: `<ul><li>FSSAI Certification</li></ul>`,
                                    iterations: [
                                          {     fullFileName: `${this.imageRoot}fsSai-cert-FIRSTof4.jpeg`,
                                                description: `<ul><li>FSSAI Certification Page1 </li></ul>`,
                                            },
                                          {fullFileName: `${this.imageRoot}fsSai-cert-3of4.jpeg`,
                                                description: `<ul><li>FSSAI Certification Page2 </li></ul>` },
                                                {fullFileName: `${this.imageRoot}fsSai-cert-3of4.jpeg`,
                                                      description: `<ul><li>FSSAI Certification Page3 </li></ul>` }
                                          ]
      
                              }// Gingerbread cookies
                     ]
                  },
             ]
}
