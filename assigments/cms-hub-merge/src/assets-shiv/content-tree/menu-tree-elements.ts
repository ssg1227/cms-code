import { TreeNodeElement } from "@settings-and-models/tree-node-element"

export const MenuTreeElements:TreeNodeElement[] = [
    // #### ROOT
    {
        key:'top-level', levelIndex:0,isLeafParent:false, roles:["any"], // roles match users roles many to many match
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '', params:'top-level', label: 'HOME'}
        ],
        label:"HOME PAGE",
    },
    {
        parentKey:'top-level',key: "shiv-sketches", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Shiv Sketches", 
        cardLevelImage:'aassets/gallery-files/images/mahadev/Shivji2022ShravanMonday_final.png',
        description:'Sketches',
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'shiv-sketches', label: 'Shiv '}
        ],    
    },
    {
        parentKey:'top-level',key: "shiv-puran", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Shiv Puran", 
        cardLevelImage:'aassets/gallery-files/images/mahadev/Shivji2022ShravanMonday_final.png',
        description:'Two versions, short and unabridged',
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'shiv-puran"', label: 'Shiv Puran'}
        ],    
    }
]