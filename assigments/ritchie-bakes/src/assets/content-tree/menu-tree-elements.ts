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
        description:'',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'speciality-cakes-chocolate', label: 'Speciality Cakes - Chocolate'}
        ],    
    }, 
    {
        parentKey:'top-level',key: "speciality-cakes-non-chocolate", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Speciality Cakes - Non Chocolate", 
        description:'',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'speciality-cakes-non-chocolate', label: 'Speciality Cakes - Non Chocolate'}
        ],    
    }, 
    {
        parentKey:'top-level',key: "cup-cakes", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Cup Cakes", 
        description:'',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'cup-cakes', label: 'Cup Cakes'}
        ],    
    }, 
    {
        parentKey:'top-level',key: "cookies", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Cookies", 
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