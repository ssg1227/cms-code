import { BreadCrumb } from "./bread-crumbs";
// CMS picture gallery hierarchy structure
// This is a tree structure, where the leaf key will load the 
// JSON containing a picture list
// This modifies and enhances the menu-tree logic of the old app
export interface TreeNodeElement {
    key:string; // unique id.. like a primary key, also picture list loader for leaf
    parentKey?:string; // like a foreign key and establishing parent. optional()
    levelIndex?:number ;
    breadCrumb:BreadCrumb[]; // better safe than optimal for now May 3 2024
    // better safe than optimal 
    label:string; 
    description?:string ;
    roleBasedDescription?: string;
    isLeaf:boolean;
    accessible?:string[]; // roles match users roles many to many match
    
}

/*

export const MenuTree: MenuItem[] = [
    { tab:"Admin", label:  'Technical', isLeaf: false, key: 'technical', roles: ['non-living', 'all'], dateUploaded: '05-12-2021' },
    { parentKey: "special-lists", label: 'Changers: before 2022', isLeaf: false, key: '',  key: 'changers-b4-2022', roles: ["any"] },
    { parentKey: "special-lists", label:  ' - 2022', isLeaf: true, key: 'changers-2022', roles: ["any"] },
    { parentKey: "special-lists", label:  ' - 2023', isLeaf: true, key: 'changers-2023', roles: ["any"] },
    { parentKey: "special-lists", label:  ' - 2024', isLeaf: true, key: 'changers-2024', roles: ["any"] },
    { parentKey: "special-lists", label:  'The Best: before 2022', isLeaf: false, key: 'showpiece', roles: ["any"] },
    { parentKey: "special-lists", label:  '- 2022', isLeaf: false, key: 'showpiece-2022', roles: ["any"] },
    { parentKey: "special-lists", label:  '- 2023', isLeaf: false, key: 'showpiece-2023', roles: ["any"] },
    { parentKey: "special-lists", label:  '- 2024', isLeaf: false, key: 'showpiece-2024', roles: ["any"] },
    { parentKey: "special-lists", label:  'Latest Uploads', isLeaf: false, key: 'latest-uploads', roles: ['any'] },
    { parentKey: "religious-shree-ganesh", roles:["sanatani"], label:  'Shree Ganesh: pre Q42021 ', isLeaf: false, ey: 'shree-ganesh',  dateUploaded: '12-11-2021' },
    { parentKey: "religious-shree-ganesh", roles:["sanatani"], label:  '- Q4 2021 onward', isLeaf: true, key: 'shree-ganesh-gte-q4-2021',  dateUploaded: '01-31-2023' },
    { parentKey: "religious-shree-ganesh", roles:["sanatani"], label:  '- Q1 2023 onward', isLeaf: true, key: 'shree-ganesh-gte-q1-2023',  dateUploaded: '03-23-2023' },
    { parentKey: "religious-shree-ganesh", roles:["sanatani"], label:  '- Q1 2024 onward', isLeaf: true, key: 'shree-ganesh-gte-q1-2024',  dateUploaded: '04-09-2024' },
    { parentKey: "religious-other-deities", label:  'Goddesses', isLeaf: false, key: 'devi', roles: ["sanatani"], dateUploaded: '01-29-2023' },
    { parentKey: "religious-other-deities", label:  'Mahadev', isLeaf: false, key: 'mahadev', roles: ["sanatani"], dateUploaded: '02-01-2023' },
    { parentKey: "religious-other-deities", label:  'Mahadev and Family', isLeaf: false, key: 'mahadev-family', roles: ["sanatani"], dateUploaded: '06-01-2023' },
    { parentKey: "religious-other-deities", label:  'Laxmi, Narayan, Shree Ram, and family, Bajrangbali', isLeaf: false,  dateUploaded: '02-05-2023', key: 'laxmi-vishnu-hanuman', roles: ["sanatani"] },
    { parentKey: "religious-gurus-and-mystics", label:  'Spiritual Souls:Datta Lineage, Sikhs, East of India', isLeaf: false, parent:true, dateUploaded: '02-13-2023', key: 'dattavatar', roles: ["guru"] },
    { parentKey: "religious-gurus-and-mystics", label:  'Shree Swami Samartha', isLeaf: false, key: 'swami-samartha', roles: ["sanatani"], dateUploaded: '04-24-2023' },
    { parentKey: "religious-gurus-and-mystics", label:  'Shree Swami Samartha (Q2 2023 onward)', isLeaf: false, key: 'swami-samartha-q2-2023', roles: ["guru"], dateUploaded: '04-13-2024' },
    { parentKey: "shirdi-sai", label:  'Shirdi Sai: to  Q3 2021', isLeaf: false, parent: true, key: 'shirdi-sai-q1-q2-2021', roles: ["guru"], dateUploaded: '02-07-2023'  },
    { parentKey: "shirdi-sai", label:  '- Q3 2021 - Q1 2022', isLeaf: true, key: 'shirdi-sai-q3-q4-2021', roles: ["guru"], dateUploaded: '03-31-2022' },
    { parentKey: "shirdi-sai", label:  '- Q2 Q3 2022', isLeaf: true, key: 'shirdi-sai-q2-q3-2022', roles: ["guru"], dateUploaded: '02-07-2023' },
    { parentKey: "shirdi-sai", label:  '- Q3,Q4 2022 Q1 2023', isLeaf: true, key: 'shirdi-sai-q4-2022-q1-2023', roles: ["guru"], dateUploaded: '03-02-2023' },
    { parentKey: "shirdi-sai", label:  '- Q2 Q3 2023', isLeaf: true, key: 'shirdi-sai-q2-q3-2023', roles: ["guru"], dateUploaded: '06-02-2023' },
    { parentKey: "shirdi-sai", label:  '- Q4 2023 Q1 2024', isLeaf: true, key: 'shirdi-sai-q4-2023-q1-2024', roles: ["guru"], dateUploaded: '04-14-2024' },
    { parentKey: "shirdi-sai", label:  '- Sai Satcharitra', isLeaf: true, key: 'baba-themes-1', roles: ["guru"], dateUploaded: '02-28-2022' },
    { parentKey: "otherbeings-places-events", label:  'Religion and Gurus', isLeaf: false, key: 'religion-and-guru', roles: ['people',  'non-religious', 'all'], dateUploaded: '02-02-2023' },
     { parentKey: "otherbeings-places-events", label:  'People', isLeaf: false, key: 'people-places', roles: ['people',  'non-religious', 'all'], dateUploaded: '04-14-2024' },
    { parentKey: "otherbeings-places-events", label:  'Places, Scenes and Objects', isLeaf: false, key: 'places-scenes-objects', roles: ['non-living',  'non-religious', 'all'], dateUploaded: '06-01-2023' },
    { parentKey: "otherbeings-places-events", label:  'Misc, Themes', isLeaf: false, key: 'themes-misc', roles: ['non-living',  'non-religious', 'all'], dateUploaded: '05-14-2023' },
    { tab:"Misc", label:  'Anim Unorganized', isLeaf: false, key: 'animate-to-be-oragnized1', roles: ['non-living',  'non-religious', 'all'], dateUploaded: '02-03-2022' },
   // WIP { tab:"Misc", label:  'Technical', isLeaf: false, key: 'technical', roles: ['non-living', 'all'], dateUploaded: '02-03-2022' },
    { parentKey: "transport-and-machines", label:  'Rail', isLeaf: false,  key: 'trains', roles: ['non-living', 'non-religious',  'all'], dateUploaded: '02-08-2023' },
    { parentKey: "transport-and-machines", label:  ' - IR WDM2', isLeaf: true, key: 'trains-ir-alcos', roles: ['non-living', 'non-religious',  'all'], dateUploaded: '11-28-2022' },
    { parentKey: "transport-and-machines", label:  ' - IR trains)', isLeaf: true, key: 'trains-ir-special-trains', roles: ['non-living',  'non-religious', 'all'], dateUploaded: '02-02-2023' },
    { parentKey: "mumbai-meri-jaan", label:  'Mumbai Meri Jaan', isLeaf: false, key: 'mumbai-meri-jaan', roles: ['non-living',  'non-religious', 'all'], dateUploaded: '11-28-2022' },
    { parentKey: "mumbai-meri-jaan", label:  ' - Q1 2023 onward', isLeaf: true, key: 'mumbai-meri-jaan-2', roles: ['non-living',  'non-religious', 'all'], dateUploaded: '01-29-2023' },
    { parentKey: "transport-and-machines", label:  'Aircraft, Ships and Cars', isLeaf: false, key: 'planes', roles: ['non-living', 'non-religious',  'all'], dateUploaded: '02-14-2023' },
    { parentKey: "transport-and-machines", label:  '- Q2 2023 onward', isLeaf: false, key: 'planesQ12023', roles: ['non-living', 'non-religious', 'all'], dateUploaded: '05-12-2023' },
    { tab:"Admin", label:  'technical', isLeaf: false, key: 'technical', roles: ['non-living', 'all'], dateUploaded: '05-12-2021' },
];
*/
export const treeNodeElements:TreeNodeElement[] = [
    {
        key:'top-level',
        levelIndex:0,
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'}
        ],
        label:"HOME PAGE",
        isLeaf:false,
        accessible:["all"] // roles match users roles many to many match
        
    },{
        parentKey:'top-level',
        key: "special-lists",
        levelIndex:1,
        label: "Special Lists",
        description:'Extracted works from the entire collection like best attempts, something new, latest sketches, etc',
        isLeaf:false,
        accessible:['all'],
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'special-lists', label: 'Special Lists'}
        ],
        
    }, {
        parentKey:'top-level',
        key: "religious-shree-ganesh",
        levelIndex:1,
        label: "Religious: Shree Ganesh",
        description:'Sketches of, and including Shree Ganesh',
        isLeaf:false,
        accessible:['superuser','sanatan'],
        breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '/view', params:'religious-shree-ganesh', label: 'Shree Ganesh'}
        ],
        
    }, 
    /*

    ,
    {
        key: "religious-other-deities",
        label: "Religious: Other Deities, etc",
        description:'Shankar Parvati, Vishnu. Other drawings in this genre',
        isLeaf:false,
        accessible:['superuser','sanatan']
    }
    ,
    {
        key: "religious-gurus-and-mystics",
        label: "Religious: Gurus And Mystics",
        description:`Gurus and Preachers related to Spirituality, like Lord Dattatreya and Avatars, the Sikh Gurus. 
                        Shirdi Sai sketches being many are under a separate bucket`,
        isLeaf:false,
        accessible:['superuser','guru']
    }
    
    ,
    {
        key: "shirdi-sai",
        label: "Religious: Shirdi Sai Baba",
        description:`Sadguru Shirdi Sai I have made so many drawings that it makes logical sense to put this in a separate bucket`,
        isLeaf:false,
        accessible:['superuser','guru']
    }, {
        key: "otherbeings-places-events",
        label: "Beings, Places and Themes ",

        description:`Pictures of the living - famous human personalities, other living beings (as in May 2024 occasional). Places and famous structures. Events, Misc. Themes. 
                  (But Mumbai City related drawing warrant a separate, independent group!!)`,
        roleBasedDescription:`ADD:Also some chosen religious and spirtual themes: NOTS superuser, sanatan,guru'`,
        
        // if exists rolebaseddescr
        //    split by ':'
        //    if user roles match third segment NOTS = not or nothing means match the role
        //    1st segment, ADD or no spec = add, INSERT = add at begining, REPLACE = replace
        // Rest logic here, else if will get too complicated
        
        isLeaf:false,
        accessible:['superuser','people'],// ??=>, 'all']
    }, {
        key: "mumbai-meri-jaan",
        label: "Salaam Mumbai",

        description:`Dedication to the City that is part of me that I am part of. Wherever I am`,
        isLeaf:false,
        accessible:['superuser','people'],// ??=>, 'all']
    },
    {
        key: "transport-and-machines",
        label: "Transport and Machines",
        description:`Trains, Cars, Planes, Ships, Military equipment. Anything that is mechanical`,
        isLeaf:false,
        accessible:['all']
    },
    **/
    
    
]
// #### IN TRANSIT .. OLDER ITERATION


export interface TreeNode {
    key:string; // unique id.. like a primary key, also picture list loader for leaf
    parentKey?:string; // like a foreign key and establishing parent. optional()
    // better safe than optimal 
    label:string; 
    description?:string ;
    roleBasedDescription?: string;
    isLeaf:boolean;
    accessible?:string[]; // roles match users roles many to many match
    isLeafren?:TreeNode[]; // noSQL wannabe; unused now
}
export interface TreeNodeCollection {
    parentKey?:string; // like a foreign key and establishing parent. optional()
    levelIndex?:number;
    breadCrumb:BreadCrumb[]; // better safe than optimal for now May 3 2024
    treeNodeElements:TreeNode[];
}
export const TopLevelCollection:TreeNodeCollection = 
{
    levelIndex:0,
    breadCrumb:[
        {link: '/view', params:'top-level', label: 'HOME'}
    ],
    treeNodeElements:[{
        key: "special-lists",
        label: "Special Lists",
        description:'Extracted works from the entire collection like best attempts, something new, latest sketches, etc',
        isLeaf:false,
        accessible:['all']
    },
    {
        key: "religious-shree-ganesh",
        label: "Religious: Shree Ganesh",
        description:'Sketches of, and including Shree Ganesh',
        isLeaf:false,
        accessible:['superuser','sanatan']
    }
    ,
    {
        key: "religious-other-deities",
        label: "Religious: Other Deities, etc",
        description:'Shankar Parvati, Vishnu. Other drawings in this genre',
        isLeaf:false,
        accessible:['superuser','sanatan']
    }
    ,
    {
        key: "religious-gurus-and-mystics",
        label: "Religious: Gurus And Mystics",
        description:`Gurus and Preachers related to Spirituality, like Lord Dattatreya and Avatars, the Sikh Gurus. 
                        Shirdi Sai sketches being many are under a separate bucket`,
        isLeaf:false,
        accessible:['superuser','guru']
    }
    
    ,
    {
        key: "shirdi-sai",
        label: "Religious: Shirdi Sai Baba",
        description:`Sadguru Shirdi Sai I have made so many drawings that it makes logical sense to put this in a separate bucket`,
        isLeaf:false,
        accessible:['superuser','guru']
    }, {
        key: "otherbeings-places-events",
        label: "Beings, Places and Themes ",

        description:`Pictures of the living - famous human personalities, other living beings (as in May 2024 occasional). Places and famous structures. Events, Misc. Themes. 
                  (But Mumbai City related drawing warrant a separate, independent group!!)`,
        roleBasedDescription:`ADD:Also some chosen religious and spirtual themes: NOTS superuser, sanatan,guru'`,
        /*
         if exists rolebaseddescr
            split by ':'
            if user roles match third segment NOTS = not or nothing means match the role
            1st segment, ADD or no spec = add, INSERT = add at begining, REPLACE = replace
        -- Rest logic here, else if will get too complicated
        */
        isLeaf:false,
        accessible:['superuser','people'],// ??=>, 'all']
    }, {
        key: "mumbai-meri-jaan",
        label: "Salaam Mumbai",

        description:`Dedication to the City that is part of me that I am part of. Wherever I am`,
        isLeaf:false,
        accessible:['superuser','people'],// ??=>, 'all']
    },
    {
        key: "transport-and-machines",
        label: "Transport and Machines",
        description:`Trains, Cars, Planes, Ships, Military equipment. Anything that is mechanical`,
        isLeaf:false,
        accessible:['all']
    },
    ]
};

export const ShreeGaneshCollection:TreeNodeCollection = 
{
    parentKey: 'religious-shree-ganesh',
    breadCrumb:[
        {link: '/view', params:'top-level', label: 'HOME'},
        {link: '/view', params:'religious-shree-ganesh', label: 'Shree Ganesh'}
    ],
    
    levelIndex: 1,
    treeNodeElements:[{
        key: "shree-ganesh-b4-q4-2021",
        label: "Shree Ganesh Before Q4 2021",
        description:'Extracted works from the entire collection like best attempts, something new, latest sketches, etc',
        isLeaf:false,
        accessible:['all']
    },
    {
        key: "shree-ganesh-gte-q4-2021",
        label: "Shree Ganesh  Q4 2021 to Q1 2023",
        description:'Sketches of, and including Shree Ganesh',
        isLeaf:false,
        accessible:['superuser','sanatan']
    }
    ,
    {
        key: "shree-ganesh-gte-q1-2023",
        label: "Shree Ganesh Q1 2023 to Q1 2024",
        description:'Shankar Parvati, Vishnu. Other drawings in this genre',
        isLeaf:false,
        accessible:['superuser','sanatan']
    }
    ]
};