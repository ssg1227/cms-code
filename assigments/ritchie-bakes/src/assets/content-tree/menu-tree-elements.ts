import { TreeNodeElement } from "../assets-common/tree-node-element"

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
        parentKey:'top-level',key: "speciality-cakes-chocolate", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Speciality Cakes - Chocolate", 
         cardLevelImage:'assets/gallery-files/images/speciality-cakes-chocolate/chocolate-cake-1.jpeg',
        description:'',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'speciality-cakes-chocolate', label: 'Speciality Cakes - Chocolate'}
        ],    
    }, 
    {
        parentKey:'top-level',key: "speciality-cakes-non-chocolate", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Speciality Cakes - Non Chocolate", 
        cardLevelImage:'assets/gallery-files/images/speciality-cakes-non-chocolate/birthday-cake-1-tbd.jpeg',
        description:'',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'speciality-cakes-non-chocolate', label: 'Speciality Cakes - Non Chocolate'}
        ],    
    }, 
    {
        parentKey:'top-level',key: "other-cakes", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Other Cakes -Coffee Cakes, Eggless etc.", 
        cardLevelImage:'assets/gallery-files/images/other-cakes/Eggless Chocolate Walnut Tea cake.jpeg',
        description:'',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'other-cakes', label: 'Other Cakes -Coffee Cakes, Eggless etc.'}
        ],    
    }, 
    {
        parentKey:'top-level',key: "cup-cakes", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Cup Cakes", 
        cardLevelImage:'assets/gallery-files/images/cup-cakes/coffee-cup-cakes.jpeg', 
        description:'',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'cup-cakes', label: 'Cup Cakes'}
        ],    
    }, 
    {
        parentKey:'top-level',key: "cookies", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Cookies", 
        cardLevelImage:'assets/gallery-files/images/cookies/butter-cookies.jpeg',  
        description:'',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'cookies', label: 'Cookies'}
        ],    
    }
    , 
    {
        parentKey:'top-level',key: "contact-details", levelIndex:1,isLeafParent:false, roles:['any'],
        label: "Contact Details", 
        description:'',
        cardLevelImage:'assets/gallery-files/images/contact-card.jpeg',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'contact-details', label: 'Contact Details'}
        ],    
    }
]