import { BreadCrumb } from "@settings-and-models/bread-crumbs";
import { TreeNodeElement } from "@settings-and-models/tree-node-element";
// CMS picture gallery hierarchy structure
// This is a tree structure, where the leaf key will load the 
// JSON containing a picture list
// This modifies and enhances the menu-tree logic of the old app
export interface TreeNodeElement2 {
    key:string; // unique id.. like a primary key, also picture list loader for leaf
    parentKey?:string; // like a foreign key and establishing parent. optional()
    levelIndex?:number ; // unused for now (May 2024)
    breadCrumb:BreadCrumb[]; // better safe than optimal for now May 3 2024
    label:string; 
    emptyMessage?:string;
    description?:string ;
    roleBasedDescription?: string;
    isCompiledList?:boolean; // use some criteria to load selected images like latest uploads or top rated
    isLeafParent:boolean; // 'true' = load the image list for that menu kee, 'false' = top or middle node
    dateUploaded?:string;
    roles?:string[]; // roles match users roles many to many match
    
}

export const MenuTreeElements:TreeNodeElement[] = [
    // #### ROOT
    {
        key:'top-level', levelIndex:0,isLeafParent:false, roles:["any"], // roles match users roles many to many match
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '', params:'top-level', label: 'HOME'}
        ],
        label:"HOME PAGE",
    },
    // #### LEVEL 1
    {
        parentKey:'top-level',key: "special-lists", levelIndex:1,isLeafParent:false, roles:['any'],
        label: "Special Lists", 
        description:'Extracted works from the entire collection like best attempts, something new, latest sketches, etc',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'special-lists', label: 'Special Lists'}
        ],    
    }, 
    {
        parentKey:"top-level", key: "religious-shree-ganesh", levelIndex:1,isLeafParent:false, roles:['superuser','sanatani'],
        label: "Religious: Shree Ganesh",
        description:'Sketches of, and including Shree Ganesh',
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'religious-shree-ganesh', label: 'Shree Ganesh'}
        ],
        
    }, 
    {
        parentKey:"top-level", key: "religious-other-deities", levelIndex:1,isLeafParent:false, roles:['superuser','sanatani'],
        label: "Religious: Other Deities",
        description:'Sketches of other Gods and Goddesses',
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'religious-other-deities', label: 'Religious: Other Deities'}
        ],
        
    }, 
    {
        parentKey:"top-level", key: "religious-gurus-and-mystics", levelIndex:1,isLeafParent:false, roles:['superuser','guru'],
        label: "Religious: Gurus and Mystics",
        description:'Sketches of Spiritual Masters, Mystics - Lord Dattatreya and Lineage, Sikh Gurus, Others',
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'religious-gurus-and-mystics', label: 'Religious: Gurus and Mystics'}
        ],
        
    }, 
    {
        parentKey:"top-level", key: "religious-shirdi-sai", levelIndex:1,isLeafParent:false, roles:['superuser','guru'],
        label: "Religious: Shirdi Sai Baba",
        description:'Sketches of Sadguru Shirdi Sai Baba. Sooo many sketches, this warranted a separate section at this level',
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'religious-shirdi-sai', label: 'Religious: Shirdi Sai Baba'}
        ],
        
    }, 
    {
        parentKey:"top-level", key: "otherbeings-places-events", levelIndex:1,isLeafParent:false, roles:['any'],
        label: "Beings, Places and Themes",
        description:`Pictures of the living - famous human personalities, other living beings (as in May 2024 occasional). Places and famous structures. Events, Misc. Themes. 
                    (But Mumbai City related drawing warrant a separate, independent group!!)`,
        roleBasedDescription:`ADD:Also some chosen religious and spirtual themes: NOTS superuser, sanatan,guru'`,
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'otherbeings-places-events', label: 'Beings, Places and Themes'}
        ],
        
    }, 
    {
        parentKey:"top-level", key: "salaam-mumbai", levelIndex:1,isLeafParent:false, roles:['any'],
        label: "Salaam Mumbai",
        description:`Dedication to the City that is part of me that I am part of. Wherever I am`,
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'salaam-mumbai', label: 'Salaam Mumbai'}
        ],
        
    }, 
    {
        parentKey:"top-level", key: "transport-and-machines", levelIndex:1,isLeafParent:false, roles:['any'],
        label: "Transport And Machines",
        description:`Trains, Cars, Planes, Ships, Military equipment. Anything that is mechanical`,
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'transport-and-machines', label: 'Transport And Machines'}
        ],
        
    }, 
    {
        parentKey:"top-level", key: "misc", levelIndex:1,isLeafParent:false, roles:['any'],
        label: "Misc.",
        description:`Those items which is pending, or are too few to have a separate category`,
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'misc', label: 'Misc.'}
        ],
        
    }, 
    {
        parentKey:"top-level", key: "admin", levelIndex:1,isLeafParent:false, roles:['admin', 'superuser'],
        label: "Admin",
        description:`Admin`,
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'admin', label: 'Admin'}
        ],
        
    }/*, 
    
    {
        parentKey:"top-level", key: "contact", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Contact us",
        description:`Email`,
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: 'contact', params:'misc', label: 'Misc.'}
        ],
        
    }*/, 
    // #### LEVEL 2
    // special lists - added one more layer 
       
 
{
    parentKey:"admin", key: "newuser", levelIndex:1,isLeafParent:false, roles:['admin', 'superuser'],
    label: "New User",
    description:`Register New User`,
    
    emptyMessage: 'Empty Content or Error', breadCrumb:[
        {link: '/view', params:'top-level', label: 'HOME'},
        {link: '', params:'newuser', label: 'newuser'}
    ],
    
},
    { 
        parentKey: "special-lists", key: 'changers', levelIndex:2, isLeafParent: false, isCompiledList:true, roles: ["any"], 
        label: 'Changers', 
        description:`These are landmark sketches which I consider a significant change or turn in the progress of my sketches, or maybe a special reason. 
                    These may not be my best efforts but are a new element or entity that was introduced in these drawings.`,
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '', params:'changers', label: 'Changers'}
        ],
    }, 
    { 
        parentKey: "special-lists", key: 'showpieces', levelIndex:2, isLeafParent: false, isCompiledList:true, roles: ["any"], 
        label: 'The Best', 
        description:`A Year-wise extraction of some of my best efforts,. November 2024 I started a group 'Alag Grouping Full Cycle' the drawings under here are top class and will not be repeated here`,
         emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '', params:'showpieces', label: 'The Best'}
        ],
    }, 
     /* June 2025 C&O restructuring 
    { 
        parentKey: "special-lists", key: 'latest-uploads', levelIndex:2, isLeafParent: false, isCompiledList:true, roles: ["any"], 
        label: 'Latest Uploads', 
        description:`Images of latest drawings uploaded`,
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '', params:'latest-uploads', label: 'Latest Uploads'}
        ],
    },
    */
    /*  June 2025 C&O restructuring 
         - 'latest-uploads-timewise' changed to 'most-recently-uploaded' and move up in menu tree
      - 'latest-uploads-themewise' put in cold storage - stopped making general sense and too much to maintain; too little ROI
    */
   { 
        parentKey: "special-lists", key: 'most-recently-uploaded', levelIndex:3, isLeafParent: true, isCompiledList:true, roles: ["any"], 
        label: 'Most Recent Uploads', 
        description:`The most recent drawings uploaded.`,
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '', params:'most-recently-uploaded', label: 'Most Recent Uploads'}
        ],
    },
    {
        parentKey:"religious-shree-ganesh", key: "shree-ganesh-b4-q4-2021", levelIndex:2, isLeafParent:true, roles:['superuser','sanatani'],
        label: "Shree Ganesh Before Q4 2021",
        description:'Sketches of, and including Shree Ganesh prior to Q4 2021', 
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'religious-shree-ganesh', label: 'Shree Ganesh'},
            {link: '', params:'shree-ganesh-b4-q4-2021', label: 'Shree Ganesh Before Q4 2021'}
        ],
        
    }
    ,
    {
        parentKey:"religious-shree-ganesh", key: "shree-ganesh-gte-q4-2021", levelIndex:2, isLeafParent:true, roles:['superuser','sanatani'],
        label: "Shree Ganesh Q4 2021 onward",
        description:'Sketches of, and including Shree Ganesh Ganesh Q4 2021 to Q1 2023', 
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'religious-shree-ganesh', label: 'Shree Ganesh'},
            {link: '', params:'shree-ganesh-gte-q4-2021', label: 'Shree Ganes Q4 2021 onward'}
        ],
        
    },
    {
        parentKey:"religious-shree-ganesh", key: "shree-ganesh-gte-q1-2023", levelIndex:2, isLeafParent:true, roles:['superuser','sanatani'],
        label: "Shree Ganesh Q1 2023 onward",
        description:'Sketches of, and including Shree Ganesh Q1 2023 to Q1 2024', 
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'religious-shree-ganesh', label: 'Shree Ganesh'},
            {link: '', params:'shree-ganesh-gte-q1-2023', label: 'Shree Ganesh Q1 2023 onward'}
        ],
        
    },
    {
        parentKey:"religious-shree-ganesh", key: "shree-ganesh-gte-q1-2024", levelIndex:2, isLeafParent:true, roles:['superuser','sanatani'],
        label: "Shree Ganesh Q1 2024 onward",
        description:'Sketches of, and including Shree Ganesh Q1 2024 onward. featuring the first of watercolor pencil drawings', 
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'religious-shree-ganesh', label: 'Shree Ganesh'},
            {link: '', params:'shree-ganesh-b4-q4-2021', label: 'Shree Ganesh Q1 2024 onward'}
        ],        
    },
    {
        parentKey:"religious-shree-ganesh", key: "shree-ganesh-gte7-lte-ganeshotsav-2024", levelIndex:2, isLeafParent:true, roles:['superuser','sanatani'],
        label: "Shree Ganesh End July to Ganeshotsav 2024",
        description:'Sketches of, and including End july through to Ganeshotsav 2024 (Sept 6,7 start). Featuring new unique sequence concept', 
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'religious-shree-ganesh', label: 'Shree Ganesh'},
            {link: '', params:'shree-ganesh-gte7-lte-ganeshotsav-2024', label: 'Shree Ganesh End July to Ganeshotsav 2024'}
        ],        
    },
    {
        parentKey:"religious-other-deities", key: "devi", levelIndex:2,isLeafParent:true, roles:['superuser','sanatani'],
        label: "Goddesses",
        description:'Sketches of, and including Durga, Laxmi, Saraswati and Avatars',
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'religious-other-deities', label: 'Religious: Other Deities'},
            {link: '', params:'devi', label: 'Goddesses'}
        ],
        
    },
    {
        parentKey:"religious-other-deities", key: "mahadev", levelIndex:2,isLeafParent:true, roles:['superuser','sanatani'],
        label: "Mahadev",
        description:'Sketches of, and related to, Lord Shiva',
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'religious-other-deities', label: 'Religious: Other Deities'},
            {link: '', params:'mahadev', label: 'Mahadev'}
        ],
        
    },
    {
        parentKey:"religious-other-deities", key: "mahadev-family", levelIndex:2,isLeafParent:true, roles:['superuser','sanatani'],
        label: "Mahadev Family",
        description:'Sketches of, and related to groupings of two or more of  Lord Ganesh, Maa Parvati, Lord Shiva and Karthikeya',
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'religious-other-deities', label: 'Religious: Other Deities'},
            {link: '', params:'mahadev', label: 'Mahadev Family'}
        ],
        
    },
    {
        parentKey:"religious-other-deities", key: "laxmi-vishnu-hanuman", levelIndex:2,isLeafParent:true, roles:['superuser','sanatani'],
        label: "Narayan, Laxmi, Hanuman",
        description:'Sketches of, and including Laxmi, Narayan, Shree Ram, and family, Bajrangbali',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'religious-other-deities', label: 'Religious: Other Deities'},
            {link: '', params:'laxmi-vishnu-hanuman', label: 'Narayan, Laxmi, Hanuman'}
        ],
        
    }, { 
        parentKey: "religious-gurus-and-mystics", key: 'dattavatar', levelIndex:2, isLeafParent:true, dateUploaded: '02-13-2023', roles:['superuser','guru'],
        label:  'Spiritual Souls:Datta Lineage, Sikhs, East of India',  
        description:`श्री गुरु स्मरण ... श्री गुरु नमन ... श्री गुरु चरण ... श्री गुरु शरण .. अवधूत चिंतन ... श्री गुरुदेव दत्त
Guru's of Lord Dattatreya lineage and Sikh Gurus... there are likely to be maybe a couple of sketches of Shirdi Sai here; I have many of them, so have separate sections for the same.. 
Also increasing numbers of Swami Samartha sketches`,
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'religious-gurus-and-mystics', label: 'Religious: Gurus and Mystics'},
            {link: '', params:'dattavatar', label: 'Spiritual Souls:Datta Lineage, Sikhs, East of India'}
        ]
    },
    {    parentKey: "religious-gurus-and-mystics", key: 'swami-samartha', levelIndex:2, isLeafParent:true, dateUploaded: '02-13-2023', roles:['superuser','guru'],
        label:  'Shree Swami Samartha pre Q2 2023',  
        description: 'Swami Samartha the 4th Avatar of Shree Dattatreya (sequence include Lord Datta Himself). Drawings before Q2 2023' ,
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'religious-gurus-and-mystics', label: 'Religious: Gurus and Mystics'},
            {link: '', params:'swami-samartha', label: 'Shree Swami Samartha pre Q2 2023'}
        ]
    },
    {    parentKey: "religious-gurus-and-mystics", key: 'swami-samartha-q2-2023', levelIndex:2, isLeafParent:true, dateUploaded: '02-13-2023', roles:['superuser','guru'],
        label:  'Shree Swami Samartha Q2 2023 onward',  
        description: 'Swami Samartha the 4th Avatar of Shree Dattatreya (sequence include Lord Datta Himself). Drawings from Q2 2023' ,
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'religious-gurus-and-mystics', label: 'Religious: Gurus and Mystics'},
            {link: '', params:'swami-samartha-q2-2023', label: 'Shree Swami Samartha Q2 2023 onward'}
        ]
    },
   
   
 
    { parentKey: "religious-shirdi-sai", key: 'shirdi-sai-q1-q2-2021', levelIndex:2, isLeafParent:true, dateUploaded: '02-13-2023', roles: ['superuser',"guru"], 
        label:  'Shirdi Sai: to  Q3 2021', 
        description:`Soo many sketches of Shirdi Sai!!! that I needed to make a separate section with specific period for the last Datta Avatar, Sadguru Shree Sai Samartha
        &nnbsp; *Since June 2021 I have been attempting on sketch every Thursday. Let's see how far this sustains... `,
       emptyMessage: 'Empty Content or Error', breadCrumb:[
           {link: '/view', params:'top-level', label: 'HOME'},
           {link: '/view', params:'religious-shirdi-sai', label: 'Religious: Shirdi Sai Baba'},
           {link: '', params:'shirdi-sai-q1-q2-2021', label: 'Shirdi Sai: to  Q3 2021'}
       ]
     },
     { parentKey: "religious-shirdi-sai", key: 'shirdi-sai-q3-q4-2021', levelIndex:2, isLeafParent:true, dateUploaded: '02-13-2023', roles: ['superuser',"guru"],
        label:  'Shirdi Sai: Q3 2021 - Q1 2022', 
        description:`Soo many sketches of Shirdi Sai!!! that I needed to make a separate section with specific period for the last Datta Avatar, Sadguru Shree Sai Samartha
        &nnbsp; *Since June 2021 I have been attempting on sketch every Thursday. Let's see how far this sustains... `,
       emptyMessage: 'Empty Content or Error', breadCrumb:[
           {link: '/view', params:'top-level', label: 'HOME'},
           {link: '/view', params:'religious-shirdi-sai', label: 'Religious: Shirdi Sai Baba'},
           {link: '', params:'religious-shirdi-sai', label: 'Shirdi Sai: Q3 2021 - Q1 2022'}
       ] 
      },
    { parentKey: "religious-shirdi-sai", key: 'shirdi-sai-q2-q3-2022', levelIndex:2, isLeafParent:true, dateUploaded: '02-13-2023',  roles: ['superuser',"guru"],
        label:  'Shirdi Sai: Q2 Q3 2022', 
        description:`Soo many sketches of Shirdi Sai!!! that I needed to make a separate section with specific period for the last Datta Avatar, Sadguru Shree Sai Samartha
        &nnbsp; *Since June 2021 I have been attempting on sketch every Thursday. Let's see how far this sustains... `,
       emptyMessage: 'Empty Content or Error', breadCrumb:[
           {link: '/view', params:'top-level', label: 'HOME'},
           {link: '/view', params:'religious-shirdi-sai', label: 'Religious: Shirdi Sai Baba'},
           {link: '', params:'shirdi-sai-q2-q3-2022', label: 'Shirdi Sai: Q2 Q3 2022'}
       ] 
       },
    { parentKey: "religious-shirdi-sai", key: 'shirdi-sai-q4-2022-q1-2023', levelIndex:2, isLeafParent:true, dateUploaded: '02-13-2023', roles: ['superuser',"guru"],
        label:  'Shirdi Sai:- Q3,Q4 2022 Q1 2023', 
        description:`Soo many sketches of Shirdi Sai!!! that I needed to make a separate section with specific period for the last Datta Avatar, Sadguru Shree Sai Samartha
        &nnbsp; *Since June 2021 I have been attempting on sketch every Thursday. Let's see how far this sustains... `,
       emptyMessage: 'Empty Content or Error', breadCrumb:[
           {link: '/view', params:'top-level', label: 'HOME'},
           {link: '/view', params:'religious-shirdi-sai', label: 'Religious: Shirdi Sai Baba'},
           {link: '', params:'shirdi-sai-q4-2022-q1-2023', label: 'Shirdi Sai:- Q3,Q4 2022 Q1 2023'}
       ] 
      },
    { parentKey: "religious-shirdi-sai", key: 'shirdi-sai-q2-q3-2023', levelIndex:2, isLeafParent:true, dateUploaded: '02-13-2023',  roles: ['superuser',"guru"],
        label:  'Shirdi Sai: Q2 Q3 2023', 
        description:`Soo many sketches of Shirdi Sai!!! that I needed to make a separate section with specific period for the last Datta Avatar, Sadguru Shree Sai Samartha
        &nnbsp; *Since June 2021 I have been attempting on sketch every Thursday. Let's see how far this sustains... `,
       emptyMessage: 'Empty Content or Error', breadCrumb:[
           {link: '/view', params:'top-level', label: 'HOME'},
           {link: '/view', params:'religious-shirdi-sai', label: 'Religious: Shirdi Sai Baba'},
           {link: '', params:'shirdi-sai-q2-q3-2023', label: 'Shirdi Sai: Q2 Q3 2023'}
       ] 
      },
    { parentKey: "religious-shirdi-sai", key: 'shirdi-sai-q4-2023-q1-2024', levelIndex:2, isLeafParent:true, dateUploaded: '02-13-2023', roles: ['superuser',"guru"],
        label:  'Shirdi Sai: Q4 2023 - Q1 2024', 
        description:`Soo many sketches of Shirdi Sai!!! that I needed to make a separate section with specific period for the last Datta Avatar, Sadguru Shree Sai Samartha
        &nnbsp; *Since June 2021 I have been attempting on sketch every Thursday. Let's see how far this sustains... `,
       emptyMessage: 'Empty Content or Error', breadCrumb:[
           {link: '/view', params:'top-level', label: 'HOME'},
           {link: '/view', params:'religious-shirdi-sai', label: 'Religious: Shirdi Sai Baba'},
           {link: '', params:'religious-shirdi-sai', label: 'Shirdi Sai: Q4 2023 - Q1 2024'}
       ] 
       },
       { parentKey: "religious-shirdi-sai", key: 'shirdi-sai-q2-q3-2024', levelIndex:2, isLeafParent:true, dateUploaded: '02-13-2023', roles: ['superuser',"guru"],
           label:  'Shirdi Sai: Q2 Q3 2024', 
           description:`Soo many sketches of Shirdi Sai!!! that I needed to make a separate section with specific period for the last Datta Avatar, Sadguru Shree Sai Samartha
           &nnbsp; *Since June 2021 I have been attempting on sketch every Thursday. Let's see how far this sustains... `,
          emptyMessage: 'Empty Content or Error', breadCrumb:[
              {link: '/view', params:'top-level', label: 'HOME'},
              {link: '/view', params:'religious-shirdi-sai', label: 'Religious: Shirdi Sai Baba'},
              {link: '', params:'religious-shirdi-sai', label: 'Shirdi Sai: Shirdi Sai: Q2 Q3 2024'}
          ] 
          },
          { parentKey: "religious-shirdi-sai", key: 'shirdi-sai-q4-2024-q1-2025', levelIndex:2, isLeafParent:true, dateUploaded: '02-13-2023', roles: ['superuser',"guru"],
              label:  'Shirdi Sai Sketches Q4 2024 Q1 2025', 
              description:`Soo many sketches of Shirdi Sai!!! that I needed to make a separate section with specific period for the last Datta Avatar, Sadguru Shree Sai Samartha
              &nnbsp; *Since June 2021 I have been attempting on sketch every Thursday. Let's see how far this sustains... `,
             emptyMessage: 'Empty Content or Error', breadCrumb:[
                 {link: '/view', params:'top-level', label: 'HOME'},
                 {link: '/view', params:'religious-shirdi-sai', label: 'Religious: Shirdi Sai Baba'},
                 {link: '', params:'religious-shirdi-sai', label: 'Shirdi Sai Sketches Q4 2024 Q1 2025'}
             ] 
             },
             { parentKey: "religious-shirdi-sai", key: 'shirdi-sai-q2-q3-2025', levelIndex:2, isLeafParent:true, dateUploaded: '02-13-2023', roles: ['superuser',"guru"],
                label:  'Shirdi Sai Sketches Q2 Q3 2025',                
                description:`With so many sketches of Shirdi Sai (for which I needed to make a separate section with specific periods) this list makes for some tone down.  Going forward, may go every alternate week and/or upload only soft copies(compilations or collages) where Sai is either only or prominent`,            
                emptyMessage: 'Empty Content or Error', breadCrumb:[                  {link: '/view', params:'top-level', label: 'HOME'},                  {link: '/view', params:'religious-shirdi-sai', label: 'Religious: Shirdi Sai Baba'},                  {link: '', params:'religious-shirdi-sai', label: 'Shirdi Sai Sketches Q2 Q3 2025'}              ]               },  
    { parentKey: "religious-shirdi-sai", key: 'baba-themes-1', levelIndex:2, isLeafParent:true, dateUploaded: '02-13-2023', roles: ['superuser',"guru"],
        label:  'Shirdi Sai: Sai Satcharitra', 
        description:`Soo many sketches of Shirdi Sai!!! that I needed to make a separate section with specific period for the last Datta Avatar, Sadguru Shree Sai Samartha
        &nnbsp; *Since June 2021 I have been attempting on sketch every Thursday. Let's see how far this sustains... `,
       emptyMessage: 'Empty Content or Error', breadCrumb:[
           {link: '/view', params:'top-level', label: 'HOME'},
           {link: '/view', params:'religious-shirdi-sai', label: 'Religious: Shirdi Sai Baba'},
           {link: '', params:'baba-themes-1', label: 'Shirdi Sai: Sai Satcharitra'}
       ] 
       },
     

// ### END SPECIAL LISTS
   /*  June 2025 C&O restructuring This list is now hard coded and not compiled and merged with changers-2022 
    { 
        parentKey: "changers", key: 'changers-b4-2022', levelIndex:3, isLeafParent: true, isCompiledList:true, roles: ["any"], 
        label: 'Changers: before 2022', 
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '/view', params:'changers', label: 'Changers'},
            {link: '', params:'changers-b4-2022', label: 'Changers: before 2022'}
        ],
    }, { 
        parentKey: "changers", key: 'changers-2022', levelIndex:3, isLeafParent: true, isCompiledList:true, roles: ["any"], 
        label: 'Changers:2022', 
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '/view', params:'changers', label: 'Changers'},
            {link: '', params:'changers-b4-2022', label: 'Changers: 2022'}
        ],
    }, */
    { 
        parentKey: "changers", key: 'changers-2022-and-before', levelIndex:3,  isLeafParent: true, isCompiledList:true, roles: ["any"],
        label:  'Changers: 2022 and Before',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '/view', params:'changers', label: 'Changers'},
            {link: '', params:'changers-2022-and-before', label: 'Changers: 2022  and Before'}
        ], 
    }, 
     /*  June 2025 C&O restructuring This list is now hard coded and not compiled */
    { 
        parentKey: "changers",key: 'changers-2023', levelIndex:3,  isLeafParent: true,  roles: ["any"],
        label:  'Changers: 2023', 
         
        description: 'Changers for 2023',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '/view', params:'changers', label: 'Changers'},
            {link: '', params:'changers-2023', label: 'Changers: 2023'}
        ], 
    }, 
    { 
        parentKey: "changers",key: 'changers-2024', levelIndex:3, isLeafParent: true,  roles: ["any"],
        label:  'Changers: 2024', 
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '/view', params:'changers', label: 'Changers'},
            {link: '', params:'changers-2024', label: 'Changers: 2024'}
        ], 
    },
    { 
        parentKey: "changers",key: 'changers-2025', levelIndex:3, isLeafParent: true,  roles: ["any"],
        label:  'Changers: 2025', 
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '/view', params:'changers', label: 'Changers'},
            {link: '', params:'changers-2025', label: 'Changers: 2025'}
        ], 
    },
// ### END CHANGERS

 { 
    parentKey: "showpieces", key: 'showpiece',levelIndex:3, isLeafParent: true,  roles: ["any"],
    label:  'The Best: before 2022', 
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '/view', params:'showpieces', label: 'The Best'},
            {link: '', params:'showpiece', label: 'The Best: before 2022'}
        ], 
 },
   { 
    parentKey: "showpieces", key: 'showpiece-2022',levelIndex:3, isLeafParent: true,  roles: ["any"],
    label:  'The Best of 2022', 
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '/view', params:'showpieces', label: 'Changers'},
            {link: '', params:'showpiece-2022', label: 'The Best of 2022'}
            ], 
    },
    { 
        parentKey: "showpieces", key: 'showpiece-2023',levelIndex:3, isLeafParent: true,  roles: ["any"],
        label:  'The Best of 2023', 
            emptyMessage: 'Empty Content or Error', breadCrumb:[
                {link: '/view', params:'top-level', label: 'HOME'},
                {link: '/view', params:'special-lists', label: 'Special Lists'},
                {link: '/view', params:'showpieces', label: 'Changers'},
                {link: '', params:'showpiece-2023', label: 'The Best of 2023'}
            ], 
    },
    { 
        parentKey: "showpieces", key: 'showpiece-2024',levelIndex:3, isLeafParent: true,  roles: ["any"],
        label:  'The Best of 2024', 
            emptyMessage: 'Empty Content or Error', breadCrumb:[
                {link: '/view', params:'top-level', label: 'HOME'},
                {link: '/view', params:'special-lists', label: 'Special Lists'},
                {link: '/view', params:'showpieces', label: 'Changers'},
                {link: '', params:'showpiece-2024', label: 'The Best of 2024'}
            ], 
    },
    { 
        parentKey: "showpieces", key: 'showpiece-2025',levelIndex:3, isLeafParent: true,  roles: ["any"],
        label:  'The Best of 2025', 
            emptyMessage: 'Empty Content or Error', breadCrumb:[
                {link: '/view', params:'top-level', label: 'HOME'},
                {link: '/view', params:'special-lists', label: 'Special Lists'},
                {link: '/view', params:'showpieces', label: 'Changers'},
                {link: '', params:'showpiece-2025', label: 'The Best of 2025'}
            ], 
    },
     /*  June 2025 C&O restructuring 
         - 'latest-uploads-timewise' changed to 'most-recently-uploaded' and move up in menu tree
      - 'latest-uploads-themewise' put in cold storage - stopped making general sense and too much to maintain; too little ROI
    
    { 
        parentKey: "latest-uploads", key: 'latest-uploads-themewise', levelIndex:3, isLeafParent: true, isCompiledList:true, roles: ["any"], 
        label: 'Latest Uploads: Theme', 
        description:`Images of latest drawings uploaded by theme`,
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '/view', params:'latest-uploads', label: 'Latest Uploads'},
            {link: '', params:'latest-uploads-themewise', label: 'Latest Uploads: Theme'}
        ],
    },
    */
// ### END SHOWPIECES
 {
    parentKey:"otherbeings-places-events", key: "religion-and-guru", levelIndex:2,isLeafParent:true, roles:['non-religious'],
    label: "Some Religious : Deites, Spiritual Mystics..",
    description:`A collection of selected sketches of Gods and Godesses, Saints and Gurus`,
    
    emptyMessage: 'Empty Content or Error', breadCrumb:[
        {link: '/view', params:'top-level', label: 'HOME'},
        {link: '/view', params:'otherbeings-places-events', label: 'Beings, Places and Themes'},
        {link: '', params:'religion-and-guru', label: 'Some Religious : Deites, Spiritual Mystics..'}
    ],
    
},
{
    parentKey:"otherbeings-places-events", key: "people-places", levelIndex:2,isLeafParent:true, roles:['any'],
    label: "Famous Personalities",
    description:`Faces, figures sketching started almost at the start of my 'pandemic caused' reconnect with this hobby
    Some off the spur of the moment, spontaneous, others due to their deaths (and we have had a lot of that!!)
    Some, in fact, many are <em><strong>pretty out of shape</strong></em>, but <em>still</em> included because of the significance`,
    roleBasedDescription:`ADD:Also some chosen religious and spirtual themes: NOTS superuser, sanatan,guru'`,
    
    emptyMessage: 'Empty Content or Error', breadCrumb:[
        {link: '/view', params:'top-level', label: 'HOME'},
        {link: '/view', params:'otherbeings-places-events', label: 'Beings, Places and Themes'},
        {link: '', params:'people-places', label: 'Famous Personalities'}
    ],
    
},
{
    parentKey:"otherbeings-places-events", key: "flora-and-fauna", levelIndex:2,isLeafParent:true, roles:['any'],
    label: "The Animal and plant kingdom. ",
    description:`The Animal and plant kingdom. `,
    roleBasedDescription:`ADD:Also some chosen religious and spirtual themes: NOTS superuser, sanatan,guru'`,
    
    emptyMessage: 'Empty Content or Error', breadCrumb:[
        {link: '/view', params:'top-level', label: 'HOME'},
        {link: '/view', params:'otherbeings-places-events', label: 'Beings, Places and Themes'},
        {link: '', params:'flora-and-fauna', label: 'The Animal and plant kingdom. '}
    ],
    
},
{
    parentKey:"otherbeings-places-events", key: "places-scenes-objects", levelIndex:2,isLeafParent:true, roles:['superuser','living','any'],
    label: "Places, Scenes and Objects",
    description:`Faces, figures sketching started almost at the start of my 'pandemic caused' reconnect with this hobby
    Some off the spur of the moment, spontaneous, others due to their deaths (and we have had a lot of that!!)
    Some, in fact, many are <em><strong>pretty out of shape</strong></em>, but <em>still</em> included because of the significance`,
    roleBasedDescription:`ADD:Also some chosen religious and spirtual themes: NOTS superuser, sanatan,guru'`,
    
    emptyMessage: 'Empty Content or Error', breadCrumb:[
        {link: '/view', params:'top-level', label: 'HOME'},
        {link: '/view', params:'otherbeings-places-events', label: 'Beings, Places and Themes'},
        {link: '', params:'places-scenes-objects', label: 'Places, Scenes and Objects'}
    ],
    
}, {
    parentKey:"otherbeings-places-events", key: "themes-misc", levelIndex:2,isLeafParent:true, roles:['superuser','non-living','any'],
    label: "Themes",
    description:`Some theme sketches with components, some as-yet 'one-off's`,
    
    emptyMessage: 'Empty Content or Error', breadCrumb:[
        {link: '/view', params:'top-level', label: 'HOME'},
        {link: '/view', params:'otherbeings-places-events', label: 'Beings, Places and Themes'},
        {link: '', params:'themes-misc', label: 'Themes'}
    ],
    
},  {
    parentKey:"otherbeings-places-events", key: "animate-to-be-oragnized1", levelIndex:2,isLeafParent:true, roles:['superuser','any'],
    label: "Uncategorized sketches",
    description:`Pending formal categorization`,
    
    emptyMessage: 'Empty Content or Error', breadCrumb:[
        {link: '/view', params:'top-level', label: 'HOME'},
        {link: '/view', params:'otherbeings-places-events', label: 'Beings, Places and Themes'},
        {link: '', params:'animate-to-be-oragnized1', label: 'Uncategorized sketches'}
    ],
    
},
 { 
    parentKey: 'salaam-mumbai',   key: 'mumbai-meri-jaan', levelIndex:2,isLeafParent:true,  roles: ['non-living',  'non-religious', 'any'], 
        label:  'Mumbai Meri Jaan',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'salaam-mumbai', label: 'Salaam Mumbai'},
            {link: ' ', params:'mumbai-meri-jaan', label: 'Mumbai Meri Jaan'}
        ],},
        { 
            parentKey: 'salaam-mumbai',   key: 'mumbai-meri-jaan-2', levelIndex:2,isLeafParent:true,  roles: ['non-living',  'non-religious', 'any'], 
                label:  'Mumbai Meri Jaan(2)',
                emptyMessage: 'Empty Content or Error', breadCrumb:[
                    {link: '/view', params:'top-level', label: 'HOME'},
                    {link: '/view', params:'salaam-mumbai', label: 'Salaam Mumbai'},
                    {link: ' ', params:'mumbai-meri-jaan', label: 'Mumbai Meri Jaan(2)'}
                ],},
    // #### TRANSPORT AND MACHINE DESCENDANTS
        {
            parentKey:"transport-and-machines", key: "railways", levelIndex:2,isLeafParent:false, roles:['non-living',  'non-religious','any'],
            label: "Railways",
            description:`Railways: As on June 2024 this is mainly Indian Railways`,
            
            emptyMessage: 'Empty Content or Error', breadCrumb:[
                {link: '/view', params:'top-level', label: 'HOME'},
                {link: '/view', params:'transport-and-machines', label: 'Transport And Machines'},
                {link: '', params:'railways', label: 'Railways'}
            ],
        },  {
            parentKey:"transport-and-machines", key: "machines-others", levelIndex:2,isLeafParent:false, roles:['non-living',  'non-religious','any'],
            label: "Other Machines",
            description:`As on June 2024, this covers aircraft, ships and cars`,
            
            emptyMessage: 'Empty Content or Error', breadCrumb:[
                {link: '/view', params:'top-level', label: 'HOME'},
                {link: '/view', params:'transport-and-machines', label: 'Transport And Machines'},
                {link: '', params:'machines-others', label: 'Other Machines'}
            ],
        },
     // #### RAIL AND DESCENDANTS   
        {
        parentKey:"railways", key: "trains", levelIndex:3,isLeafParent:true, roles:['non-living',  'non-religious','any'],
        label: "General Scenes",
        description:`Railways: General Scenes`,
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'transport-and-machines', label: 'Transport And Machines'},
            {link: '/view', params:'railways', label: 'Railways'},
            {link: '', params:'trains', label: 'General Scenes'}
        ],
    }, {
        parentKey:"railways", key: "trains-ir-alcos", levelIndex:3,isLeafParent:true, roles:['non-living',  'non-religious','any'],
        label: "ALCO WDMx: a tribute",
        description:`Dedicated to the legendary Indian Railway workhorse the WDM2 and later variants (Wide - broad guage, Diesel - diesel electric loco, Mixed - Goods and Passenger) On collaboration with Alco (USA) the first locos entered service in 1962 imported, then manufacture began in 1964j`,
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'transport-and-machines', label: 'Transport And Machines'},
            {link: '/view', params:'railways', label: 'Railways'},
            {link: '', params:'trains-ir-alcos', label: 'ALCO WDMx: a tribute'}
        ],
    }, {
        parentKey:"railways", key: "trains-ir-steam", levelIndex:3,isLeafParent:true, roles:['non-living',  'non-religious','any'],
        label: "Indian Railways: The Glorious Steam Era",
        description:`Dedicated to the Glorious Steam Era of the Indian Railway as on May 2024 mostly focussed on WP and WG locos`,
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'transport-and-machines', label: 'Transport And Machines'},
            {link: '/view', params:'railways', label: 'Railways'},
            {link: '', params:'trains-ir-steam', label: 'Indian Railways: The Glorious Steam Era'}
        ],
    }, {
        parentKey:"railways", key: "trains-ir-special-trains", levelIndex:3,isLeafParent:true, roles:['non-living',  'non-religious','any'],
        label: "Landmark Trains",
        description:`Some Special and Legendary Trains. As most of this category domain, it covers IR. As of November 2024, will add special trainsets like Vande Bharat, Shatabdi, ICE. Last mentioned is an exception to the IR dominated contentm `,
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'transport-and-machines', label: 'Transport And Machines'},
            {link: '/view', params:'railways', label: 'Railways'},
            {link: '', params:'trains-ir-special-trains', label: 'Landmark Trains'}
        ],
    }
    ,  {
        parentKey:"machines-others", key: "planes-ships-cars", levelIndex:3,isLeafParent:true, roles:['non-living',  'non-religious','any'],
        label: "Aircraft, Ships and Cars",
        description:`Planes, ships and cars`,
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'transport-and-machines', label: 'Transport And Machines'},
            {link: '/view', params:'machines-others', label: 'Other Machines'},
            {link: '', params:'planes-ships-cars', label: 'Planes, ships and cars'}
        ],
    },  {
        parentKey:"machines-others", key: "planes-ships-cars-2", levelIndex:3,isLeafParent:true, roles:['non-living',  'non-religious','any'],
        label: "Aircraft, Ships and Cars(2)",
        description:`Planes, ships and cars `,
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'transport-and-machines', label: 'Transport And Machines'},
            {link: '/view', params:'machines-others', label: 'Other Machines'},
            {link: '', params:'planes-ships-cars-2', label: 'Planes, ships and cars(2)'}
        ],
    }, {
        parentKey:"machines-others", key: "majestic-lifters-legendary-carriers", levelIndex:3,isLeafParent:true, roles:['non-living',  'non-religious','any'],
        label: "Majestic Lifters Legendary Carriers",
        description:`A Mix of the Colossi and Legendary Cargo planes and Airliners.. AN225, A380, 747 to DC3 and others. This is a 'full cycle'collection, where the online matches the sketchbook insertion of the 'hard copy' physical sketchat least for Dec 2024 onward; others will circle around and add. **Dunwell A4 size 24 pocket (48 sheet) presentation book. 'Aqua Green(?)' cover**`,
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'transport-and-machines', label: 'Transport And Machines'},
            {link: '/view', params:'machines-others', label: 'Other Machines'},
            {link: '', params:'majestic-lifters-legendary-carriers', label: 'Majestic Lifters Legendary Carriers'}
        ],
    }/*,{
        parentKey:"machines-others", key: "special-aircraft-series", levelIndex:3,isLeafParent:true, roles:['non-living',  'non-religious','any'],
        label: "Special Aircraft Types",
        description:`Special Aircraft in different liveries and formats - A380, 747 and others`,
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'transport-and-machines', label: 'Transport And Machines'},
            {link: '/view', params:'machines-others', label: 'Other Machines'},
            {link: '', params:'special-aircraft-series', label: 'Special Aircraft Types'}
        ],
    }  */
,{
parentKey: 'machines-others',key: 'exotic-and-legendary-cars', isLeafParent: true, levelIndex: 3, roles:["non-living","non-religious","any"],
label: 'Exotic And Legendary Cars',  description: `A special section for Exotic and Legendary Cars. From the super speeders like Koenigsegg, Ferrari to Rolls Royce and Bentley. Also included some icons of India's roads. This is a 'full cycle'collection, where the online matches the sketchbook insertion`,
breadCrumb:[
{"link":"/view","params":"top-level","label":"HOME"},
{"link":"/view","params":"transport-and-machines","label":"Transport And Machines"},
{"link":"/view","params":"machines-others","label":"Other Machines"},
{"link":"","params":"exotic-and-legendary-cars","label":"Exotic And Legendary Cars"},
], emptyMessage: 'No Content'
}
,{
parentKey: 'alag-grouping-full-cycle',key: 'charcoal-times-other-colors-shines', isLeafParent: true, levelIndex: 3, roles:["any"],
description: `First drawings using charcoal pencils started end Feb 1st week March 2025. From only charcoal (hard, soft, medium, white) to charcoal with other drawing elements color and metal color pencils. I'll also be making an effort to sign my drawings going forward.**Dunwell A4 size 24 pocket (48 sheet) presentation book. White cover**`,
label: 'Charcoal Times Other Colors Shines',  
breadCrumb:[
{"link":"/view","params":"top-level","label":"HOME"},
{"link":"/view","params":"special-lists","label":"Special Lists"},
{"link":"/view","params":"alag-grouping-full-cycle","label":"Alag Grouping Full Cycle"},
{"link":"","params":"charcoal-times-other-colors-shines","label":"Charcoal Times Other Colors Shines"},
], emptyMessage: 'No Content'
}
,{
parentKey: 'alag-grouping-full-cycle',key: 'shades-and-shines-other-colors-1', isLeafParent: true, levelIndex: 3, roles:["any"],
description: `First New entry in 2025, to the 'alag' (different) series, set of what I like to think high quality sketches featuring shading and attempted shine effect. Twist here is that these are using a single 'other' color for each sketch. In addition to other stated 'alag' features, this collection is in ascending order of latest update. Jan 2 2025 onward.**Dunwell A4 size 24 pocket (48 sheet) presentation book. 'Dark Blue' cover** `,
label: 'Shades And Shines Other Colors 1',  
breadCrumb:[
{"link":"/view","params":"top-level","label":"HOME"},
{"link":"/view","params":"special-lists","label":"Special Lists"},
{"link":"/view","params":"alag-grouping-full-cycle","label":"Alag Grouping Full Cycle"},
{"link":"","params":"shades-and-shines-other-colors-1","label":"Shades And Shines Other Colors 1"},
], emptyMessage: 'No Content'
}
,{
parentKey: 'religious-gurus-and-mystics',key: 'dattavatar-2', isLeafParent: true, levelIndex: 2, roles:["superuser","guru"],
label: 'Spiritual Souls:Datta Lineage, Sikhs, East of India 2',  description: `श्री गुरु स्मरण ... श्री गुरु नमन ... श्री गुरु चरण ... श्री गुरु शरण .. अवधूत चिंतन ... श्री गुरुदेव दत्त
Second (>= Dec 18 2024) list Guru's of Lord Dattatreya lineage and Sikh Gurus... there are likely to be maybe a couple of sketches of Shirdi Sai here; I have many of them, so have separate sections for the same.. 
Also increasing numbers of Swami Samartha sketches. Sketches `,
breadCrumb:[
{"link":"/view","params":"top-level","label":"HOME"},
{"link":"/view","params":"religious-gurus-and-mystics","label":"Religious: Gurus and Mystics"},
{"link":"","params":"dattavatar-2","label":"Spiritual Souls:Datta Lineage, Sikhs, East of India 2"},
], emptyMessage: 'No Content'
}
,{
parentKey: 'alag-grouping-full-cycle',key: 'shades-and-shines-1', isLeafParent: true, levelIndex: 3, roles:["any"],
label: 'Shades And Shines 1',  description: `Kickstart of the 'alag' (different) series, set of what I like to think high quality sketches featuring shading and attempted shine effect. Using the H, HB, and B series shading black pencils. In addition to other stated 'alag' features, this collection is in ascending order of latest update. November 19 2024 onward **Dunwell A4 size 24 pocket (48 sheet) presentation book. 'Maroon' cover**`,
breadCrumb:[
{"link":"/view","params":"top-level","label":"HOME"},
{"link":"/view","params":"special-lists","label":"Special Lists"},
{"link":"/view","params":"alag-grouping-full-cycle","label":"Alag Grouping Full Cycle"},
{"link":"","params":"shades-and-shines-1","label":"Shades And Shines 1"},
], emptyMessage: 'No Content'
}
//
//
// NEW INSERTS
,{
    parentKey: 'special-lists',key: 'soft-copies-and-compilations', isLeafParent: false, levelIndex: 2, roles:['any'],
    label: 'Soft Copies And Compilations',  description: `These are not 'drawing drawings as such, but a collection of collages, templates and 'software edited' applications of templates, etc. This node is used as a pass through for reducing clutter.(NOTE: they will not be added in chronological order)`,
    breadCrumb:[
        {"link":"/view","params":"top-level","label":"HOME"},
        {"link":"/view","params":"special-lists","label":"Special Lists"},
        {"link":"","params":"soft-copies-and-compilations","label":"Soft Copies And Compilations"},],
}
,{
    parentKey: 'soft-copies-and-compilations',key: 'soft-copies-and-compilations-1', isLeafParent: true, levelIndex: 3, roles:['any'],
    label: 'Soft Copies And Compilations:1',  description: `The 1st compiled list: ... collection of collages, templates and 'software edited' applications of templates, etc. ..(NOTE: they will not be added in chronological order)`,
    breadCrumb:[
        {"link":"/view","params":"top-level","label":"HOME"},
        {"link":"/view","params":"special-lists","label":"Special Lists"},
        {"link":"/view","params":"soft-copies-and-compilations","label":"Soft Copies And Compilations"},
        {"link":" ","params":"soft-copies-and-compilations-1","label":"Soft Copies And Compilations:1"},],
}
,{
    parentKey: 'special-lists',key: 'alag-grouping-full-cycle', isLeafParent: false, levelIndex: 2, roles:["any"],
    label: 'Alag Grouping Full Cycle',  description: `'Alag' means different in Hindi.. November 2024 onward, I intend creating a grouping of sketches more in execution than content. For example, launch is using sketches using shading and trying to get shining - using black and white shading pencils. 
    ALSO 'full life cycle means including the physical drawing in the sketch book in more or less the same order. Unlike others, only one version per entry will be uploaded. The drawings here are also what I think top rated. Mostly will be stored in Dunwell A4 size 24 pocket (48 sheet) presentation book.`,
    breadCrumb:[
    {"link":"/view","params":"top-level","label":"HOME"},
    {"link":"/view","params":"special-lists","label":"Special Lists"},
    {"link":"","params":"alag-grouping-full-cycle","label":"Alag Grouping Full Cycle"},
    ], emptyMessage: 'No Content'
    }
    ,{
        parentKey: 'special-lists',key: 'group-by-physical-scrapbook-album', isLeafParent: false, levelIndex: 2, roles:["any"],
        label: 'Group by (Physical, Scrapbook) Album',  
        description: `These lists arrange drawings as they are orderd in physical albums/scrapbooks. No new sketches; these have been already uploaded on this website. 
        Note: The arrangement, categorization, storage, etc of the online collections under the category introduced from 'Alag Grouping Full Cycle' are the same as the 'hard copy' storage in scrapbooks. <br/>
        Some others having the same ordering will be there; these include the term 'full life cycle' in the description `,
        breadCrumb:[
        {"link":"/view","params":"top-level","label":"HOME"},
        {"link":"/view","params":"special-lists","label":"Special Lists"},
        {"link":"","params":"group-by-physical-scrapbook-album","label":"Group by (Physical, Scrapbook) Album"},
        ], emptyMessage: 'No Content'
        }
        ,{
            parentKey: 'group-by-physical-scrapbook-album',key: 'the-divine-in-colors-so-fine', isLeafParent: true, levelIndex: 3,  roles:["superuser","guru"],
            label: 'The Divine in colors so fine',  
            description: `Religious and Spiritual Sketches in color. 
            This is picking up after a long gap, browsing through the collection of loosely kept sheets of sketches, and puting them in a scrapbook.
            I gleaned out high quality color sketches of Deities and Gurus to add.**Dunwell A4 size 24 pocket (48 sheet) presentation book. White cover**`,
            breadCrumb:[
            {"link":"/view","params":"top-level","label":"HOME"},
            {"link":"/view","params":"special-lists","label":"Special Lists"},
            {"link":"/view","params":"group-by-physical-scrapbook-album","label":"Group by (Physical, Scrapbook) Album"},
            {"link":"","params":"the-divine-in-colors-so-fine","label":"The Divine in colors so fine"},
            ], emptyMessage: 'Coming soon!!'
            }

        ,{
            parentKey: 'group-by-physical-scrapbook-album',key: 'the-first-album', isLeafParent: true, levelIndex: 3,  roles:["superuser","guru"],
            label: 'The First Album',  
            description: `The First Album/Scrapbook to fill with drawings.
            This has varied content. People, Gods and Gurus. Color and Black and white pencils **Dunwell A3 size 24 pocket (48 sheet) presentation book. Black cover**`,
            breadCrumb:[
            {"link":"/view","params":"top-level","label":"HOME"},
            {"link":"/view","params":"special-lists","label":"Special Lists"},
            {"link":"/view","params":"group-by-physical-scrapbook-album","label":"Group by (Physical, Scrapbook) Album"},
            {"link":"","params":"the-first-album","label":"The First Album"},
            ], emptyMessage: 'Coming soon!!'
            },{
            parentKey: 'group-by-physical-scrapbook-album',key: 'the-third-album', isLeafParent: true, levelIndex: 3,  roles:["superuser","guru"],
            label: 'The THIRD Album',  
            description: `The Third Album/Scrapbook to fill with drawings.
            This has varied content. People, Gods and Gurus. Color and Black and white pencils AND 1+ Charcoal laced A3 **Dunwell A3 size 24 pocket (48 sheet) presentation book. Black cover**`,
            breadCrumb:[
            {"link":"/view","params":"top-level","label":"HOME"},
            {"link":"/view","params":"special-lists","label":"Special Lists"},
            {"link":"/view","params":"group-by-physical-scrapbook-album","label":"Group by (Physical, Scrapbook) Album"},
            {"link":"","params":"the-third-album","label":"The Third Album"},
            ], emptyMessage: 'Coming soon!!'
            }
    /*
,{
parentKey: 'alag-grouping-full-cycle',key: 'shades-and-shines-1', isLeafParent: true, levelIndex: 3, roles:["any"],
label: 'Shades And Shines 1',  description: `Kickstart of the 'alag' (different) series, set of what I like to think high quality sketches featuring shading and attempted shine effect. Using the H, HB, and B series shading black pencils. In addition to other stated 'alag' features, this collection is in ascending order of latest update. November 19 2024 onward   `,
breadCrumb:[
{"link":"/view","params":"top-level","label":"HOME"},
{"link":"/view","params":"special-lists","label":"Special Lists"},
{"link":"/view","params":"alag-grouping-full-cycle","label":"Alag Grouping Full Cycle"},
{"link":"","params":"shades-and-shines-1","label":"Shades And Shines 1"},
], emptyMessage: 'No Content'
}
,{
parentKey: 'special-lists',key: 'alag-grouping-full-cycle', isLeafParent: false, levelIndex: 2, roles:["any"],
label: 'Alag Grouping Full Cycle',  description: `'Alag' means different in Hindi.. This November 2024, I intend grouping sketches more in execution than content. For example, launch is using sketches using shading and trying to get shining - using black and white shading pencils. 
ALSO 'full life cycle means including the physical drawing in the sketch book in more or less the same order. Unlike others, only one version per entry will be uploaded`,
breadCrumb:[
{"link":"/view","params":"top-level","label":"HOME"},
{"link":"/view","params":"special-lists","label":"Special Lists"},
{"link":"","params":"alag-grouping-full-cycle","label":"Alag Grouping Full Cycle"},
], emptyMessage: 'No Content'
}


 ,{
parentKey: 'special-lists',key: 'alag-grouping-full-cycle', isLeafParent: false, levelIndex: 2, roles:["any"],
label: 'Alag Grouping Full Cycle',  description: `'Alag' means different in Hindi.. This November 2024, I intend grouping sketches more in execution than content. For example, launch is using sketches using shading and trying to get shining - using black and white shading pencils `,
breadCrumb:[
{"link":"/view","params":"top-level","label":"HOME"},
{"link":"/view","params":"special-lists","label":"Special Lists"},
{"link":"","params":"alag-grouping-full-cycle","label":"Alag Grouping Full Cycle"},
], emptyMessage: 'No Content'
}*/
,{
parentKey: 'religious-shree-ganesh',key: 'ganesh-gte-11-2024', isLeafParent: true, levelIndex: 2, roles:["superuser","sanatani"],
label: 'Ganesh Gte 11 2024',  description: 'Ganesh centered drawings from November 2024 ',
breadCrumb:[
{"link":"/view","params":"top-level","label":"HOME"},
{"link":"/view","params":"religious-shree-ganesh","label":"Shree Ganesh"},
{"link":"","params":"ganesh-gte-11-2024","label":"Ganesh Gte 11 2024"},
], emptyMessage: 'No Content'
}

    
]
