export interface PicDescr {
       fullFileName?:string;
       fileName?:string;
       description:string;
       categories?:string ;
       title?:string;
       iterations?:PicDescr[];
   }
export   interface ImageElement {
       folder:string;
       theme?:string;
       themeSummary?:string;
       files:any[];
   } 
   enum PicsIndex  {
       aumkarGaneshSept2020Final,
       AumGaShivParKashiVishwCTLightNov172020Final,
       unsignedShivVeena12272020,
       ShreeSiddhivinayakQ42020,
       DeviMaaMay13182021,
       MixGenPlaneSept2020,
   };
   const bulkImageList:PicDescr[] = [
       {  
           fullFileName: `assets/all-images/religion/shree-ganesh/Aumkar-Ganesh-sept-2020-final.jpeg`, 
           description: `
              <p>One of my first 'properly, patiently' drawn sketches, Sept 2020</p>
              ` }, 
           {  fullFileName: `assets/all-images/religion/mahadev-family/AumGaShivParKashiVishwCTLightNov172020Final.jpeg`, 
              description: 
              `Attempt to sketch <em>based on</em> the sculpture overlooking the main shivling room Kashi Vishweshwar Temple Citilight, Mumbai
              <br/>Nov 17 2020`},
              {  fullFileName: `assets/all-images/religion/mahadev/unsignedShivVeena12272020.jpeg`, 
              description: 
               `<ul><li>Watching a Lord Shiv song an YouTube, I chanced upon the original sketch that inspired me to draw this</li>
               <li>Actually, if I am guessing right this is based on the famous tele-serial 'Devon Ke Dev Mahadev' and 'Shivji' here is Mohit Raina</li>
               <li>So face accuracy, kindly condone under 'artist's license'</li>
               <li>One that I took a long time over - probably started Dec 1st weel 2020, Shared publicly on Dec 27 2020</li></ul>`},

               { fullFileName: `assets/all-images/religion/shree-ganesh/ShreeSiddhivinayakQ42020.jpeg`, 
                    description: 'Siddhivinayak Temple, Prabhadevi, Mumbai, India attempt to sketch' },
               { fullFileName: 
                     `assets/all-images/religion/devi/DeviMaaMay13-18-2021.jpeg`, 
                     description: `<ul><li>An 'unplanned' sketch:</li>
                     <li>One of my fellow devotees at Shirdi Sai Temple and I keep jesting, joking pulling each others leg.</li>
                     <li>She posted the photo, on which this is based, I think, 1st Thursday of May 2021. I took a week and this was ready May 13th.</li>
                     <li><em>(Sometimes I keep a good handle on dates)</em></li></ul> ` },
                     { fullFileName: 
                        `assets/all-images/planes/mix-gen-plane-sept-2020.jpeg`, 
                        description: `<ul><li>The One that started it ALL!!</li>
                        <li>Began revisit to my mothballed hobby with this, I think Sept 9 2020</li>
                        <li>Had a DC-10, Boeing 777-X and 737 (note radar hump before tail) in mind, so.. merged them into this</li></ul> ` },
   ]
   export const allImageList:ImageElement[]  =  [
       { 
        folder:'changers-b4-2022',
        theme:'INTRODUCING IT: A Journey',
        themeSummary:
        `
         <p>This page attempts to capture points in my journey from third quarter 2020, when I started sketching, 
            to approx June 2021, when I finally got off my butt to put these up on a website in a sort of 
            orderly manner</p>
         <p>Picked up, generally where I left off, modes of transports, then moving to drawing Shree Ganesh, Shirdi Sai, Lord Shiva
          and the Goddesses. Structures. Famous personalities. so on...</p>
          <p> Hope you like these and get some pleasure out of watching, just as I have gotten a joy of drawing and sharing..</p> 
        `,
        files: [bulkImageList[PicsIndex.ShreeSiddhivinayakQ42020],   
                bulkImageList[PicsIndex.MixGenPlaneSept2020],
                {  fullFileName: `assets/all-images/religion/shree-ganesh/intro-Ganesh.jpg`, 
                   description: '<p>Quick Sketch Memorial Day weekend 2021</p>' },
                bulkImageList[PicsIndex.aumkarGaneshSept2020Final],
                bulkImageList[PicsIndex.AumGaShivParKashiVishwCTLightNov172020Final],
                bulkImageList[PicsIndex.unsignedShivVeena12272020],
                bulkImageList[PicsIndex.DeviMaaMay13182021],{  fullFileName: `assets/all-images/religion/laxmi-vishnu-hanuman/LaxmiNarsimhaJayanti526_fn_6022021.jpeg`, 
                description: `<ul>
                                <li><strong>LATEST UPDATED (June 2 2021)</strong></li>
                                <li>Shree Narsimha Jayanti was May 26, when I release the first iteration (see the section on Vishnu)</li>
                                </ul>`}
              ]
       },
       { 
           folder:'shree-ganesh',
           theme:'Shree Ganesh',
           themeSummary:
           ``,
           files: [{  fullFileName: `assets/all-images/religion/shree-ganesh/intro-Ganesh.jpg`, 
                      description: '<p>Quick Sketch Memorial Day weekend 2021</p>' },
                   {  
                       fullFileName: `assets/all-images/religion/shree-ganesh/Aumkar-Ganesh-sept-2020-final.jpeg`, 
                       description: `
                          <p>One of my first 'properly, patiently' drawn sketches, Sept 2020</p>
                          ` },
                   { fullFileName: `assets/all-images/religion/shree-ganesh/ShreeSiddhivinayakQ42020.jpeg`, 
                       description: 'Siddhivinayak Temple, Prabhadevi, Mumbai, India attempt to sketch' },
                 ]
          },
          { 
              folder:'devi',
              theme:'Durga, Laxmi, Saraswati and Avatars',
              themeSummary:
              ``,
              files: [  bulkImageList[PicsIndex.DeviMaaMay13182021], ]
             },
             { 
                 folder:'mahadev',
                 theme:'Lord Shiva',
                 themeSummary:
                 ``,
                 files: [ bulkImageList[PicsIndex.unsignedShivVeena12272020]
                 ,  {  
                    fullFileName: `assets/all-images/religion/shirdi-sai-q1-q2-2021/SaiTemplateKhanderaya-May2021-Sai.jpeg`, 
                    description: `
                        <ul>
                        <li>Khanderaya sketched based off sketch based off one of the three Sai templates I created</li>
                        <li>Probably April 29 2021</li></ul>
                       ` }
                       ]
                },{ 
         folder:'mahadev-family',
         files: [
            {  fullFileName: `assets/all-images/religion/mahadev-family/AumGaShivParKashiVishwCTLightNov172020Final.jpeg`, 
               description: 
               `Attempt to sketch <em>based on</em> the sculpture overlooking the main shivling room Kashi Vishweshwar Temple Citylight, Mumbai
               <br/>Nov 17 2020`},
            {  
             fullFileName: `assets/all-images/religion/mahadev-family/MahadevParvatiDanceFeb142021.jpeg`, 
                description: `<ul>
                                        <li>The first of sketches of a favorite theme of mine dancing Mahadev and consort (Sati/ Parvati)</li>
                                        <li>Drawn and shared by St. Valentine's day 2021 - this is based off of the colors serial 'Devo ke Dev Mahadev;'</li>
                                        <li>Mohit Raina and Sonarika Bhadoria</li>
                                </ul>`,
                },
                {  
                 fullFileName: `assets/all-images/religion/mahadev-family/MahadevParvatiDanceMarch112021Shivratri.jpeg`, 
                    description: `<ul>
                                            <li>Another dancing poses Mahadev and consort (Sati/ Parvati)</li>
                                            <li>Search and found pics of two dancers in this pose and drew with Mahadev and Parvati </li>
                                            <li>Around Shivratri - March 11 2021 (Attempt to sketch Mt Kailash in the background)</li>
                                    </ul>`,
                    },
                    {  
                     fullFileName: `assets/all-images/religion/mahadev-family/MahadevParvatiDancePoseQ1Q22021i.jpg`, 
                     description: `<ul>
                                             <li>Another dancing poses Mahadev and consort (Sati/ Parvati)</li>
                                             <li>Like the neighbor, searched and found pics of two dancers in this pose and drew with Mahadev and Parvati </li>
                                             <li>After March 11 2021 but by Q2 2021</li>
                                     </ul>`,
                     },
                    {  
                     fullFileName: `assets/all-images/religion/mahadev-family/GaneshMahadevParvatiMarch122021Shivratri+1.jpeg`, 
                        description: `<ul>
                                        <li>Inspired by the Laxmi Narayan sketch </li>
                                        <li>Around Shivratri - March 11 2021 (Attempt to sketch Mt Kailash in the background)</li>
                                        </ul>`,
                        }
               ]
        }, { 
            folder:'laxmi-vishnu-hanuman',
                 theme:'Lord Narayan, Maa Laxmi and Avatars, Shree Hanuman',
                 themeSummary: ``,
                 files: [{  fullFileName: `assets/all-images/religion/laxmi-vishnu-hanuman/LaxmiNarayanRarePicFeb232021.jpeg`, 
                        description: `<ul>
                                        <li>Vinu, a friend from college gave me the original to sketch from, Rare pic of Laxmi Narayan</li>
                                        <li>He must have given some time in Jan 2021 - I took my time on this one</li>
                                        <li>I have mentioned dates in the image name and this says Feb 23 2021 (Feb 23 is my parents' wedding anniv)</li>
                                        </ul>`},
                        {  fullFileName: `assets/all-images/religion/laxmi-vishnu-hanuman/LaxmiNarsimhaJayanti526_fn_6022021.jpeg`, 
                                        description: `<ul>
                                                        <li><strong>LATEST UPDATED (June 2 2021)</strong></li>
                                                        <li>Shree Narsimha Jayanti was May 26, when I release the first iteration (next sketch)</li>
                                                        <li>The earlier Laxmi Narayan I must have taken at least a month. This was a week (with the 1st one taking a day)</li>
                                                        </ul>`,
                           iterations:[
                              {  fullFileName: `assets/all-images/religion/laxmi-vishnu-hanuman/LaxmiNarsimhaJayanti526_fn_6022021.jpeg`, 
                                        description: `<ul>
                                                        <li><strong>LATEST UPDATED (June 2 2021)</strong></li>
                                                        <li>Shree Narsimha Jayanti was May 26, when I release the first iteration (next sketch)</li>
                                                        <li>The earlier Laxmi Narayan I must have taken at least a month. This was a week (with the 1st one taking a day)</li>
                                                        </ul>`},
                                                        {  fullFileName: `assets/all-images/religion/laxmi-vishnu-hanuman/NarsimhaJayantiMay25-2021-almost-done.jpeg`, 
                                                        description: `<ul>
                                                                        <li>Released May 25 2021</li>
                                                                        </ul>`},
                           ]},
                                                        
                    
                  {  
                     fullFileName: `assets/all-images/religion/laxmi-vishnu-hanuman/ShreeRamShivlingRamnavmi2021.jpg`, 
                     description: `<ul><li>Sketched for RamNavmi April 21 2021</li></ul>`},
                    {  fullFileName: `assets/all-images/religion/laxmi-vishnu-hanuman/ShreeRamRamNavmi042212021.jpeg`, 
                                                                                                            description: `<ul>
                                                                                                                            <li>Sketched for RamNavmi April 21 2021</li>
                                                                                                                            </ul>`},
                    {  fullFileName: `assets/all-images/religion/laxmi-vishnu-hanuman/HanumanOct2020.jpg`, description: 'Theoretically WIP - Oct 2020'},
                           {  fullFileName: `assets/all-images/religion/laxmi-vishnu-hanuman/BalHanumanp-hanumanjnti04272021.jpeg`, 
                                description: `<ul><li>.... AND HANUMAN JAYANTI following,  April 27 2021</li></ul>`}
                  ]
        },{ 
        folder:'planes',
        files: [
            bulkImageList[PicsIndex.MixGenPlaneSept2020],
            { fullFileName: 
                `assets/all-images/planes/planes_firefightdc10-sept-2020.jpeg`, 
                description: `<ul><li>Generic DC-10 firefighter attempt  Sept 10  2020</li></ul> ` },
                { fullFileName: 
                    `assets/all-images/planes/spitfire-sept-2020.jpeg`, 
                    description: `<ul><li>Spitfire attempt  Sept   2020</li>
                    <li>In school used to read a lot of Commando comics and would be inspired to draw</li>
                    <li>WW2 dogfights with, particularly spitfires was a favorite theme then</li>
                                </ul> ` }
         /*   { fullFileName: `assets/all-images/photo-planes/su-30-1.jpeg`, description: 'test' },
        { fullFileName: `assets/all-images/photo-planes/dc-10-1.jpeg`, description: 'test' },
        { fullFileName: `assets/all-images/photo-planes/raptor-1.jpeg`, description: 'test' },
        { fullFileName: `assets/all-images/photo-planes/su-57-1.jpeg`, description: 'test' },
        */
              ]
       },{ 
        folder:'trains',
        files: [{ fileName:'train1.jpeg', description: 'test' },
               { fileName:`train2.jpeg`, description: 'test' }]
       }, { 
        folder:'ships',
        files: [{ fileName:`boat1.jpeg`, description: '<div>Sample speed boat<br/>this is a test</div>' },
        { fileName:`ship1.jpeg`, description: 'test' },
              ]
       }, { 
        folder:'cars',
        files: [{ fileName:`car1.jpeg`, description: 'test' },
        { fileName:`car2.jpeg`, description: 'test' },
              ]
       },
    
      ];