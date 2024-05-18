import { ImageElement } from '../../image-lists/shared/image-detail'

export class MahadevImageList {
 
  sort: string = 'asc'
  imageRoot = `assets/gallery-files/images/religion/mahadev/`;
 
 public allImageList:ImageElement[]  =  [
    { 
         folder:'mahadev',
         theme:'Mahadev',
         themeSummary:
         ``,
         files: [{
          canvassSize:  'A4',
          content:  'color-pencil black-white',
          dateUploaded:  '05-16-2024',
          fullFileName: `${this.imageRoot}ShankarPunyatithi2024.jpeg`,
          evolution:  `<b>Merge of two previous sketches with resizing of one</B>`,
          evolutionSequence:  4,
          evolutionDate:  '05-16-2024',
           description: `<ul><li>YogYogeshwar Shankar Maharaj Samadhi Anniversary (Lunar Calendar)</li><li>May 15 2024</li></ul>`,
          
         },
          {
            canvassSize:  'A4',
            content:  'black-white',
            dateUploaded:  '01-11-2024',
            fullFileName: `${this.imageRoot}Mahadev-Tandav-01092024-2.jpeg`
            ,
            description: `<ul>
            <li> And older, unfinished sketch sketch. completed Jan 9 2024  </li>
            <li> The 'tithi' is Krishnapaksha Trayoddashi</li>
            </ul>
            `,
            iterations:[
              {
                fullFileName: `${this.imageRoot}Mahadev-Tandav-01092024-2.jpeg`, 
                description:`<ul>
                <li> And older, unfinished sketch sketch. completed Jan 9 2024  </li>
                <li> The 'tithi' is Krishnapaksha Trayoddashi</li>
                <Li>'freeze' version with all the rays and smoke around the Lord</li?
                </ul>
                `
            },{     fullFileName: `${this.imageRoot}Mahadev-Tandav-01092024-1.jpeg`, 
            description:`<ul>
            <li> And older, unfinished sketch sketch. completed Jan 9 2024  </li>
            <li> The 'tithi' is Krishnapaksha Trayoddashi</li>
            <Li>Initial version .. The camera angle caused a shine in the Lord's eyes which go down 
            very well with His white anger</li>
            </ul>`
       
            }]
          },
          {
canvassSize:  'A4',
content:  'black-white',
dateUploaded:  '07-25-2023',
fullFileName: `${this.imageRoot}Mahadev-July24-2023.jpeg`
,
description: `<ul><li> Mahadev sketch after a long time July 24 2023 </li>
</ul>
`,
},
          {  
            // /Users/shantanu/Documents/GitHub/js-frameworks/Angular_lte_4/shan-cms-template/src/${this.imageRoot}MahadevJan102022.jpeg
            // /Users/shantanu/Documents/GitHub/js-frameworks/Angular_lte_4/shan-cms-template/src/${this.imageRoot}Shivji2022ShravanMonday_1.jpeg
            fullFileName: `${this.imageRoot}Shivji2022ShravanMonday_final.png`, 
            canvassSize:  'A4',
              content:  'black-white',
              description: 
               `<ul>
                 <li>Mahadev 'Shravani Somwar' sketch</li>
                  <li>Aug 1s 2022</li>
                 </ul>`,
           dateUploaded: '08-17-2022',
           iterations:[
            {
              fullFileName: `${this.imageRoot}Shivji2022ShravanMonday_final.png`, 
              description: 
              `<ul>
              <li>Mahadev 'Shravani Somwar' sketch</li>
               <li>Aug 1s 2022</li>
              </ul>`,
            },{
              fullFileName: `${this.imageRoot}Shivji2022ShravanMonday_1.jpeg`, 
              description: 
              `<ul>
              <li>Mahadev 'Shravani Somwar' sketch</li>
               <li>Aug 1s 2022</li>
              </ul>`,
            }]
          },{
            generic: 'true',
                    genericCategory:30, // 1 Ganesh, 2 Goddesses, 3 shiva (+ family), 4 Narayan + family + Hanuman, 5 Gurus
                    genericDescription: 
                    `<ul>
                        <li> Lord Shiva, Shankar is one of the trinity along with Brahma and Vishnu. </li>
                        <li> He has benevolent as well as destructive aspects </li>
                        <li> Shown here in dancing pose </li>
                          
                        </ul>`,
            canvassSize:  'A4',
content:  'black-white',
fullFileName: `${this.imageRoot}Mahadev-Shrawani-Somar-08-08-22-3.jpeg`, 
            description: 
               `<ul>
                 <li>Mahadev 'Shravani Somwar' sketch.. Dancing Shiva</li>
                  <li>Aug 08 2022</li>
                 </ul>`,
           dateUploaded: '02-01-2023',
          },{
            canvassSize:  'A4',
content:  'black-white',
fullFileName: `${this.imageRoot}Mahadev-Shrawani-Somar-amarnath-08-22-22-1.jpeg`, 
            description: 
               `<ul>
                 <li>Mahadev 'Shravani Somwar' sketch.. Amarnath ice shivling Shiva</li>
                  <li>Aug 22 2022</li>
                 </ul>`,
           dateUploaded: '02-01-2023',
          },
           {
            canvassSize:  'A4',
content:  'black-white',
fullFileName: `${this.imageRoot}KedarnathTemple03012022.jpeg`,
            description: 
            `<ul>
              <li>kedarnath Temple, Uttarakhand, North India </li>
              <li>One of the 12 Jyotirlinga's </li>
              <li>Started Q3 2021, finalized March 1 2022</li>
              </ul>`,
        dateUploaded: '03-21-2022',
           },  // /Users/shantanu/Documents/GitHub/js-frameworks/Angular_lte_4/shan-cms-template/src/${this.imageRoot}Markandeshwar-0923-2022.jpeg
           {  
             // /Users/shantanu/Documents/GitHub/js-frameworks/Angular_lte_4/shan-cms-template/src/${this.imageRoot}MahadevJan102022.jpeg
              canvassSize:  'A4',
              content:  'black-white',
              fullFileName: `${this.imageRoot}Markandeshwar-0923-2022.jpeg`,
             description: 
             `<ul>
               <li>Markandeshwar Temple Worli Mumbai </li>
               <li>Sept 23 2022</li>
               </ul>`,
         dateUploaded: '02-16-2023',
           },
          {  
            canvassSize:  'A4',
              content:  'black-white',
              fullFileName: `${this.imageRoot}MahadevJan102022.jpeg`, 
            description: 
               `<ul>
                 <li>Hadn't done a sketch of Lord Shiva for a looong time</li>
                 <li>Completion of a half finished sketch </li>
                 <li>Q4 2021 --> Jan 10 2022</li>
                 </ul>`,
           dateUploaded: '01-10-2022',
           iterations:[
            {
              fullFileName: `${this.imageRoot}MahadevJan102022.jpeg`, 
              description: 
                 `<ul>
                   <li>Hadn't done a sketch of Lord Shiva for a looong time</li>
                   <li>Completion of a half finished sketch </li>
                   <li>Q4 2021 --> Jan 10 2022</li>
                 </ul>`,
            },{
              fullFileName: `${this.imageRoot}MahadevJan102022_1.jpeg`, 
              description: 
                 `<ul>
                   <li>Before background and 'effects'</li>
                   </ul>`,
            }]
          },
             {  
              generic: 'true',
              genericCategory:30, // 1 Ganesh, 2 Goddesses, 3 shiva (+ family), 4 Narayan + family + Hanuman, 5 Gurus
              genericDescription: 
              `<ul>
                  <li> Lord Shiva, Shankar is one of the trinity along with Brahma and Vishnu. </li>
                  <li> Shown here playing an instrument, the Veena </li>
                    
                  </ul>`,
              canvassSize:  'A4',
              content:  'black-white',
              fullFileName: `${this.imageRoot}unsignedShivVeena12272020.jpeg`, 
                 description: 
                    `<ul>
                      <li>Watching a Lord Shiv song an YouTube, I chanced upon the original sketch that inspired me to draw this</li>
                      <li>Actually, if I am guessing right this is based on the famous tele-serial 'Devon Ke Dev Mahadev' and 'Shivji' here is Mohit Raina</li>
                      <li>So face accuracy, kindly condone under 'artist's license'</li>
                      <li>One that I took a long time over - probably started Dec 1st weel 2020, Shared publicly on Dec 27 2020</li>
                    </ul>`,

                evolution: `<b>trying to get shading effect. Also one of, if not, the first 'pose and fingers splayed', full body sketch, Dec 27 2020</b>`,
                evolutionSequence: 1, evolutionDate: `12-27-2020`,
                rating: 1,
                iterations:[
                  {
                    fullFileName: `${this.imageRoot}unsignedShivVeena12272020.jpeg`, 
                 description: 
                    `<ul>
                      <li>Watching a Lord Shiv song an YouTube, I chanced upon the original sketch that inspired me to draw this</li>
                      <li>Actually, if I am guessing right this is based on the famous tele-serial 'Devon Ke Dev Mahadev' and 'Shivji' here is Mohit Raina</li>
                      <li>So face accuracy, kindly condone under 'artist's license'</li>
                      <li>One that I took a long time over - probably started Dec 1st weel 2020, Shared publicly on Dec 27 2020</li>
                    </ul>`,
                  },
                  {
                    fullFileName: `${this.imageRoot}unsignedShivVeena12272020-2.jpg`, 
                 description: 
                    `<ul>
                      <li>Watching a Lord Shiv song an YouTube, I chanced upon the original sketch that inspired me to draw this</li>
                      <li>Actually, if I am guessing right this is based on the famous tele-serial 'Devon Ke Dev Mahadev' and 'Shivji' here is Mohit Raina</li>
                      <li>So face accuracy, kindly condone under 'artist's license'</li>
                      <li>One that I took a long time over - probably started Dec 1st weel 2020, Shared publicly on Dec 27 2020</li>
                    </ul>`,
                  },
                  {
                    fullFileName: `${this.imageRoot}unsignedShivVeena12272020-1.jpg`, 
                 description: 
                    `<ul>
                      <li>Watching a Lord Shiv song an YouTube, I chanced upon the original sketch that inspired me to draw this</li>
                      <li>Actually, if I am guessing right this is based on the famous tele-serial 'Devon Ke Dev Mahadev' and 'Shivji' here is Mohit Raina</li>
                      <li>So face accuracy, kindly condone under 'artist's license'</li>
                      <li>One that I took a long time over - probably started Dec 1st weel 2020, Shared publicly on Dec 27 2020</li>
                    </ul>`,
                  }
                ]
         },
         
         {  
          canvassSize:  'A4',
          content:  'black-white',
          fullFileName: `${this.imageRoot}MahadevMeditateFeb22021.jpeg`, 
            description: 
               `<ul>
                 <li>Feb 2 2021</li>
               </ul>`
    },  {  
      canvassSize:  'A4',
              content:  'color-pencil',
              fullFileName: `${this.imageRoot}Mahadev-color-Q1.jpg`, 
      description: 
         `<ul>
           <li>Q1 2021 - color </li>
         </ul>`
}, {  
  canvassSize:  'A4',
  content:  'black-white',
  fullFileName: `assets/gallery-files/images/religion/shirdi-sai/shirdi-sai-pre-q3-2021/SaiTemplateKhanderaya-May2021-Sai.jpeg`, 
  // /Users/Shantanu/Documents/GitHub/cms-code/cms-picture-gallery/src/assets/gallery-files/images/religion/shirdi-sai/shirdi-sai-pre-q3-2021
            description: `
                <ul>
                <li>Khanderaya sketched based off sketch based off one of the three Sai templates I created</li>
                <li>Probably April 29 2021</li></ul>
               ` }, {  
                canvassSize:  'A4',
              content:  'black-white',
              fullFileName: `${this.imageRoot}GeneralShivlingRamNavmi2021.jpg`, 
                description: 
                   `<ul>
                     <li>Searching a theme for Ramnavmi 2021, I had contemplated the one of Shree Ram doing abhishek</li>
                     <li>This was a practice one .. </li>
                   </ul>`
        },{  
          // /Users/shantanu/Documents/GitHub/js-frameworks/Angular_lte_4/shan-cms-template/src/${this.imageRoot}MahadevJan102022.jpeg
          // /Users/shantanu/Documents/GitHub/js-frameworks/Angular_lte_4/shan-cms-template/src/${this.imageRoot}Shivji2022ShravanMonday_1.jpeg
          fullFileName: `${this.imageRoot}Kailash-final-july22-2022.jpeg`, 
          description: 
             `<ul>
               <li>Attempt to sketch Mt. Kailash - abode of Mahadev.. </li>
               <li>Still before getting into using 11x17 sheets(this is on A4) the sketch was targetted for a large photo print (see next sketch)</li>
               <li>Photo edited for better photo print</li>
               <li>July 2022</li>
               </ul>`,
         dateUploaded: '02-01-2023',
         rating: 1,
         evolution: 'A first in landscape and a religious theme at that',
         evolutionSequence: 2, evolutionDate: `07-22-2022`,
           
         canvassSize:  'A4',
         content:  'color-pencil',
         iterations:[
          {
            fullFileName: `${this.imageRoot}Kailash-final-july22-2022.jpeg`, 
            description: 
            `<ul>
              <li>Attempt to sketch Mt. Kailash - abode of Mahadev.. </li>
              <li>Still before getting into using 11x17 sheets(this is on A4) the sketch was targetted for a large photo print (see next sketch)</li>
              <li>Photo edited for better photo print</li>
              <li>July 2022</li>
              </ul>`,
          },{
            fullFileName: `${this.imageRoot}Kailash-final-1-07222022.jpeg`, 
            description:  
            `<ul>
              <li>Attempt to sketch Mt. Kailash - abode of Mahadev.. </li>
              <li>Still before getting into using 11x17 sheets(this is on A4) the sketch was targetted for a large photo print (see next sketch)</li>
              <li>Photo edited for better photo print - earlier version</li>
              <li>July 2022</li>
              </ul>`,
          }]
        }, {  
          canvassSize:  'A4',
          content:  'other',
fullFileName: `${this.imageRoot}Kailash-photo-print-30x20-07302022.jpeg`, 
          description: 
             `<ul>
               <li>Mt Kailash picture of a photo (see previous original sketch)</li>
               <li>20x30 photo printed at Walmart and framed hoisted on stair landing as on Feb 2023</li>
             </ul>`,
             dateUploaded: '02-01-2023',
          }, {  
            canvassSize:  'A4',
              content:  'black-white',
              fullFileName: `${this.imageRoot}Shivling-aug2-2022.jpeg`, 
            description: 
               `<ul>
                 <li>Shivling August 2 2022</li>
               </ul>`,
               dateUploaded: '02-01-2023',
            }
         ]
        }
        ]
    }
