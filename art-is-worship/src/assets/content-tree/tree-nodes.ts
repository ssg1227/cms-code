import { BreadCrumb } from "./bread-crumbs";
// CMS picture gallery hierarchy structure
// This is a tree structure, where the leaf key will load the 
// JSON containing a picture list
// This modifies and enhances the menu-tree logic of the old app
export interface TreeNodeElement {
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
        description:`A Year-wise extraction of some of my best efforts,.`,
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '', params:'showpieces', label: 'The Best'}
        ],
    }, 
     
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

    { 
        parentKey: "changers", key: 'changers-b4-2022', levelIndex:3, isLeafParent: true, isCompiledList:true, roles: ["any"], 
        label: 'Changers: before 2022', 
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '/view', params:'changers', label: 'Changers'},
            {link: '', params:'changers-b4-2022', label: 'Changers: before 2022'}
        ],
    },
    { 
        parentKey: "changers", key: 'changers-2022', levelIndex:3,  isLeafParent: true, isCompiledList:true, roles: ["any"],
        label:  'Changers: 2022',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '/view', params:'changers', label: 'Changers'},
            {link: '', params:'changers-2022', label: 'Changers: 2022'}
        ], 
    },
    { 
        parentKey: "changers",key: 'changers-2023', levelIndex:3,  isLeafParent: true,  roles: ["any"],
        label:  'Changers: 2023',  
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
        parentKey: "latest-uploads", key: 'latest-uploads-themewise', levelIndex:3, isLeafParent: true, isCompiledList:true, roles: ["any"], 
        label: 'Latest Uploads: Theme', 
        description:`Images of latest drawings uploaded by theme`,
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '/view', params:'latest-uploads', label: 'Latest Uploads'},
            {link: '', params:'latest-uploads-themewise', label: 'Latest Uploads: Theme'}
        ],
    }
    ,
    { 
        parentKey: "latest-uploads", key: 'latest-uploads-timewise', levelIndex:3, isLeafParent: true, isCompiledList:true, roles: ["any"], 
        label: 'Latest Uploads: By Timeline', 
        description:`Images of drawings uploaded the last 60 days.`,
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '/view', params:'latest-uploads', label: 'Latest Uploads'},
            {link: '', params:'latest-uploads-timewise', label: 'Latest Uploads: By Timeline'}
        ],
    },
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
    
}, {
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
        description:`Some Special and Legendary Trains. As most of this category domain, it covers IR`,
        
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
    },
]