
import { ImageElement } from '../../shared/image-detail'
enum PicsIndex  {
    aumkarGaneshSept2020Final,
    AumGaShivParKashiVishwCTLightNov172020Final,
    unsignedShivVeena12272020,
    ShreeSiddhivinayakQ42020,
    DeviMaaMay13182021,
    MixGenPlaneSept2020,
};
export class SwamiSamarthaImageList { // SwamiSamarthaImageList
 
   
    sort: string = 'asc'
 imageRoot=`assets/images/gallery-images/religion/swami-samartha/`;
    public allImageList:ImageElement[]  =  [
       { 
            folder:'swami-samartha',
            theme:'SHree Swami Samartha',
            themeSummary:
            `Swami Samartha the 4th Avatar of Shree Dattatreya (sequence include Lord Datta himself).List of Sketches before Q2 2023 `,
            files: [
                {

                    // /Users/shantanu/Documents/GitHub/js-frameworks/Angular_lte_4/shan-cms-template/src/assets/all-images/religion/shree-ganesh-gte-q1-2023/Ganesh-1-March1723.jpeg
                   fullFileName: `${this.imageRoot}SwamiPunyatithi-04-18-20-2023.jpeg`,
                   description: `Swami Samartha on His Pragat Din March 23 2023 <br/>
                                final version - photo edited
                                <p>Using the concept of surrounding the sketch with flowers, Swami's favorite are Chafa or Champa/p>
                                 <p> probably do others e.g. use dolphins around a sailing ship sketch`,
                   dateUploaded: '04-24-2023',
                   canvassSize: 'A4', content:'color-pencil',
                   rating: 1,},         
         {

            // /Users/shantanu/Documents/GitHub/js-frameworks/Angular_lte_4/shan-cms-template/src/assets/all-images/religion/shree-ganesh-gte-q1-2023/Ganesh-1-March1723.jpeg
           fullFileName: `${this.imageRoot}SwamiPragatDin03222023-final.jpeg`,
           description: `Swami Samartha on His Pragat Din March 23 2023 <br/>
                        final version - photo edited
                        <p>Using the concept of surrounding the sketch with flowers, Swami's favorite are Chafa or Champa/p>
                         <p> probably do others e.g. use dolphins around a sailing ship sketch`,
           dateUploaded: '03-23-2023',
           canvassSize: 'A4', content:'color-pencil',
           rating: 1,
           /*iterations:[
              { 
                 fullFileName: `assets/all-images/religion/shree-ganesh-gte-q1-2023/Ganesh-final-GudiPadwa-March22-2023.jpeg`,
                 description: `Ganapati - Gudi Padwa 02/22/2023. <br/>
                        final version - photo edited
                        <p>A first of sorts - I have begun drawing flowers and chanced upon a theme of surrounding the main sketch with these</p>
                         <p> probably do others e.g. use dolphins around a sailing ship sketch`,
           },
              { 
                 fullFileName: `assets/all-images/religion/shree-ganesh-gte-q1-2023/Ganesh-3-March17-22-2023.jpeg`,
                 description: `Ganapati - Gudi Padwa 02/22/2023. <br/><ul><li>completion before photo edit</li></ul>`},
              { 
               fullFileName: `assets/all-images/religion/shree-ganesh-gte-q1-2023/Ganesh-2-March17-22-2023.jpeg`,
               description: `Ganapati - Gudi Padwa 02/22/2023. <br/><ul><li>Outline completion</li></ul>`},
            { 
               fullFileName: `assets/all-images/religion/shree-ganesh-gte-q1-2023/Ganesh-1-March1723.jpeg`,
               description: 'Ganapati - Gudi Padwa 02/22/2023. <br/><ul><li>03/17/2023  - initial iteration</li></ul>',
            }
               ] */
          },{  
                    fullFileName: `${this.imageRoot}SwamiAndDattavatarsJuly122022.jpeg`, 
                    description: 
                    `<ul>
                        <li>Featuring Swami with Lord Dattatreya (top) then clockwise from left bottonm</li> 
                        <li>- Shirdi Sai (after Swami)<br/>
                        - Sripadh Vallabh (1st Datta Avatar)<br/>
                        - Nrusimha Saraswati (2nd Datta Avatar)<br/>
                        - Gajanan Maharaj (after Swami)</li>
                    <li>july 12 2022 </li></ul>`,
                        dateUploaded: '01-31-2023',
                       
                },
                { fullFileName: `assets/all-images/religion/dattavatar/GajananMaharajPragatDinFeb132023.jpeg`, 
                canvassSize: 'A4', content:'black-white',
                    description: `<ul>
                            <li>Shree Gajanan Maharaj Pragat Din Feb 13 2023</li>
                            <li>Theme shows 'Maharaj as a bpy being blessed by His Guru, Swami Samartha who would say 'My Ganapati has come'</li>
                            </ul>`,
                dateUploaded: '02-13-2023',
                duplicate: true,
            },{  
                    fullFileName: `${this.imageRoot}SwamiMauliUploadFeb52023-photo.jpeg`, 
                    canvassSize: 'A4', content:'color-pencil black-white',
                    description: 
                    `<ul>
                        <li>Swami Aai photo - dont remember when sketched.. uploaded Feb 5 2023</li> </ul>`,
                        dateUploaded: '02-05-2023',
                        iterations:[ {
                            fullFileName: `${this.imageRoot}SwamiMauliUploadFeb52023-photo.jpeg`, 
                            canvassSize: 'A4', content:'color-pencil black-white',
                            description: 
                            `<ul>
                                <li>Swami Aai photo - dont remember when sketched.. uploaded Feb 5 2023</li> <li>photo</li></ul>`},  {
                                    fullFileName: `${this.imageRoot}SwamiMauliUploadFeb52023-scan.jpeg`, 
                                    canvassSize: 'A4', content:'color-pencil black-white',
                                    description: 
                                    `<ul>
                                        <li>Swami Aai photo - dont remember when sketched.. uploaded Feb 5 2023</li> <li>scan</li> </ul>`}],
                },
                // /Users/shantanu/Documents/GitHub/js-frameworks/Angular_lte_4/shan-cms-template/src/${this.imageRoot}SwamiMauliUploadFeb52023-photo.jpeg
                // /Users/shantanu/Documents/GitHub/js-frameworks/Angular_lte_4/shan-cms-template/src/${this.imageRoot}SwamiMauliUploadFeb52023-scan.jpeg
                {  
                    fullFileName: `${this.imageRoot}SwamiSamarthaKhandoba-champaShashti-11-28-29-2022.jpeg`, 
                    description: 
                    `<ul>
                        <li>Champa Shashti Nov 28/29 2022 - Swami in Khandoba look</li> </ul>`,
                        dateUploaded: '12-01-2022',
                       
                },
                {  
                    fullFileName: `${this.imageRoot}SwamiStandingApril82022.jpeg`, 
                    description: 
                    `<ul>
                        <li>Swami Standing</li><li>April 8 2022</li> </ul>`,
                        dateUploaded: '01-31-2023',
                       
                },
                {  
                    fullFileName: `assets/all-images/religion/dattavatar/SwamiBabaFeb172022-2.jpeg`, 
                    description: 
                    `<ul>
                        <li></li> </ul>`,
                        dateUploaded: '02-28-2022',
                        iterations:[  {
                            fullFileName: `assets/all-images/religion/dattavatar/SwamiBabaFeb172022-2.jpeg`, 
                            description: `<ul>
                                        <li>What started off as a Sai Satcharit Chapter theme involving daskshina, Baba and Swami, Lord Dattatreya was sketched too</li> 
                                        <li>Feb 17 2022 - final </li> 
                                        </ul>`} ,{
                            fullFileName: `assets/all-images/religion/dattavatar/SwamiBabaFeb172022-1.jpeg`, 
                            description:  `<ul>
                            <li>What started off as a Sai Satcharit Chapter theme involving daskshina, Baba and Swami, Lord Dattatreya was sketched too</li> 
                            <li>Feb 17 2022 - initial </li> 
                            </ul>`}],
                            duplicate:true ,
                }, {
                    fullFileName: `assets/all-images/religion/shree-ganesh-gte-q4-2021/GaneshSwamiJan4-72022.jpeg`, 
                 description: '<p>Quick Sketch Memorial Day weekend 2021</p>',
                 duplicate: true,
                 dateUploaded: '01-07-2022',
                 iterations:[
                  { 
                     fullFileName: `assets/all-images/religion/shree-ganesh-gte-q4-2021/GaneshSwamiJan4-72022.jpeg`,
                     description: `<ul><li>One of my first sketches for the New Year</li>
                                      <li>'विघ्नहर्ता' red lettering = Vighnaharta = remover of obstacles </li>
                                      <li>'पालनकर्ता ' greenlettering = palankarta = protector </li>
                                      <li>Final version - Jan 6 2022</li>
                                      <li>Will display in Ganesh AS WELL AS Swami Samartha list</li></ul>`},{ 
                         fullFileName: `assets/all-images/religion/shree-ganesh-gte-q4-2021/GaneshSwamiJan4-72022-p1.jpeg`,
                         description: '<ul><li>Almost done</li></ul>',
                  },{ 
                         fullFileName: `assets/all-images/religion/shree-ganesh-gte-q4-2021/GaneshSwamiJan4-72022-p2.jpeg`,
                         description: `<ul><li>WIP.. The shading below the script was added due to 'cover up', see next (earlier) version</li></ul>`},{ 
                           fullFileName: `assets/all-images/religion/shree-ganesh-gte-q4-2021/GaneshSwamiJan4-72022-error.jpeg`,
                           description: `<ul><li>Was done "SPELLING ERROR in 'विग्नाहार्ता  !!</li></ul>`},{ 
                             fullFileName: `assets/all-images/religion/shree-ganesh-gte-q4-2021/GaneshSwamiJan4-72022-frame.jpeg`,
                             description: `<ul><li>Start</li></ul>`}
                     ] 
                 },{  
                    fullFileName: `${this.imageRoot}Swami-april28-2021.jpg`, 
                    description: `<ul><li>Typical Swami image</li></ul>`}, 
                    
                {  
                    fullFileName: `${this.imageRoot}SwamiSamarthaDeviMarch082021.jpeg`,
                    description: `<ul><li>Swami's Devi Roop sketched 1st week March 2021</li></ul>`  
                }, 
                    
                {  
                    fullFileName: `${this.imageRoot}SwamiSamarthaKhanderayaMarch12021Shivratri+1.jpeg`,
                    description: `<ul><li>Swami's KHandoba Roop sketched around Shivratri - March 2021</li></ul>`  
                },
                     {  fullFileName: `${this.imageRoot}SwamiDadarMathJubne8-9-2021.jpeg`, 
            description: `<ul>
                    <li> Attempt to capture Swami's face as per tyhe pictures in the 'Matth' at Shivaji Park, Dadar, Mumbai</li>
                    <li> June 8-9 2021</li>
                             </ul>`,
       }, {  fullFileName: `${this.imageRoot}SwamicolorQ1Q2_2021.jpg`, 
       description: '<ul><li>Using a format of which a copy is in my home in Mumbai - this format is probably one of the oldest renditions</li><li>Released on Shree Datta Jayanti Dec 29 2020</li> </ul>',
    iterations:[
        { 
            fullFileName: `${this.imageRoot}SwamicolorQ1Q2_2021.jpg`,
            description: '<ul><li>Using color pencils approx Q1 - Q2 2021 - more Q1</li></ul>',
     },{ 
            fullFileName: `${this.imageRoot}SwamicolorQ1Q2_2021-adj1.png`,
            description: '<ul><li>95% height adjusted - Mac paintbrush </li><li>Using color pencils approx Q1 - Q2 2021 - more Q1</li></ul>'},
        ] }, {  fullFileName: `${this.imageRoot}SwamiOctNov2021.jpeg`, 
        description: '<ul><li>olor</li> </ul>',
        dateUploaded: '12-09-2021',
        rating: 1,
     iterations:[
         { 
             fullFileName: `${this.imageRoot}SwamiOctNov2021.jpeg`,
             description: '<ul><li>color</li></ul>',
      },{ 
             fullFileName: `${this.imageRoot}SwamiOctNov2021_1.jpeg`,
             description: '<ul><li>initial iteration</li></ul>'},
         ] },
        // SwamicolorQ1Q2_2021-adj1.png
       {  fullFileName: `${this.imageRoot}Swami-June5-2021-v2.jpeg`, 
                       description: '<ul><li>Using a format of which a copy is in my home in Mumbai - this format is probably one of the oldest renditions</li><li>Released on Shree Datta Jayanti Dec 29 2020</li> </ul>',
                    iterations:[
                        { 
                            fullFileName: `${this.imageRoot}Swami-June5-2021-v2.jpeg`,
                            description: '<ul><li>Swami with His cap June 5 2021, sketch still Work in Progress, but felt it ready enough to put up </li></ul>',
                     },{ 
                            fullFileName: `${this.imageRoot}Swami-June5-2021.jpeg`,
                            description: '<ul><li>initial iteration</li></ul>'},
                        ] },
                        // SwamiSamarthaKhanderayaMarch12021Shivratri+1
                  ]
           },
           // SwamiOctNov2021.jpeg
     
       ];
 }
