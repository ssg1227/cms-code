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
    description?:string ;
    roleBasedDescription?: string;
    isCompiledList?:boolean; // use some criteria to load selected images like latest uploads or top rated
    isLeafParent:boolean; // 'true' = load the image list for that menu kee, 'false' = top or middle node
    accessible?:string[]; // roles match users roles many to many match
    
}

export const MenuTreeElements:TreeNodeElement[] = [
    // #### ROOT
    {
        key:'top-level', levelIndex:0,isLeafParent:false,accessible:["all"], // roles match users roles many to many match
        breadCrumb:[
            {link: '', params:'top-level', label: 'HOME'}
        ],
        label:"HOME PAGE",
    },
    // #### LEVEL 1
    {
        parentKey:'top-level',key: "special-lists", levelIndex:1,isLeafParent:false, accessible:['all'],
        label: "Special Lists", 
        description:'Extracted works from the entire collection like best attempts, something new, latest sketches, etc',
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'special-lists', label: 'Special Lists'}
        ],    
    }, 
    {
        parentKey:"top-level", key: "religious-shree-ganesh", levelIndex:1,isLeafParent:false, accessible:['superuser','sanatani'],
        label: "Religious: Shree Ganesh",
        description:'Sketches of, and including Shree Ganesh',
        
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'religious-shree-ganesh', label: 'Shree Ganesh'}
        ],
        
    }, 
    {
        parentKey:"top-level", key: "religious-other-deities", levelIndex:1,isLeafParent:false, accessible:['superuser','sanatani'],
        label: "Religious: Other Deities",
        description:'Sketches of other Gods and Goddesses',
        
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'religious-other-deities', label: 'Religious: Other Deities'}
        ],
        
    }, 
    {
        parentKey:"top-level", key: "religious-gurus-mystics", levelIndex:1,isLeafParent:false, accessible:['superuser','sanatani','guru'],
        label: "Religious: Gurus and Mystics",
        description:'Sketches of Spiritual Masters, Mystics - Lord Dattatreya and Lineage, Sikh Gurus, Others',
        
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'religious-gurus-mystics', label: 'Religious: Gurus and Mystics'}
        ],
        
    }, 
    {
        parentKey:"top-level", key: "religious-shirdi-sai", levelIndex:1,isLeafParent:false, accessible:['superuser','sanatani','guru'],
        label: "Religious: Shirdi Sai Baba",
        description:'Sketches of Sadguru Shirdi Sai Baba. Sooo many sketches, this warranted a separate section at this level',
        
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'religious-gurus-mystics', label: 'Religious: Gurus and Mystics'}
        ],
        
    }, 
    {
        parentKey:"top-level", key: "people-places-themes", levelIndex:1,isLeafParent:false, accessible:['superuser','people'],
        label: "Religious: Shirdi Sai Baba",
        description:`Pictures of the living - famous human personalities, other living beings (as in May 2024 occasional). Places and famous structures. Events, Misc. Themes. 
                    (But Mumbai City related drawing warrant a separate, independent group!!)`,
        roleBasedDescription:`ADD:Also some chosen religious and spirtual themes: NOTS superuser, sanatan,guru'`,
        
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'religious-shirdi-sai', label: 'Religious: Shirdi Sai Baba'}
        ],
        
    }, 
    {
        parentKey:"top-level", key: "transport-and-machines", levelIndex:1,isLeafParent:false, accessible:['all'],
        label: "Transport And Machines",
        description:`Trains, Cars, Planes, Ships, Military equipment. Anything that is mechanical`,
        
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'transport-and-machines', label: 'Transport And Machines'}
        ],
        
    }, 
    {
        parentKey:"top-level", key: "mumbai-meri-jaan", levelIndex:1,isLeafParent:false, accessible:['all'],
        label: "Salaam Mumbai",
        description:`Dedication to the City that is part of me that I am part of. Wherever I am`,
        
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'mumbai-meri-jaan', label: 'Salaam Mumbai'}
        ],
        
    }, 
    {
        parentKey:"top-level", key: "misc", levelIndex:1,isLeafParent:false, accessible:['all'],
        label: "Misc.",
        description:`Those items which is pending, or are too few to have a separate category`,
        
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'misc', label: 'Misc.'}
        ],
        
    },
    { 
        parentKey: "special-lists", key: 'changers', levelIndex:2, isLeafParent: false, isCompiledList:true, accessible: ["all"], 
        label: 'Changers', 
        description:`These are landmark sketches which I consider a significant change or turn in the progress of my sketches, or maybe a special reason. 
                    These may not be my best efforts but are a new element or entity that was introduced in these drawings.`,
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '', params:'changers', label: 'Changers'}
        ],
    }, 
    { 
        parentKey: "special-lists", key: 'showpieces', levelIndex:2, isLeafParent: false, isCompiledList:true, accessible: ["all"], 
        label: 'The Best', 
        description:`A Year-wise extraction of some of my best efforts,.`,
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '', params:'showpieces', label: 'The Best'}
        ],
    }, 
     
    { 
        parentKey: "special-lists", key: 'latest-uploads', levelIndex:2, isLeafParent: true, isCompiledList:true, accessible: ["all"], 
        label: 'Latest Uploads', 
        description:`Images of drawings uploaded the last 60 days. If there are few, then this will upload latest 2-3 sketches from each theme`,
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '', params:'latest-uploads', label: 'Latest Uploads'}
        ],
    },
// ### END SPECIAL LISTS
    { 
        parentKey: "changers", key: 'changers-b4-2022', levelIndex:3, isLeafParent: true, isCompiledList:true, accessible: ["all"], 
        label: 'Changers: before 2022', 
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '/view', params:'changers', label: 'Changers'},
            {link: '', params:'changers-b4-2022', label: 'Changers: before 2022'}
        ],
    },
    { 
        parentKey: "changers", key: 'changers-2022', levelIndex:3,  isLeafParent: true, isCompiledList:true, accessible: ["all"],
        label:  'Changers: 2022',
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '/view', params:'changers', label: 'Changers'},
            {link: '', params:'changers-2022', label: 'Changers: 2022'}
        ], 
    },
    { 
        parentKey: "changers",key: 'changers-2023', levelIndex:3,  isLeafParent: true,  accessible: ["all"],
        label:  'Changers: 2023',  
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '/view', params:'changers', label: 'Changers'},
            {link: '', params:'changers-2023', label: 'Changers: 2023'}
        ], 
    },
    { 
        parentKey: "changers",key: 'changers-2024', levelIndex:3, isLeafParent: true,  accessible: ["all"],
        label:  'Changers: 2024', 
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '/view', params:'changers', label: 'Changers'},
            {link: '', params:'changers-2024', label: 'Changers: 2024'}
        ], 
    },
// ### END CHANGERS

 { 
    parentKey: "showpieces", key: 'showpiece',levelIndex:3, isLeafParent: true,  accessible: ["all"],
    label:  'The Best: before 2022', 
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '/view', params:'showpieces', label: 'The Best'},
            {link: '', params:'showpiece', label: 'The Best: before 2022'}
        ], 
 },
   { 
    parentKey: "showpieces", key: 'showpiece-2022',levelIndex:3, isLeafParent: true,  accessible: ["all"],
    label:  'The Best of 2022', 
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'},
            {link: '/view', params:'showpieces', label: 'Changers'},
            {link: '', params:'showpiece-2022', label: 'The Best of 2022'}
            ], 
    },
    { 
        parentKey: "showpieces", key: 'showpiece-2023',levelIndex:3, isLeafParent: true,  accessible: ["all"],
        label:  'The Best of 2023', 
            breadCrumb:[
                {link: '/view', params:'top-level', label: 'HOME'},
                {link: '/view', params:'special-lists', label: 'Special Lists'},
                {link: '/view', params:'showpieces', label: 'Changers'},
                {link: '', params:'showpiece-2023', label: 'The Best of 2023'}
            ], 
    },
    { 
        parentKey: "showpieces", key: 'showpiece-2024',levelIndex:3, isLeafParent: true,  accessible: ["all"],
        label:  'The Best of 2024', 
            breadCrumb:[
                {link: '/view', params:'top-level', label: 'HOME'},
                {link: '/view', params:'special-lists', label: 'Special Lists'},
                {link: '/view', params:'showpieces', label: 'Changers'},
                {link: '', params:'showpiece-2024', label: 'The Best of 2024'}
            ], 
    },
 
// ### END SHOWPIECES
    
   
    {
        parentKey:"religious-shree-ganesh", key: "shree-ganesh-b4-q4-2021", levelIndex:3, isLeafParent:true, accessible:['superuser','sanatani'],
        label: "Shree Ganesh Before Q4 2021",
        description:'Sketches of, and including Shree Ganesh prior to Q4 2021', 
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'religious-shree-ganesh', label: 'Shree Ganesh'},
            {link: '', params:'shree-ganesh-b4-q4-2021', label: 'Shree Ganesh Before Q4 2021'}
        ],
        
    },
    {
        parentKey:"religious-shree-ganesh", key: "shree-ganesh-gte-q1-2023", levelIndex:3, isLeafParent:true, accessible:['superuser','sanatani'],
        label: "Shree Ganesh Q1 2023 onward",
        description:'Sketches of, and including Shree Ganesh Q1 2023 to Q1 2024', 
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'religious-shree-ganesh', label: 'Shree Ganesh'},
            {link: '', params:'shree-ganesh-gte-q1-2023', label: 'Shree Ganesh Q1 2023 onward'}
        ],
        
    },
    {
        parentKey:"religious-shree-ganesh", key: "shree-ganesh-gte-q1-2024", levelIndex:3, isLeafParent:true, accessible:['superuser','sanatani'],
        label: "Shree Ganesh Q1 2024 onward",
        description:'Sketches of, and including Shree Ganesh Q1 2023 onward', 
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'religious-shree-ganesh', label: 'Shree Ganesh'},
            {link: '', params:'shree-ganesh-b4-q4-2021', label: 'Shree Ganesh Q1 2024 onward'}
        ],        
    },
    {
        parentKey:"religion-and-gurus", key: "devi", levelIndex:2,isLeafParent:true, accessible:['superuser','sanatani'],
        label: "Religious: Goddesses",
        description:'Sketches of, and including Durga, Laxmi, Saraswati and Avatars',
        
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'religion-and-gurus', label: 'Religion And Gurus'},
            {link: '', params:'devi', label: 'Religious: Goddesses'}
        ],
        
    },
    {
        parentKey:"religion-and-gurus", key: "devi", levelIndex:2,isLeafParent:true, accessible:['superuser','sanatani'],
        label: "Religious: Goddesses",
        description:'Sketches of, and including Durga, Laxmi, Saraswati and Avatars',
        
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'religion-and-gurus', label: 'Religion And Gurus'},
            {link: '', params:'devi', label: 'Religious: Goddesses'}
        ],
        
    },    
]
/*

export const MenuTree: MenuItem[] = [
    { tab:"Admin", label:  'Technical', isLeafParent: false, key: 'technical', accessible: ['non-living', 'all'], dateUploaded: '05-12-2021' },
   
    
   
   
      { parentKey: "religious-other-deities", label:  'Goddesses', isLeafParent: false, key: 'devi', accessible: ["sanatani"], dateUploaded: '01-29-2023' },
    { parentKey: "religious-other-deities", label:  'Mahadev', isLeafParent: false, key: 'mahadev', accessible: ["sanatani"], dateUploaded: '02-01-2023' },
    { parentKey: "religious-other-deities", label:  'Mahadev and Family', isLeafParent: false, key: 'mahadev-family', accessible: ["sanatani"], dateUploaded: '06-01-2023' },
    { parentKey: "religious-other-deities", label:  'Laxmi, Narayan, Shree Ram, and family, Bajrangbali', isLeafParent: false,  dateUploaded: '02-05-2023', key: 'laxmi-vishnu-hanuman', accessible: ["sanatani"] },
    { parentKey: "religious-gurus-and-mystics", label:  'Spiritual Souls:Datta Lineage, Sikhs, East of India', isLeafParent: false, parent:true, dateUploaded: '02-13-2023', key: 'dattavatar', accessible: ["guru"] },
    { parentKey: "religious-gurus-and-mystics", label:  'Shree Swami Samartha', isLeafParent: false, key: 'swami-samartha', accessible: ["sanatani"], dateUploaded: '04-24-2023' },
    { parentKey: "religious-gurus-and-mystics", label:  'Shree Swami Samartha (Q2 2023 onward)', isLeafParent: false, key: 'swami-samartha-q2-2023', accessible: ["guru"], dateUploaded: '04-13-2024' },
    { parentKey: "shirdi-sai", label:  'Shirdi Sai: to  Q3 2021', isLeafParent: false, parent: true, key: 'shirdi-sai-q1-q2-2021', accessible: ["guru"], dateUploaded: '02-07-2023'  },
    { parentKey: "shirdi-sai", label:  '- Q3 2021 - Q1 2022', isLeafParent: true, key: 'shirdi-sai-q3-q4-2021', accessible: ["guru"], dateUploaded: '03-31-2022' },
    { parentKey: "shirdi-sai", label:  '- Q2 Q3 2022', isLeafParent: true, key: 'shirdi-sai-q2-q3-2022', accessible: ["guru"], dateUploaded: '02-07-2023' },
    { parentKey: "shirdi-sai", label:  '- Q3,Q4 2022 Q1 2023', isLeafParent: true, key: 'shirdi-sai-q4-2022-q1-2023', accessible: ["guru"], dateUploaded: '03-02-2023' },
    { parentKey: "shirdi-sai", label:  '- Q2 Q3 2023', isLeafParent: true, key: 'shirdi-sai-q2-q3-2023', accessible: ["guru"], dateUploaded: '06-02-2023' },
    { parentKey: "shirdi-sai", label:  '- Q4 2023 Q1 2024', isLeafParent: true, key: 'shirdi-sai-q4-2023-q1-2024', accessible: ["guru"], dateUploaded: '04-14-2024' },
    { parentKey: "shirdi-sai", label:  '- Sai Satcharitra', isLeafParent: true, key: 'baba-themes-1', accessible: ["guru"], dateUploaded: '02-28-2022' },
    { parentKey: "otherbeings-places-events", label:  'Religion and Gurus', isLeafParent: false, key: 'religion-and-guru', accessible: ['people',  'non-religious', 'all'], dateUploaded: '02-02-2023' },
     { parentKey: "otherbeings-places-events", label:  'People', isLeafParent: false, key: 'people-places', accessible: ['people',  'non-religious', 'all'], dateUploaded: '04-14-2024' },
    { parentKey: "otherbeings-places-events", label:  'Places, Scenes and Objects', isLeafParent: false, key: 'places-scenes-objects', accessible: ['non-living',  'non-religious', 'all'], dateUploaded: '06-01-2023' },
    { parentKey: "otherbeings-places-events", label:  'Misc, Themes', isLeafParent: false, key: 'themes-misc', accessible: ['non-living',  'non-religious', 'all'], dateUploaded: '05-14-2023' },
    { tab:"Misc", label:  'Anim Unorganized', isLeafParent: false, key: 'animate-to-be-oragnized1', accessible: ['non-living',  'non-religious', 'all'], dateUploaded: '02-03-2022' },
   // WIP { tab:"Misc", label:  'Technical', isLeafParent: false, key: 'technical', accessible: ['non-living', 'all'], dateUploaded: '02-03-2022' },
    { parentKey: "transport-and-machines", label:  'Rail', isLeafParent: false,  key: 'trains', accessible: ['non-living', 'non-religious',  'all'], dateUploaded: '02-08-2023' },
    { parentKey: "transport-and-machines", label:  ' - IR WDM2', isLeafParent: true, key: 'trains-ir-alcos', accessible: ['non-living', 'non-religious',  'all'], dateUploaded: '11-28-2022' },
    { parentKey: "transport-and-machines", label:  ' - IR trains)', isLeafParent: true, key: 'trains-ir-special-trains', accessible: ['non-living',  'non-religious', 'all'], dateUploaded: '02-02-2023' },
    { parentKey: "mumbai-meri-jaan", label:  'Mumbai Meri Jaan', isLeafParent: false, key: 'mumbai-meri-jaan', accessible: ['non-living',  'non-religious', 'all'], dateUploaded: '11-28-2022' },
    { parentKey: "mumbai-meri-jaan", label:  ' - Q1 2023 onward', isLeafParent: true, key: 'mumbai-meri-jaan-2', accessible: ['non-living',  'non-religious', 'all'], dateUploaded: '01-29-2023' },
    { parentKey: "transport-and-machines", label:  'Aircraft, Ships and Cars', isLeafParent: false, key: 'planes', accessible: ['non-living', 'non-religious',  'all'], dateUploaded: '02-14-2023' },
    { parentKey: "transport-and-machines", label:  '- Q2 2023 onward', isLeafParent: false, key: 'planesQ12023', accessible: ['non-living', 'non-religious', 'all'], dateUploaded: '05-12-2023' },
    { tab:"Admin", label:  'technical', isLeafParent: false, key: 'technical', accessible: ['non-living', 'all'], dateUploaded: '05-12-2021' },
];
*/