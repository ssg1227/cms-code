import { BreadCrumb } from "./bread-crumbs";
// CMS picture gallery hierarchy structure
// This is a tree structure, where the leaf key will load the 
// JSON containing a picture list
// This replaces the menu-tree logic of the old app
export interface TreeNode {
    key:string; // unique id.. like a primary key, also picture list loader for leaf
    parentKey?:string; // like a foreign key and establishing parent. optional()
    // better safe than optimal 
    label:string; 
    description?:string ;
    roleBasedDescription?: string;
    isLeaf:boolean;
    accessible?:string[]; // roles match users roles many to many match
    children?:TreeNode[]; // noSQL wannabe; unused now
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
        key: "shree-ganesh",
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
