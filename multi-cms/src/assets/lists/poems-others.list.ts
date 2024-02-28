
import { PicDescr, CoreContentElement } from './core.content.interfaces'

export class PoemsOthers {
 sort: string = 'asc'
 bulkImageList:PicDescr[] = [
]
public allImageList:CoreContentElement[]  =  [
   { 
        folder:'poems-others',
        theme:'Poems and Other blogs which are out of categorical context',
        template: 'book-chapters',
        themeSummary:
        `Some gems picked up from here and there; other humble offerings by me:`,
        files: [
         {
            canvassSize:  'A4',
            content:  'color-pencil',
            dateUploaded:  '07-15-2023',
            fullFileName: `assets/images/SaiSmiling-Jan25-2024.jpeg`
            ,
            description: `
            `,
            rating:  1,
            ratingYear:  2023,
         },
         /*
         {
            textHeader:'Sundar Kaandam Parayan',
            textContent: `<div><img src='../assets/all-images/religion/laxmi-vishnu-hanuman/HanumanJayantiApril62023.jpeg'></div>`,
         },
         */
        {
            textHeader: 'A Poem I wrote on Sai - sometime in early 2010s. This is in English script',
            textContent: `||Om Shree Sai Ram||<br/> Aatey hai duur duur se<br/>
            Shirdi yaatra bhakti man mein<br/>
            Dekhne aapki murthy,<br/>
            De man ko shanti
            Bhakto ka pranaaam sweekarna, <br/>
            Kehta Ye Sai Ka Deewana<br/><br/>
            Baithe ho samadhi sthan<br/>
            Kintu nazar sabko chhhan<br/>
            America ya ho Hindustaan<br/>
            Duniya pe chhayi aapki shaan<br/> 
            Mann Se, Dil se Pukaarey, Aap aana<br/> 
            Kehta Ye Sai Ka Deewana<br/><br/>
            Lagtaa Dekte ho Na Dekhhe Bhi<br/>
            Natkhhat aanken maasoomyat bhi<br/>
             Muskurahat se Suraj bhi Sharmaye<br/>
              Zindagi Ki Amawas Ko Poonam Banaye<br/>
               Aapky Bachho ka palan Karna<br/>
            Kehta Ye Sai Ka Deewana<br/><br/>
            Rogi ho ya dukhi ho sabh aatey<br/>
             Gun aapke Gaatey<br/>
            Udi se aseemit chamatkaar<br/>
            Ilaaj ke saath dher saara pyaar<br/>
            Bigadi ko Durusth Karaana,<br/>
            Kehta Ye Sai Ka Deewana<br/><br/>
            Seva Mein Mewa, Sai Ka Paigam<br/>
            Na Phal ki Apeksha Karo Achhe Kaam<br/>
            Na Nafrat, Na Krodh, Na Bhay, Man Ko Shanth Rakhna<br/>
            Sahi Dishaa main chalna,<br/>
            Na Burey mein Bhataknaa<br/>
            Bhaktoe se Achhey Karya Karwaana,<br/>
            Kehta Ye Sai Ka Deewana<br/><br/>
            Naa Bair, Naa Ghamand, Dosti Badhaana,<br/> Naa oonch Naa Neech, Ek Bartaw karaana<br/>
             Ghamand, Ahankar, Basma Karoe<br/>
            Ek Saath, Ek Praan Jiyo Phalo<br/>
            Tootey Rishto Ko Judaana<br/> Kehta Ye Sai Ka Deewana<br/><br/>
            Pyaar se Duniya chalti hai<br/>
            Pyaar Bina Duniya Jalti Hai<br/>
             Pyaar ka Prasaad De De Sai<br/> Pyaar Poori Duniya Pe Chhai<br/> Humesha, Dil Mein Jaga Banana,<br/> Kehta Ye Sai Ka Deewana`,         
            fullFileName: `assets/all-images/sundara-kaandam/WhatsApp Image 2023-02-05 at 6.57.47 AM (1).jpeg`, 
            description: `<ul>
            <li>3. Ishwar eBook candidate Durga adhyaya one Shree Narayan Asleep Madhiu Kaitabh MISSNG HARD COPY April 8 2022</li>
            </ul>`,
            dateUploaded: '01-29-2023',
            
         },
         {
            textHeader: 'A Poem I wrote on Sai - sometime in early 2010s. This is in Devanagari script',
            textContent: `||Om Shree Sai Ram||<br/> 
            आते है दूरदूर से<br/> 
             िशरडी यात्रा भिक्त मन में <br/> 
             देखने आपकी मूितर्<br/> 
            दे मन को शांित<br/> 
            भक्तो का प्रणाम स्वीकारना, <br/> कहता ये साई का दीवाना<br/><br/>
            Baithe ho samadhi sthan<br/>
            Kintu nazar sabko chhhan<br/>
            America ya ho Hindustaan<br/>
            Duniya pe chhayi aapki shaan<br/> 
            Mann Se, Dil se Pukaarey, Aap aana<br/> 
            Kehta Ye Sai Ka Deewana<br/><br/>
            Lagtaa Dekte ho Na Dekhhe Bhi<br/>
            Natkhhat aanken maasoomyat bhi<br/>
             Muskurahat se Suraj bhi Sharmaye<br/>
              Zindagi Ki Amawas Ko Poonam Banaye<br/>
               Aapky Bachho ka palan Karna<br/>
            Kehta Ye Sai Ka Deewana<br/><br/>
            Rogi ho ya dukhi ho sabh aatey<br/>
             Gun aapke Gaatey<br/>
            Udi se aseemit chamatkaar<br/>
            Ilaaj ke saath dher saara pyaar<br/>
            Bigadi ko Durusth Karaana,<br/>
            Kehta Ye Sai Ka Deewana<br/><br/>
            Seva Mein Mewa, Sai Ka Paigam<br/>
            Na Phal ki Apeksha Karo Achhe Kaam<br/>
            Na Nafrat, Na Krodh, Na Bhay, Man Ko Shanth Rakhna<br/>
            Sahi Dishaa main chalna,<br/>
            Na Burey mein Bhataknaa<br/>
            Bhaktoe se Achhey Karya Karwaana,<br/>
            Kehta Ye Sai Ka Deewana<br/><br/>
            Naa Bair, Naa Ghamand, Dosti Badhaana,<br/> Naa oonch Naa Neech, Ek Bartaw karaana<br/>
             Ghamand, Ahankar, Basma Karoe<br/>
            Ek Saath, Ek Praan Jiyo Phalo<br/>
            Tootey Rishto Ko Judaana<br/> Kehta Ye Sai Ka Deewana<br/><br/>
            Pyaar se Duniya chalti hai<br/>
            Pyaar Bina Duniya Jalti Hai<br/>
             Pyaar ka Prasaad De De Sai<br/> Pyaar Poori Duniya Pe Chhai<br/> Humesha, Dil Mein Jaga Banana,<br/> Kehta Ye Sai Ka Deewana`,         
            fullFileName: `assets/all-images/sundara-kaandam/WhatsApp Image 2023-02-05 at 6.57.47 AM (2).jpeg`, 
             description: `<ul>
            <li>4. Ishwar eBook candidate Durga adhyaya one Shree Narayan killings Madhiu Kaitabh April 20 2022
            </li>
            </ul>`,
             dateUploaded: '01-23-2023',
            
         }
      ], // all list
        // GaneshSwamiDec18-22-2021-1.jpeg
    },
   ];
 }
